import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Stocks-data",
    url: "https://github.com/kkote/stocks-data",
    description:
      "Historical stock data stored in a database.",
      skills: "Skills: Python, MySQL, AWS, EOD Historical Data API"
    },
    {
      text: "Portfolio-v2",
      url: "https://github.com/kkote/portfolio-v2",
      description:
        "links, demos, languages used on projects",
      skills: "Skills: React, Gatsby, GraphQL, GitHub API"
    },
    {
      text: "Library-react",
      url: "https://github.com/kkote/library-react",
      description:
        "Catalog your books",
      skills: "Skills: JavaScript, React, Google Books API"
    },  
    {
      text: "Weather-app",
      url: "https://github.com/kkote/weather-app",
      description:
        "Temperature based apparel suggestions ",
      skills: "Skills: JavaScript, React, Open Weather API, Material-UI"
    },
  
]


const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Gatsby!</b>
      </h1>
      <p className={styles.intro}>
        <b>Example pages:</b>{" "}

        <br />
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text}
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
          <p>{link.skills}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
