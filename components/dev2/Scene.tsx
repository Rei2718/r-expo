"use client"

import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, useTexture, Text } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import type { Triplet } from "@react-three/cannon"
import { InstancedMesh } from "three"

const rfs = THREE.MathUtils.randFloatSpread
const sphereGeometry = new THREE.IcosahedronGeometry(1, 4)

const baubleMaterial = new THREE.MeshStandardMaterial({
  color: "#FF9230",
  roughness: 0,
  envMapIntensity: 1,
})

type SceneProps = {
  inView: boolean
}

export default function Scene({ inView }: SceneProps) {
  return (
    <Canvas
      shadows={false}
      gl={{ antialias: false }}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
      <ambientLight intensity={0.5} />
      <color attach="background" args={["#000000"]} />
      <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow={false} />
      <ResponsiveText />
      <Physics gravity={[0, 2, 0]} iterations={6} broadphase="SAP">
        <Pointer inView={inView} />
        <Clump inView={inView} />
      </Physics>
      <Environment files="/adamsbridge.hdr" />
    </Canvas>
  )
}

function ResponsiveText() {
  const { viewport } = useThree()
  const fontSize = viewport.width / 9

  return (
    <Text fontSize={fontSize} position={[0, 0, 10]} color="white" anchorX="center" anchorY="middle">
      R-EXPO
    </Text>
  )
}

type ClumpProps = {
  inView: boolean
}

function Clump({ inView }: ClumpProps) {
  const texture = useTexture("/cross.jpg")
  const count = 20
  const mat = new THREE.Matrix4()
  const vec = new THREE.Vector3()
  const force: Triplet = [0, 0, 0]
  const point: Triplet = [0, 0, 0]
  const forceFactor = -5

  const [ref1, api1] = useSphere<InstancedMesh>(() => ({
    args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)],
  }))

  const [ref2, api2] = useSphere<InstancedMesh>(() => ({
    args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)],
  }))

  const instances = [
    { ref: ref1, api: api1 },
    { ref: ref2, api: api2 },
  ];

  useFrame((state) => {
    if (!inView) return

    const frame = Math.floor(state.clock.getElapsedTime() * 60)
    const offset = frame % 4

    for (let i = offset; i < count; i += 4) {
      instances.forEach(({ ref, api }) => {
        if (ref.current) {
          ref.current.getMatrixAt(i, mat)
          vec.setFromMatrixPosition(mat).multiplyScalar(forceFactor)
          vec.toArray(force)
          api.at(i).applyForce(force, point)
        }
      })
    }
  })

  return (
    <>
      <instancedMesh ref={ref1} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, count]} material-map={texture} />
      <instancedMesh ref={ref2} castShadow receiveShadow args={[sphereGeometry, undefined, count]}>
        <meshPhysicalMaterial
          transmission={1}
          thickness={0.2}
          roughness={0}
          ior={1.5}
          color="#ffffff"
        />
      </instancedMesh>
    </>
  )
}

type PointerProps = {
  inView: boolean
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