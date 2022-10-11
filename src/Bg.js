import { Depth, LayerMaterial } from "lamina"
import * as THREE from "three"

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
