import styled from 'styled-components'
import { ReactComponent as MeltedIcon } from '../../static/svg/melted.svg'
import { ReactComponent as MoonIcon } from '../../static/svg/moon.svg'
import { ReactComponent as DropIcon } from '../../static/svg/drop.svg'
import { ReactComponent as SunIcon } from '../../static/svg/sun.svg'

const Melted = styled(MeltedIcon)`
  cursor: pointer;
`
const Moon = styled(MoonIcon)`
  cursor: pointer;
  border: ${(p) => (p.active ? '1px solid white' : 'none')};
  border-radius: 50%;
`
const Sun = styled(SunIcon)`
  cursor: pointer;
  border: ${(p) => (p.active ? '1px solid white' : 'none')};
  border-radius: 50%;
`
const Drop = styled(DropIcon)`
  cursor: pointer;
  border: ${(p) => (p.active ? '1px solid white' : 'none')};
  border-radius: 50%;
`
export { Melted, Moon, Sun, Drop }
