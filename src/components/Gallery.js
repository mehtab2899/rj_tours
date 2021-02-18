import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: { regex: "/(jpg)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="image-container">
      <h1>Gallery</h1>
      <div className="image-grid">
        {data.allFile.edges.map((image, key) => {
          return (
            <Img
              key={key}
              classNam="image-item"
              fluid={image.node.childImageSharp.fluid}
              alt={image.node.base.split(".")[0]}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
