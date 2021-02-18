import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../assets/images/logo.png"

const Footer = () => {
  var year = new Date().getFullYear()
  return (
    <FooterContainer>
      <FooterImg>
        <Img src={logo} alt="" />
      </FooterImg>
      <FooterContent>
        <FooterLinkItem className="footer-left">
          <FooterLink to="/c">company</FooterLink>
          <FooterLink to="/s">contact us</FooterLink>
          <FooterLink to="/e">carriers</FooterLink>
          <FooterLink to="/r">terms</FooterLink>
          <FooterLink to="/a">privacy policy</FooterLink>
        </FooterLinkItem>
        <FooterLinkItem className="footer-right">
          <p>
            Website Design and Develop by
            <FooterLink to="https://mehtabmultani.ml/">
              Mehtab Multani
            </FooterLink>
          </p>
        </FooterLinkItem>
      </FooterContent>
      <P>&copy; {year}, Mansur</P>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 3rem calc((100vw-1300) / 2);
`
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 1rem 0 2rem;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`
const FooterImg = styled.div`
  padding-top: 2rem;
  text-align: center;
`
const Img = styled.img`
  width: 200px;
`

const FooterLinkItem = styled.div`
  padding: 1rem 3rem;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 0.5em;
  font-size: 14px;
  color: #3d3d4e;

  &:hover {
    color: #f26a3e;
    transition: 0.3s ease-out;
  }
`

const P = styled.p`
  text-align: center;
  font-weight: bold;
  padding: 1em 0;
`
