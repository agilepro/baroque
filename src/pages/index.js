import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import { Seo } from "../components/seo"

const IndexPage = () => (
  <Layout>
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Santa Cruz Baroque Festival</h1>
          <StaticImage
            src="../images/front-image.jpg"
            width={600}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="Baroque"
            className="img-fluid"
          />
          
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)