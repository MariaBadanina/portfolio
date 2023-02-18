import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../context/theme-context'
import { Drop, Melted, Moon, Sun } from './Icons'
import MaxWidth from './MaxWidth'
import { useSpring, animated, config } from '@react-spring/web'

const HeaderWrapper = styled.div`
  pointer-events: auto;
  height: 100px;
  display: flex;
  align-items: center;
  /* backdrop-filter: blur(12px); */
  position: fixed;
  width: 100vw;
`
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`
const MovingBg = styled(animated.div)`
  position: absolute;
  width: 30px;
  height: 30px;
  background-color: #ff6d6d;
  border-radius: 100%;
  z-index: 0;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  border-radius: 100%;
  z-index: 1;
  position: relative;
  cursor: pointer;
`
const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`
const Nav = styled.nav`
  margin-right: 50px;
`
const List = styled.ul`
  display: flex;
  list-style: none;
`
const ListItem = styled.li`
  margin: 0 30px;
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`

const Header = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const springs = useSpring({
    to: { x: theme === 'dark' ? 5 : theme === 'light' ? 45 : 85 },
    config: config.wobbly,
  })
  return (
    <HeaderWrapper>
      <MaxWidth justifyContent="space-between">
        <Logo>
          <Link to="/">
            <Melted />
          </Link>
        </Logo>
        <NavWrapper>
          <Nav>
            <List>
              <ListItem>
                <Link to="/work">Work</Link>
              </ListItem>
              <ListItem>
                <Link to="/about">About</Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">Contact</Link>
              </ListItem>
            </List>
          </Nav>
          <IconsContainer>
            <MovingBg style={springs} />
            <IconWrapper>
              <Moon
                onClick={() => setTheme('dark')}
                active={theme === 'dark' ? true : false}
              />
            </IconWrapper>
            <IconWrapper>
              <Sun
                onClick={() => setTheme('light')}
                active={theme === 'light' ? true : false}
              />
            </IconWrapper>
            <IconWrapper>
              <Drop
                onClick={() => setTheme('color')}
                active={theme === 'color' ? true : false}
              />
            </IconWrapper>
          </IconsContainer>
        </NavWrapper>
      </MaxWidth>
    </HeaderWrapper>
  )
}

export default Header
