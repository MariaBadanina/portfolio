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
import Bg from "./Bg"
import EnvironmentComponent from "./EnvironmentComponent"

const Pointer = () => {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    const { width, height } = viewport.getCurrentViewport()
    ref.current.position.x = mouse.x * (width / 2)
    ref.current.position.y = mouse.y * (height / 2)
  })
  return <MarchingCube ref={ref} color="white" />
}

const Sphere = ({ x, y, z, s }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    ref.current.position.x = x / 1.5 + Math.sin((t * s) / 2) * 0.2
    ref.current.position.y = y / 1.5 + Math.sin((t * s) / 2) * 0.2
    ref.current.position.z = z / 1.5 + Math.sin((t * s) / 2) * 0.2
  })

  return <MarchingCube ref={ref} color="white" />
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
      <LayerMaterial lighting="standard" color="yellow" toneMapped={true}>
        <Depth
          colorA="#2A8AFF"
          colorB="#ff4eb8"
          alpha={1}
          mode="multiply"
          near={0.0}
          far={0.9}
          origin={[0, 0, 0]}
        />
      </LayerMaterial>
      {data.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}
      <Pointer />
    </MarchingCubes>
  )
}

function App() {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 22 }}>
        <Suspense fallback={<Html center>Loading.</Html>}>
          <SpheresGroup />
          <EnvironmentComponent />
          <OrbitControls />
          {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
          <Bounds fit clip observe margin={1}>
            <mesh visible={false}>
              <boxGeometry />
            </mesh>
          </Bounds>
        </Suspense>
        <Bg />

        <EffectComposer multisampling={0} disableNormalPass={true}>
          <Noise opacity={0.25} />
          <Vignette eskil={false} offset={0.1} darkness={0.6} />
        </EffectComposer>
      </Canvas>
    </>
  )
}

export default App
