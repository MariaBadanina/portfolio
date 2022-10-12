import { MarchingCube, MarchingCubes } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Depth, DebugLayerMaterial, Fresnel } from "lamina"
import { useRef } from "react"
import Cursor from "./Cursor"

const Sphere = ({ x, y, z, s }) => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    ref.current.position.x = x / 1.5 + Math.sin((t * s) / 2) * 0.2
    ref.current.position.y = y / 1.5 + Math.sin((t * s) / 2) * 0.2
    ref.current.position.z = z / 1.5 + Math.sin((t * s) / 2) * 0.2
  })

  return <MarchingCube ref={ref} />
}

const SphereGroup = () => {
  const data = new Array(10).fill().map((_, i) => ({
    x: Math.random() * 1 - 0.5,
    y: Math.random() * 1 - 0.5,
    z: Math.random() * 1 - 0.5,
    s: Math.random() + 2,
  }))

  return (
    <MarchingCubes resolution={64} enableColors>
      <DebugLayerMaterial lighting="standard" toneMapped={true}>
        {/* <Depth
          colorA="#4214ae"
          colorB="#ff5fc5"
          alpha={1}
          mode="normal"
          near={0.0}
          far={0.9}
          origin={[0, 0, 0]}
        /> */}
        {/* <Depth
          colorA="#b1344f"
          colorB="#e44019"
          alpha={1}
          mode="normal"
          near={0.0}
          far={0.9}
          origin={[0, 0, 0]}
        /> */}

        {/* <Depth
          near={0}
          far={0.5}
          origin={[-0.5, 0.3, 0]}
          colorA={"#fefb00"}
          colorB={"#fe0000"}
        /> */}

        {/* <Depth
          colorA="#ffcd54"
          colorB="#fd8b88"
          alpha={1}
          mode="normal"
          near={0}
          far={0.5}
          origin={[-0.5, 0.3, 0]}
        /> */}
        {/* 
        <Depth
          colorA="#b1344f"
          colorB="#e44019"
          alpha={1}
          mode="normal"
          near={0.5}
          far={1}
          origin={[0.3, -0.3, 0]}
        /> */}
        <Depth
          colorA="#b1344f"
          colorB="#e44019"
          alpha={1}
          mode="normal"
          near={0.2}
          far={1}
          origin={[0.3, -0.3, 0]}
        />
        <Fresnel
          color="#fefefe"
          alpha={0.54}
          bias={0.1}
          mode="overlay"
          scale={1}
        />
      </DebugLayerMaterial>
      {data.map((props, i) => (
        <Sphere key={i} {...props} />
      ))}
      <Cursor />
    </MarchingCubes>
  )
}

export default SphereGroup
