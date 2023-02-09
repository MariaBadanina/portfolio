import { AnimatePresence, motion } from 'framer-motion'
import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'

const StyledContainer = styled.main`
  position: fixed;
  z-index: 1;
  top: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
`
const HeroTextWrapper = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
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

const Wrapper = styled.div`
  border: 10px solid salmon;
`

const animation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
}
const Animated = ({ children }) => {
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

const Home = () => {
  return (
    <Animated>
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
    </Animated>
  )
}

function Work() {
  return (
    <Animated>
      <HeroTextWrapper>
        <Wrapper>Work</Wrapper>
      </HeroTextWrapper>
    </Animated>
  )
}

function About() {
  return (
    <Animated>
      <HeroTextWrapper>
        <Wrapper>About</Wrapper>
      </HeroTextWrapper>
    </Animated>
  )
}

function Contact() {
  return (
    <Animated>
      <HeroTextWrapper>
        <Wrapper>Contact</Wrapper>
      </HeroTextWrapper>
    </Animated>
  )
}

const Section = () => {
  const location = useLocation()
  return (
    <StyledContainer>
      <Header />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/work" element={<Work />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </StyledContainer>
  )
}

export default Section
