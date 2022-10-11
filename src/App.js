import { Bounds, Html, OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Noise, Vignette } from "@react-three/postprocessing"
import { Suspense } from "react"
import Bg from "./components/Bg"
import EnvironmentComponent from "./components/EnvironmentComponent"
import SphereGroup from "./components/SphereGroup"

function App() {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 22 }}>
        <Suspense fallback={<Html center>Loading.</Html>}>
          <SphereGroup />
          {/* Zoom to fit a 1/1/1 box to match the marching cubes */}
          <Bounds fit clip observe margin={1}>
            <mesh visible={false}>
              <boxGeometry />
            </mesh>
          </Bounds>
          <EnvironmentComponent />
          <Bg />
          <EffectComposer multisampling={0} disableNormalPass={true}>
            <Noise opacity={0.25} />
            <Vignette eskil={false} offset={0.1} darkness={0.6} />
          </EffectComposer>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </>
  )
}

export default App
