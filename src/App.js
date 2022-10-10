import {
  MarchingCube,
  MarchingCubes,
  OrbitControls,
  Sky,
} from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef } from "react"
import EnvironmentComponent from "./EnvironmentComponent"

const Sphere = ({ x, y, z, s }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    ref.current.position.x = x + Math.sin((clock.elapsedTime * s) / 2) * 0.2
    ref.current.position.y = y + Math.sin((clock.elapsedTime * s) / 2) * 0.2
    ref.current.position.z = z + Math.sin((clock.elapsedTime * s) / 2) * 0.2
  })

  return <MarchingCube ref={ref} />
}

const SpheresGroup = () => {
  const data = new Array(10).fill().map((_, i) => ({
    x: Math.random() * 1 - 0.5,
    y: Math.random() * 1 - 0.5,
    z: Math.random() * 1 - 0.5,
    s: Math.random() + 2,
  }))

  return (
    <MarchingCubes resolution={64} enableColors>
      <meshStandardMaterial vertexColors roughness={0.2} />
      {data.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}
    </MarchingCubes>
  )
}

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 5], fov: 25, near: 1, far: 40 }}>
        <Sky />
        <EnvironmentComponent />
        <SpheresGroup />
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
