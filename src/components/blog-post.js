import React from "react"
import { graphql } from "gatsby"
import { Helmet } from 'react-helmet'
import Navbar from "./navbar"
import './fonts.css'
import "./layout.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <div className="container-fluid p-0">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Fondamento:ital@0;1&family=Kaushan+Script&display=swap" rel="stylesheet"/>
      </Helmet>
      <Navbar/>
      <div className="container my-5" dangerouslySetInnerHTML={{ __html: post.html }} />
      <Navbar/>
      <br/>
      <div class="pagefoot">Making the music of the past come alive in the present.</div>
    </div>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        slug
      }
    }
  }
`