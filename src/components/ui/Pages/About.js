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
  /* backdrop-filter: blur(30px); */
  /* border-radius: 50px; */
  width: 100%;
  margin-top: 20vh;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  padding: 100px;
`

const Title = styled.h1`
  font-family: GrafitaSpecialDEMO;
  font-size: 60px;
`
const Text = styled.article`
  font-size: 25px;
`

const NextPage = styled(Link)`
  display: flex;
  margin: 60px auto 100px;
`

const About = () => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <Wrapper>
          <Title>About</Title>
          <Text>
            <p>
              Hey! I'm Maria, a Frontend Developer with a background in graphic
              design. I have over 5 years of experience in the industry, doing
              stuff with HTML, CSS, JavaScript, and React.
            </p>
            <p>
              I am a kind, empathetic and autonomus. I'm trying to balance my
              natural honesty and autenticity with <s>hipocricity</s>&nbsp;
              professionalism to be able to fit in corporate world. I have made
              continuous learning a part of my daily routine and I understand
              that a great product is a result of strong teamwork whether I like
              it or not (😱 escandalo 😱).
            </p>
            <p>
              I am looking for "my people" and I beleve you can be productive
              without all this bullshit.
            </p>
            <p>
              When I'm not working, you can find me&nbsp;<s>scrolling TikTok</s>
              &nbsp;reading, drawing in Procreate, improving my coding skills or
              having existential crisis and anxitety attacks.
            </p>
            {/* <p>
              I'd love the opportunity to bring my perseverance and skills to
              your project and create something that exceeds your expectations.
              Let's work together to make it happen!
            </p> */}
          </Text>
        </Wrapper>

        <NextPage to="/contact">Contact &gt;</NextPage>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default About
