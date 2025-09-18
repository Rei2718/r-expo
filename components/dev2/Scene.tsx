"use client"

import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, useTexture, Text } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, SMAA, Bloom } from "@react-three/postprocessing"
import { InstancedMesh } from "three"

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.IcosahedronGeometry(1, 4)

const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#FF9230",
  roughness: 0,
  envMapIntensity: 1
})

const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: "#FF9230",
  roughness: 0,
  transmission: 1,
  thickness: 0.5,
  envMapIntensity: 2,
})

type SceneProps = {
  inView: boolean;
}

export default function Scene({ inView }: SceneProps) {
  return (
    <Canvas shadows={false} gl={{ antialias: false }} dpr={[2, 3]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
      <ambientLight intensity={0.5} />
      <color attach="background" args={["#000000"]} />
      <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow={false} shadow-mapSize={[512, 512]} />
      <ResponsiveText />
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Pointer inView={inView} />
        <Clump inView={inView} />
      </Physics>
      <Environment files="/adamsbridge.hdr" />
      <EffectComposer enableNormalPass={false} multisampling={0}>
        <Bloom mipmapBlur levels={5} intensity={0.5} luminanceThreshold={1} />
        <SMAA />
      </EffectComposer>
    </Canvas>
  )
}

function ResponsiveText() {
  const { viewport } = useThree()
  const fontSize = viewport.width / 9

  return (
    <Text
      fontSize={fontSize}
      position={[0, 0, 10]}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      R-EXPO
    </Text>
  )
}


type ClumpProps = {
  inView: boolean;
}

function Clump({ inView }: ClumpProps) {
  const texture = useTexture("/cross.jpg")
  const count = 16
  const mat = new THREE.Matrix4()
  const vec = new THREE.Vector3()

  const [ref1, api1] = useSphere<InstancedMesh>(() => ({
    args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)]
  }))
  const [ref2, api2] = useSphere<InstancedMesh>(() => ({
    args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)]
  }))

  useFrame(() => {
    if (!inView) return

    for (let i = 0; i < count; i++) {
      ref1.current.getMatrixAt(i, mat)
      api1.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
    }
    for (let i = 0; i < count; i++) {
      ref2.current.getMatrixAt(i, mat)
      api2.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
    }
  })

  return (
    <>
      <instancedMesh ref={ref1} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, count]} material-map={texture} />
      <instancedMesh ref={ref2} castShadow receiveShadow args={[sphereGeometry, glassMaterial, count]} material-map={texture} />
    </>
  )
}


type PointerProps = {
  inView: boolean;
}

function Pointer({ inView }: PointerProps) {
  const viewport = useThree((state) => state.viewport)
  const [, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))

  useFrame((state) => {
    if (!inView) return
    api.position.set((state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 0)
  })

  return null
}