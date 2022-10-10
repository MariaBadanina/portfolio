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
import * as THREE from "three"
import { LayerMaterial, Depth } from "lamina"

const vec = new THREE.Vector3()

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
  const ref = useRef()
  // useFrame(({ clock }) => {
  //   const t = clock.elapsedTime
  //   ref.current.rotation.set(
  //     Math.cos(t / 2) / 1.5,
  //     Math.sin(t / 2) / 1.5,
  //     Math.cos(t / 1.5) / 1.5
  //   )
  // })

  const data = new Array(10).fill().map((_, i) => ({
    x: Math.random() * 1 - 0.5,
    y: Math.random() * 1 - 0.5,
    z: Math.random() * 1 - 0.5,
    s: Math.random() + 2,
  }))

  return (
    <MarchingCubes resolution={64} enableColors ref={ref}>
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
        {/* <Depth
          colorA="#ff4eb8"
          colorB="#2A8AFF"
          alpha={1.0}
          mode="multiply"
          near={0.0}
          far={0.9}
          origin={[0, -0.25, -0.1]}
        /> */}
      </LayerMaterial>
      {data.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}
      <Pointer />
    </MarchingCubes>
  )
}
function Bg() {
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

function App() {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 22 }}>
        <Suspense fallback={<Html center>Loading.</Html>}>
          <SpheresGroup />
          <EnvironmentComponent />
          <OrbitControls />
        </Suspense>
        <Bg />

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
