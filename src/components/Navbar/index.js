import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"
import logo from "../../assets/images/logo.png"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MoblieIcon,
  NavMenu,
  NavLinks,
  NavItem,
} from "./NavbarElements"

const Navbar = () => {
  // hooks
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const handleClick = () => setClick(!click)

  // navbar bg-color change
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color: "#141414" }}>
        <Nav active={scroll} click={click}>
          <NavbarContainer>
            <NavLogo to="/">
              <img src={logo} alt="" />
            </NavLogo>
            <MoblieIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MoblieIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Gallery</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Contact</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/">Blogs</NavLinks>
              </NavItem>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
