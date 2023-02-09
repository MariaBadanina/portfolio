import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
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
  return (
    <HeaderWrapper>
      <MaxWidth justifyContent="space-between">
        <Logo>
          <Link to="/">
            <Melted fill="#fff" />
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
            <Moon fill="#fff" onClick={() => console.log('Dark')} />
            <Sun fill="#fff" onClick={() => console.log('Light')} />
            <Drop fill="#fff" onClick={() => console.log('Color')} />
          </IconsWrapper>
        </NavWrapper>
      </MaxWidth>
    </HeaderWrapper>
  )
}

export default Header
