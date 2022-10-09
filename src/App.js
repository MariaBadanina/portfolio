import {
  MarchingCube,
  MarchingCubes,
  OrbitControls,
  Sky,
} from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import EnvironmentComponent from "./EnvironmentComponent"

const Cubes = () => {
  const ref = useRef()

  useFrame(({ clock }) => {
    // console.log("clock:-->", Math.sin(clock.elapsedTime + 0.5 * 100) * 0.4)
    ref.current.position.x = Math.sin(clock.elapsedTime + 0.5 * 100) * 0.4
  })

  return (
    <MarchingCubes resolution={64} enableColors>
      <meshStandardMaterial vertexColors roughness={0.2} />
      <MarchingCube color="red" ref={ref} />
      <MarchingCube color="blue" />
    </MarchingCubes>
  )
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 25 }}>
        <Sky />
        <EnvironmentComponent />
        <Cubes />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
