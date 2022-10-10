import {
  MarchingCube,
  MarchingCubes,
  OrbitControls,
  Sky,
  Html,
} from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, Suspense } from "react"
import EnvironmentComponent from "./EnvironmentComponent"
import {
  EffectComposer,
  DepthOfField,
  Noise,
  Vignette,
} from "@react-three/postprocessing"

const Sphere = ({ x, y, z, s }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    ref.current.position.x = x + Math.sin((t * s) / 2) * 0.2
    ref.current.position.y = y + Math.sin((t * s) / 2) * 0.2
    ref.current.position.z = z + Math.sin((t * s) / 2) * 0.2
  })

  return <MarchingCube ref={ref} />
}

const SpheresGroup = () => {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    ref.current.rotation.set(
      Math.cos(t / 2) / 1.5,
      Math.sin(t / 2) / 1.5,
      Math.cos(t / 1.5) / 1.5
    )
  })

  const data = new Array(10).fill().map((_, i) => ({
    x: Math.random() * 1 - 0.5,
    y: Math.random() * 1 - 0.5,
    z: Math.random() * 1 - 0.5,
    s: Math.random() + 2,
  }))

  return (
    <MarchingCubes resolution={64} enableColors ref={ref}>
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
        <Suspense fallback={<Html center>Loading.</Html>}>
          <SpheresGroup />
          <Sky />
          <EnvironmentComponent />
          <OrbitControls />
        </Suspense>

        <EffectComposer multisampling={0} disableNormalPass={true}>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Noise opacity={0.25} />
          <Vignette eskil={false} offset={0.1} darkness={0.6} />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App
