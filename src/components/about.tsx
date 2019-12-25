import * as React from "react"
import Layout from "./layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./about.css"

const AboutPage = () =>
  (
    <>
      <SEO title="About" />
      <section className="about-page-section">
        <span>Education</span>
        <div className="education-container">
          <div className="education-conatainer-line">
            <div className="education-line"></div>
          </div>
          <div className="education-container-texts">
            <span className="education text1">2010-2015: N2 High School, Yerevan</span>
            <span className="education text2">2015-2019: Faculty Of computer Science and informatics. National Polytechnic University, Yerevan</span>
          </div>
        </div>
        <span>Courses</span>
        <div className="education-container">
          <div className="education-conatainer-line">
            <div className="education-line"></div>
          </div>
          <div className="education-container-texts">
            <span className="education text1">2017 March-2017 April: Innovative Programmer’s Club:Introduction to Algorithms (MIT course)</span>
            <span className="education text2">2018 September-2019 January: Armenian Code Academy: introductions to React JS </span>
          </div>
        </div>
        <span>Skills</span>
        <div className="education-container">
          <div className="education-conatainer-line">
            <div className="education-line"></div>
          </div>
          <div className="education-container-texts">
            <span className="education text1">Languages: Armenian-Native,English-Communicative,Russian-Fluent</span>
            <span className="education text2">Proffesional Languages: JS, React JS, Gatsby JS,  HTML, CSS </span>
          </div>
        </div>
      </section>
    </>
  );

export default AboutPage;