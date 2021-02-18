import React from "react"
import Email from "../components/Email"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Trips />
    <Gallery />
    <Email />
  </Layout>
)

export default IndexPage
