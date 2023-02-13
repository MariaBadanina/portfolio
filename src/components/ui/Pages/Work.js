import React from 'react'
import styled from 'styled-components'
import MaxWidth from '../MaxWidth'

const OuterWrapper = styled.div`
  pointer-events: all;
  overflow-y: scroll;
  height: 100vh;
`

const Wrapper = styled.div`
  width: 100px;
  backdrop-filter: blur(30px);
  border-radius: 50px;
  width: 100%;
  margin: 20vh auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 100px;
`

const Title = styled.h1`
  font-family: GrafitaSpecialDEMO;
  font-size: 60px;
`
const Text = styled.article`
  font-size: 25px;
`

const Work = () => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <Wrapper>
          <Title>Work</Title>
          <Text>
            <p>Block</p>
            <p>Block</p>
            <p>Block</p>
            <p>Block</p>
            <p>Block</p>
          </Text>
        </Wrapper>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default Work
