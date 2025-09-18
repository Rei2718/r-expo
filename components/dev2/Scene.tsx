"use client"

import * as THREE from "three"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment, useTexture } from "@react-three/drei"
import { Physics, useSphere } from "@react-three/cannon"
import { EffectComposer, SMAA, Bloom } from "@react-three/postprocessing"
import { InstancedMesh } from "three"

const rfs = THREE.MathUtils.randFloatSpread

const sphereGeometry = new THREE.IcosahedronGeometry(1, 4);
const baubleMaterial = new THREE.MeshStandardMaterial({ color: "#FF9230", roughness: 0, envMapIntensity: 1 })

export default function Scene() {
  return (
    <Canvas shadows={false} gl={{ antialias: false }} dpr={[2, 3]} camera={{ position: [0, 0, 20], fov: 35, near: 1, far: 40 }}>
      <ambientLight intensity={0.5} />
      <color attach="background" args={["#000000"]} />
      <spotLight intensity={1} angle={0.2} penumbra={1} position={[30, 30, 30]} castShadow={false} shadow-mapSize={[512, 512]} />
      <Physics gravity={[0, 2, 0]} iterations={10}>
        <Pointer />
        <Clump />
      </Physics>
      <Environment files="/adamsbridge.hdr" />
      <EffectComposer enableNormalPass={false} multisampling={0}>
        <Bloom mipmapBlur levels={5} intensity={0.5} luminanceThreshold={1} />
        <SMAA />
      </EffectComposer>
    </Canvas>
  )
}

function Clump() {
  const texture = useTexture("/cross.jpg")
  const count = 30;
  const [ref, api] = useSphere<InstancedMesh>(() => ({ args: [1], mass: 1, angularDamping: 0.1, linearDamping: 0.65, position: [rfs(20), rfs(20), rfs(20)] }))
  const mat = new THREE.Matrix4()
  const vec = new THREE.Vector3()

  useFrame(() => {
    for (let i = 0; i < count; i++) {
      ref.current.getMatrixAt(i, mat)
      api.at(i).applyForce(vec.setFromMatrixPosition(mat).normalize().multiplyScalar(-40).toArray(), [0, 0, 0])
    }
  })

  return (
    <instancedMesh ref={ref} castShadow receiveShadow args={[sphereGeometry, baubleMaterial, count]} material-map={texture}> 
    </instancedMesh>
  )
}

function Pointer() {
  const viewport = useThree((state) => state.viewport)
  const [ref, api] = useSphere(() => ({ type: "Kinematic", args: [3], position: [0, 0, 0] }))

  useFrame((state) => api.position.set((state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2, 0))

  return (
    <mesh ref={ref} scale={0.2} geometry={sphereGeometry}>
      <meshBasicMaterial color={[4, 4, 4]} toneMapped={false} visible={false}/>
      <pointLight intensity={1} distance={15} />
    </mesh>
  )
}