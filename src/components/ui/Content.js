import React from 'react'
import styled from 'styled-components'
import Header from './Header'

const StyledContainer = styled.main`
  position: fixed;
  /* z-index: 1; */
  top: 0;
  /* pointer-events: none; */
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
`
const HeroTextWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 100vw;
  height: calc(100vh - 100px); */
  width: 100vw;
  height: 100vh;
  border: 10px solid #fff;
  /* box-sizing: border-box; */
`
const HeroText = styled.div`
  display: flex;
`
const RegularText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-size: 20px;
`
const AccentText = styled.div`
  display: inline-block;
  font-family: GrafitaSpecialDEMO;
  font-size: 150px;
  line-height: 1;
  margin: 0 40px;
  border-bottom: 10px solid #fff;
`

const Section = () => {
  return (
    <StyledContainer>
      <Header />
      <HeroTextWrapper>
        <HeroText>
          <RegularText>Maria Badanina</RegularText>
          <AccentText>frontend</AccentText>
        </HeroText>
        <HeroText>
          <AccentText>developer</AccentText>
          <RegularText>based in Madrid</RegularText>
        </HeroText>
      </HeroTextWrapper>
      <HeroTextWrapper>Work</HeroTextWrapper>
      <HeroTextWrapper>About</HeroTextWrapper>
      <HeroTextWrapper>Contact</HeroTextWrapper>
    </StyledContainer>
  )
}

export default Section
