import { Depth, LayerMaterial } from 'lamina'
import * as THREE from 'three'
import { useContext } from 'react'
import { ThemeContext } from '../../context/theme-context'

const Bg = () => {
  const { themes, theme } = useContext(ThemeContext)

  return (
    <mesh scale={10}>
      <boxGeometry args={[1, 1, 1]} />
      <LayerMaterial side={THREE.BackSide}>
        <Depth
          colorB={themes[theme]?.bgColorB}
          colorA={themes[theme]?.bgColorA}
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
