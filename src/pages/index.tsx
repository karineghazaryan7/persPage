import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"
import AboutPage from "../components/about"

const IndexPage = () =>
(
  <>
  <Layout>
    <SEO title="Home" />
    <section className="first-page-section">
     <div className="header-image-container"> <Image name="header_big_image"/> </div> 
     <div className="header-footer"><span>Talk is cheap. Show me the code.</span></div>
    </section>
    <AboutPage />
  </Layout>
  </>
);

export default IndexPage