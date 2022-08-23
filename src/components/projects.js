import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
    Wrapper,IntroWrapper,Details,FirstLine,SecondLine,ThirdLine,FourthLine,Contact,
} from './intro' */

const styles = {
    wrapper: {
	    padding: '2rem 0',
    },
    grid: {
	    display: 'grid',
        alignItems: 'center',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateRows: '8fr',
        gap: '1.2rem 1.2rem',
    },
    item: {
        width: '100%',
	    height: '100%',
	    overflow: 'hidden',
	    boxShadow: '0 1px 6px 0 rgba(0, 0, 0, 0.11)',
    },
    content: {
        display: 'flex',
	    flexDirection: 'column',
	    justifyContent: 'space-between',
	    height: '100%',
    },
    icons: {
        display: 'flex',
	    justifyContent: 'flex-end',
    },
    lang: {
        display: 'inline-flex',
        flexWrap: 'wrap',
	    width: '100%',
	    justifyContent: 'flex-start',
	    listStyleType: 'none',
	    fontSize: '14px',
        fontFamily: "'Questrial', sans-serif",
    },
    card: {
        padding: '1rem',
	    background: '#fff',
	    height: '250px',
    },
}

const links = [
  {
    name: "Stocks-data",
    url: "https://github.com/kkote/stocks-data",
    description: "Historical stock data stored in a database.",
    skills: ["Python", "MySQL", "AWS", "EOD Historical Data API"],
  },
  {
    name: "Portfolio-v2",
    url: "https://github.com/kkote/portfolio-v2",
    description: "links, demos, languages used on projects",
    skills: ["React", "Gatsby", "GraphQL", "GitHub API"],
  },
  {
    name: "Library-react",
    url: "https://github.com/kkote/library-react",
    description: "Catalog your books",
    skills: ["JavaScript", "React", "Google Books API"],
  },
  {
    name: "Weather-app",
    url: "https://github.com/kkote/weather-app",
    description: "Temperature based apparel suggestions ",
    skills: ["JavaScript", "React", "Open Weather API", "Material-UI"],
  },
]


const Projects = () => (
  <div style={styles.wrapper} id="projects">
    <h2>Projects</h2>
    <div style={styles.grid}>
      {/* {edges.map(({ node }) => ( */}
      {/* <Item key={node.id} as="div"> */}
      {links.map(link => (
      <div key={link.name}  style={styles.item} >
        <div style={styles.card}>
          <div style={styles.content}>
            <div>
              <div style={styles.icons}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {/* <img src={githubIcon} alt="GitHub Icon" /> */}
                </a>
              </div>

              <h4>{link.name}</h4>
              <p>{link.description}</p>
            </div>
            {/* <div>
              <ul style={styles.lang}>
                {links.skills.map((item, i) => (
                  <li key={i}>{item} </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>
       ))} 
    </div>
  </div>
)

export default Projects