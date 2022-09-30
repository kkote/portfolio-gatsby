import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
    Wrapper,IntroWrapper,Details,FirstLine,SecondLine,ThirdLine,FourthLine,Contact,
} from './intro' */

const styles = {
    section: {
        paddingBottom     : "2rem",
        backgroundSize    : "contain",
        backgroundPosition: "right top",
        backgroundRepeat  : "no-repeat"
    },
    wrapper: {
	    backgroundSize: "contain",
	    backgroundPosition: "left top",
	    backgroundRepeat: "no-repeat",
	    padding: "4rem 0"
    },
    list: {
        listStyleType: "circle",
        columns: "3",
        paddingKeft: "1.2rem",
        color: "#707070"
    },

};


export const About = () => (
  <div style={styles.wrapper} id="about">
    <h2>About Me</h2>
    <div>
      <div>
        <p>
            I’m a developer with a unique combination of experience using JavaScript and Python for software testing, web applications, and data processes.
        </p>
        <p>
        Some things I’ve done so far: 
        </p>
        <ul>
        <li>
        Worked as a software tester for over 2 years, automated GUI tests, analyzed results of 1100+ automated nightly tests, updated test framework after new features, and fixed individual tests.
        </li>
        <li>
        Built front-end applications and portfolio websites using skills learned as a self-taught web developer. Started with simple jQuery websites and now specialized in React.
        </li>
        <li>
        Took on a freelance data project, developed Python scripts to extract API stock data and load into a MySQL database. Set up storage and hosting with AWS.
        </li>
        </ul>
        <p>
            I’m passionate about continuous learning, and thrive in challenging environments. 
            Enjoy applying technical skills in new or interesting projects.
        </p>
        
        <p>Technologies I've worked with:</p>
        <div>
          <ul style={styles.list} >
            
            <li>JavaScript</li>
            <li>React</li>
            <li>GraphQL</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>Web APIs</li>
            <li>TestComplete</li>
            <li>Test Automation</li>
            <li>AWS RDS & EC2</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About