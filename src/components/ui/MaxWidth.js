import styled from 'styled-components'
import ScreenSizes from '../../config/mediaVariables'

const Flex = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flexDirection};
  justify-content: ${(p) => p.justifyContent};
  width: 100%;
  margin: 0 auto;
  padding: ${(p) => p.px};
  @media (min-width: ${ScreenSizes.tablet}) {
    width: 688px;
  }
  @media (min-width: ${ScreenSizes.laptop}) {
    width: 928px;
  }
  @media (min-width: ${ScreenSizes.desktop}) {
    width: 1120px;
  }
  @media (min-width: ${ScreenSizes.desktopL}) {
    width: 1488px;
  }
`

const MaxWidth = ({ justifyContent, flexDirection, children, px }) => {
  return (
    <Flex justifyContent={justifyContent} flexDirection={flexDirection} px={px}>
      {children}
    </Flex>
  )
}

export default MaxWidth
