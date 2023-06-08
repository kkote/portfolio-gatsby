import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
    Wrapper,IntroWrapper,Details,FirstLine,SecondLine,ThirdLine,FourthLine,Contact,
} from './intro' */
import githubIcon from '../assets/github.svg'
import openIcon from '../assets/open_in_browser-24px.svg'
import JSONData from "../content/projectInfo.json"

const Skills = props => {
    //const projectName = props.skills
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
        //gridTemplateColumns: 'repeat(3, 1fr)',
        gridTemplateColumns: 'repeat(auto-fit, minmax(18em, 1fr))',
        gridTemplateRows: '8fr',
        gap: '1.2rem 1.2rem',
    },
    
    projectWrapper: {
      boxShadow: '0 5px 15px rgba(0, 0, 0, 0.22)',
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
      width: "95%"
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
      fontSize: '17px',
    },
    projectDesc: {
      color: 'var(--light-slate)',
      fontSize: '15px',
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
    fontSize: '13px',
    lineHeight: '1.75',
    //fontFamily: 'var(--font-mono)',
    //fontFamily: '"Questrial", sans-serif',
    listStyle: 'none',
},
}

const Projects = () => (
  <section id="projects" style={styles.section}>
    <h2 style={styles.title}>Projects</h2>
    <div style={styles.grid}>
      {JSONData.content.map(link => (
        <div key={link.name} style={styles.projectWrapper}>
          <header style={styles.header}>
            <div style={styles.projectLinks}>
              <div></div>
              <div style={styles.linksRight}>
                {link.demoUrl ? (
                  <a style={styles.link}
                      href={link.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer">
                    <img  style={styles.imgProject} src={openIcon} alt="Open Icon"/>
                  </a>
                ) : (
                  <a  style={{ display: `none` }}
                      href="https://github.com/kkote"
                      target="_blank"
                      rel="noopener noreferrer">
                    Github
                  </a>
                )}
                <a  style={styles.link}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer">
                  <img style={styles.imgProject} src={githubIcon} alt="GitHub Icon"/>
                </a>
              </div>
            </div>
            <h3 style={styles.projectName}>{link.name}</h3>
            <div style={styles.projectDesc}>
              <p>{link.description}</p>
            </div>
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