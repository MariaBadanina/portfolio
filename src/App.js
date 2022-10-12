import { Html } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { EffectComposer, Noise } from "@react-three/postprocessing"
import { BlendFunction } from "postprocessing"
import { Suspense } from "react"
import Bg from "./components/Bg"
import EnvironmentComponent from "./components/EnvironmentComponent"
import SphereGroup from "./components/SphereGroup"

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 3], fov: 22 }}>
        <Suspense fallback={<Html center>Loading.</Html>}>
          <SphereGroup />
          <EnvironmentComponent />
          <Bg />
          <EffectComposer multisampling={0} disableNormalPass={true}>
            <Noise opacity={0.3} blendFunction={BlendFunction.OVERLAY} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
