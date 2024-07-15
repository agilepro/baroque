import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container">
        <h1>About Santa Cruz Baroque Festival</h1>
        <h2>Mission Statement</h2>
        <p>Our mission is to present an annual season of early music as it sounded in its own time. We aim for artistic excellence while transmitting the joy of Baroque music to the community and to future generations by engaging our audience in an expedition through musical time.
        </p>
        <h2>Vision Statement</h2>
        <p>Santa Cruz Baroque Festival envisions a community where all people have experienced the joy of music, and can understand the legacy and value of early chamber music in which a player traditionally creates a unique performance by structured improvisation.      
        </p>
        <h2>Baroque Festival Core Values</h2>
        <ul>
          <li>
          We present artistically excellent performances that are emotionally expressive, with chamber music performed in the improvisatory style in fashion when the music was new.
          </li>
          <li>
          We engage in education to audiences of all ages through our pre-concert talks, our concert notes, radio broadcasts, the ‘See Things in Context’ on our website, and in 2020, free weekly video live casts. Currently, we’re featured on KSQD’s Community Concert Hall.
          </li>
          <li>
          We engage in Youth Outreach and education through our Youth Chamber Music Competition, our Emerging Artist Showcase, our bilingual videos (in preparation), and our artists in classrooms.
          </li>
        </ul>
        <h2>Thank you for taking this journey with us!
        </h2>
      </div>

    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="About Gatsby Bootsrap 5 starter" />
)