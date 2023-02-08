import React from 'react'
import { Melted, Moon, Sun, Drop } from './Icons'
import MaxWidth from './MaxWidth'
import styled from 'styled-components'

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

const Header = () => {
  return (
    <HeaderWrapper>
      <MaxWidth justifyContent="space-between">
        <div>
          <Melted fill="#fff" onClick={() => console.log('Home')} />
        </div>
        <NavWrapper>
          <Nav>
            <List>
              <ListItem>Work</ListItem>
              <ListItem>About</ListItem>
              <ListItem>Contact</ListItem>
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
