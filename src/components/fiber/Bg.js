import { Depth, LayerMaterial } from 'lamina'
import * as THREE from 'three'

const Bg = () => {
  return (
    <mesh scale={10}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB="#ff7d58"
          colorA="#73007f"
          alpha={1}
          mode="normal"
          near={11.5}
          far={19}
          origin={[10, -10, -10]}
        />
      </LayerMaterial>
    </mesh>
  )
}

export default Bg
