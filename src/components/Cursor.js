import { MarchingCube } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

const Cursor = () => {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => {
    const { width, height } = viewport.getCurrentViewport()
    ref.current.position.x = mouse.x * (width / 2)
    ref.current.position.y = mouse.y * (height / 2)
  })
  return <MarchingCube ref={ref} />
}

export default Cursor
