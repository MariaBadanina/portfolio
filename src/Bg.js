import {
  Bounds,
  Html,
  MarchingCube,
  MarchingCubes,
  OrbitControls,
} from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing"
import { Depth, LayerMaterial } from "lamina"
import { Suspense, useRef } from "react"
import * as THREE from "three"
import EnvironmentComponent from "./EnvironmentComponent"

const Bg = () => {
  return (
    <mesh scale={100}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="#ff4eb8"
          colorA="#2A8AFF"
          alpha={1}
          mode="normal"
          near={130}
          far={200}
          origin={[100, 100, -100]}
        />
      </LayerMaterial>
    </mesh>
  )
}

export default Bg
