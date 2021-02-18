import React from "react"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
