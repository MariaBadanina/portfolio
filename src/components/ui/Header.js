import { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ThemeContext } from '../../context/theme-context'
import { Drop, Melted, Moon, Sun } from './Icons'
import MaxWidth from './MaxWidth'

const HeaderWrapper = styled.div`
  pointer-events: auto;
  height: 100px;
  display: flex;
  align-items: center;
  /* backdrop-filter: blur(12px); */
  position: fixed;
  width: 100vw;
`
const IconsWrapper = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
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
`

const Header = () => {
  const { setTheme } = useContext(ThemeContext)
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
          <IconsWrapper>
            <Moon onClick={() => setTheme('dark')} />
            <Sun onClick={() => setTheme('light')} />
            <Drop onClick={() => setTheme('color')} />
          </IconsWrapper>
        </NavWrapper>
      </MaxWidth>
    </HeaderWrapper>
  )
}

export default Header
