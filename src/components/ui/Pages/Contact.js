import styled from 'styled-components'
import MaxWidth from '../MaxWidth'
import { Link } from 'react-router-dom'

const OuterWrapper = styled.div`
  /* pointer-events: all; */
  overflow-y: scroll;
  height: 100vh;
`

const Wrapper = styled.div`
  width: 100px;
  /* backdrop-filter: blur(30px);
  border-radius: 50px; */
  width: 100%;
  margin: 20vh auto;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  padding: 100px;
`

const Title = styled.h1`
  font-family: GrafitaSpecialDEMO;
  font-size: 60px;
`
const Text = styled.article`
  font-size: 25px;
  pointer-events: all;
`
const StyledLink = styled(Link)`
  display: block;
  margin-bottom: 30px;
`

const Contact = () => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <Wrapper>
          <Title>Contact</Title>
          <Text>
            <StyledLink
              to="https://www.linkedin.com/in/mariabadanina/"
              target="_blank"
            >
              Linkedin
            </StyledLink>
            <StyledLink to="https://github.com/MariaBadanina" target="_blank">
              GitHub
            </StyledLink>
            <StyledLink
              to="https://www.instagram.com/maria__badanina/"
              target="_blank"
            >
              Instagram
            </StyledLink>
            <StyledLink to="mailto:maria.badanina.s@gmail.com" target="_blank">
              Mail
            </StyledLink>
          </Text>
        </Wrapper>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default Contact
