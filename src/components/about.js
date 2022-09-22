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
            I’m a developer with unique combination of technical experience using JavaScript and Python. 
        </p>
        <p>
        Some of the work I've done so far:  
        </p>
        <p>
        * 2+ years as a software tester, where I would analyze results of 1100+ automated nightly tests, verify results, investigate issues, report bugs, improve test framework, repair and add new test scripts.
        </p>
        <p>
        * Self teaching myself front-end web development, and specializing in JavaScript and React. Resulting in the development of a portfolio site and 4 front-end applications.
        </p>
        <p>
        * Working on a freelance data project, where I created Python scripts to fetch API data, connect to databases, and construct queries to MySQL. Additionally, set up storage and hosting with AWS.
        </p>
        <p>
            I’m passionate about learning, and thrive when taking on a challenge. 
            This has pushed me to continue growing in different areas of programming, and take interest in range of technical fields.
            Currently taking an "Data Analysis and Visualization Foundations Specialization '' on Coursera.
        </p>
        <p>Technologies I've worked with:</p>
        <div>
          <ul style={styles.list} >
            <li>Python</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MySQL</li>
            <li>TestComplete</li>
            <li>AWS</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Material-UI</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About