import React from 'react'
import {FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink }
from './NavbarElements';
import Logo from '../cruds/crud-img/school.svg'



const Navbar = ({ toggle }) => {
  return (
    <> 
      <Nav>
        <NavbarContainer>
        <NavLogo to="/">
          <img src={Logo} alt="logo" />

          </NavLogo>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            
            <NavItem>
              <NavLinks to='../Dashboard'>Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='../Dashboard'>Dashboard</NavLinks>
            </NavItem>
             <NavItem>
              <NavLinks to='../Dashboard'>Dashboard</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#'>Sherbimet</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='#'>Regjistrohu</NavLinks>
            </NavItem>
            </NavMenu>
      
          
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
