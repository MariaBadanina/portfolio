import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Work from './Pages/Work'

const StyledContainer = styled.main`
  position: fixed;
  z-index: 1;
  top: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  a {
    color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  }
  svg * {
    fill: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  }
  transition: 1.5 ease all;
`

const animation = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 },
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

const Content = ({ theme }) => {
  const location = useLocation()

  return (
    <StyledContainer theme={theme}>
      <Header />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            exact
            path="/"
            element={
              <Animated>
                <Home theme={theme} />
              </Animated>
            }
          />
          <Route
            exact
            path="/work"
            element={
              <Animated>
                <Work />
              </Animated>
            }
          />
          <Route
            exact
            path="/about"
            element={
              <Animated>
                <About />
              </Animated>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <Animated>
                <Contact />
              </Animated>
            }
          />
        </Routes>
      </AnimatePresence>
    </StyledContainer>
  )
}

export default Content
