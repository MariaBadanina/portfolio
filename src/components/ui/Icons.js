import styled from 'styled-components'
import { ReactComponent as MeltedIcon } from '../../static/svg/melted.svg'
import { ReactComponent as MoonIcon } from '../../static/svg/moon.svg'
import { ReactComponent as DropIcon } from '../../static/svg/drop.svg'
import { ReactComponent as SunIcon } from '../../static/svg/sun.svg'

const Melted = styled(MeltedIcon)`
  cursor: pointer;
  * {
    fill: ${({ fill }) => fill || '#fff'};
  }
`
const Moon = styled(MoonIcon)`
  cursor: pointer;
  * {
    fill: ${({ fill }) => fill || '#fff'};
  }
`
const Sun = styled(SunIcon)`
  cursor: pointer;
  * {
    fill: ${({ fill }) => fill || '#fff'};
  }
`
const Drop = styled(DropIcon)`
  cursor: pointer;
  * {
    fill: ${({ fill }) => fill || '#fff'};
  }
`
export { Melted, Moon, Sun, Drop }
