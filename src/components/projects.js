import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
    Wrapper,IntroWrapper,Details,FirstLine,SecondLine,ThirdLine,FourthLine,Contact,
} from './intro' */
import githubIcon from '../assets/github.svg'
import openIcon from '../assets/open_in_browser-24px.svg'

const Skills = props => {
    const projectName = props.skills
    const skillsUsed = props.skills || ['HTML', 'CSS', 'Bootstrap']
  
    return (
      <ul style={styles.skillGroup}>
        {skillsUsed.map((item, i) => (
          <li style={styles.skillItem} key={i}>{item} </li>
        ))}
      </ul>
    )
  }

const styles = {
  section: {
    marginTop: '5em',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1em',
    textTransform: 'uppercase',
  },
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
    
    projectWrapper: {
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.11)',
      display: 'flex',
      MozBoxPack: 'justify',
      justifyContent: 'space-between',
      MozBoxAlign: 'center',
      flexDirection: 'column',
      alignItems: 'flex-start',
      position: 'relative',
      height: '100%',
      padding: '2rem 1.75rem',
      borderRadius: 'var(--border-radius)',
      backgroundColor: 'var(--light-navy)',
      transition: 'var(--transition)',
      overflow: 'auto',
    },
    header: {
	    width:"100%"
    },
    projectLinks: {
      display: 'flex',
      MozBoxPack: 'justify',
      justifyContent: 'space-between',
      MozBoxAlign: 'center',
      alignItems: 'center',
      /* marginBottom: '35px', */
    },
    linksRight: {
      display: 'flex',
      MozBoxAlign: 'center',
      alignItems: 'center',
      marginRight: '-10px',
      color: 'var(--light-slate)',
    },
    link: {
      display: 'flex',
      MozBoxPack: 'center',
      justifyContent: 'center',
      MozBoxAlign: 'center',
      alignItems: 'center',
      padding: '5px 7px',
    },

    projectName: {
      margin: '0px 0px 10px',
      color: 'var(--lightest-slate)',
      fontSize: '20px',
    },
    projectDesc: {
      color: 'var(--light-slate)',
      fontSize: '16px',
    },

    imgProject: {
      height: '30px',
		  width: '30px',
      marginBottom: "5px",
		  filter: 'saturate(100%) hue-rotate(-75deg)',
    },
    skillGroup: {
      display: 'flex',
      alignItems: 'flex-end',
      MozBoxFlex: '1',
      flexGrow: '1',
      flexWrap: 'wrap',
      padding: '0px',
      margin: '20px 0px 0px',
      listStyle: 'none',
  },
  skillItem: {
    marginRight: '15px',
    marginBottom: "0px",
    fontSize: '14px',
    lineHeight: '1.75',
    //fontFamily: 'var(--font-mono)',
    //fontFamily: '"Questrial", sans-serif',
    listStyle: 'none',
},

    lang: {
/*         display: 'inline-flex',*/
	    width: '100%',
	    justifyContent: 'flex-start',
	    listStyleType: 'none',
	    fontSize: '14px',
        fontFamily: "'Questrial', sans-serif", 
        display: 'flex',
        flexWrap: 'wrap',
        lineHeight: '1.2rem',
        marginTop: '1.5rem',
    },
    langItem: {
        marginRight: '15px',
		marginBottom: '0px',
		color: '#333f58',
    },
}

const links = [
  {
    name: "Stocks-data",
    url: "https://github.com/kkote/stocks-data",
    description: "Historical stock data stored in a database",
    skills: ["Python", "MySQL", "AWS", "EOD Historical Data API"],
  },
  {
    name: "Portfolio-v2",
    url: "https://github.com/kkote/portfolio-v2",
    demoUrl: "",
    description: "Previous portfolio site, using API for project data",
    skills: ["React", "Gatsby", "GraphQL", "GitHub API"],
  },
  {
    name: "Library-react",
    url: "https://github.com/kkote/library-react",
    demoUrl: "https://kkote.github.io/library-react/",
    description: "Catalog your books",
    skills: ["JavaScript", "React", "Google Books API"],
  },
  {
    name: "Weather-app",
    url: "https://github.com/kkote/weather-app",
    demoUrl: "https://weather-style-guide.herokuapp.com/",
    description: "Temperature based apparel suggestions",
    skills: ["JavaScript", "React", "Open Weather API", "Material-UI"],
  },
  {
    name: "bf-calc-react",
    url: "https://github.com/kkote/bf-calc-react",
    demoUrl: "https://kkote.github.io/bf-calc-react/",
    description:  "Calculates fitness stats using body measurements",
    skills: ["JavaScript", "React", "Bootstrap"],
  },
  {
    name: "library-jquery",
    url: "https://github.com/kkote/library-jquery",
    demoUrl: "https://kkote.github.io/library-jquery/",
    description: "Previous version of library-react",
    skills: ["JavaScript", "jQuery", "Google Books API"],
  },
]


const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2 style={styles.title}>Projects</h2>
    <div style={styles.grid}>
      {links.map(link => (
        <div key={link.name} style={styles.projectWrapper} >
          <header style={styles.header}>
            <div style={styles.projectLinks}>
              <div></div>
              <div style={styles.linksRight}>
                {link.demoUrl ? (
                  <a style={styles.link} href={link.demoUrl} target="_blank" rel="noopener noreferrer" >
                    <img style={styles.imgProject} src={openIcon} alt="Open Icon" />
                  </a>) : (<a href="" />)}
                <a style={styles.link} href={link.url} target="_blank" rel="noopener noreferrer">
                  <img style={styles.imgProject} src={githubIcon} alt="GitHub Icon" />
                </a>
              </div>
            </div>
            <h3 style={styles.projectName}>{link.name}</h3>
            <div style={styles.projectDesc}><p>{link.description}</p></div>
          </header>
          <footer>
            <Skills skills={link.skills} />
          </footer>
        </div>
      ))}
    </div>
  </section>
)

export default Projects