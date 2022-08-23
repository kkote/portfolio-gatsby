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
            I’m a JavaScript and Python Developer with 2+ years in quality assurance. 
            Three years experience programming include test automation, a stock data project, and 
            developing 4 front-end web applications with React.
        </p>
        <p>
            During my time as a software tester, I would analyze results of automated nightly tests, 
            verify results, investigate issues, report bugs, improve test framework, repair and add new test scripts.
        </p>
        <p>
            I’m passionate about learning, and enjoy taking on a challenge. 
            This has pushed me to continue growing in different areas of programming, and take interest in database/data analytics.
            Currently taking an "Data Analysis and Visualization Foundations Specialization '' on Coursera.
        </p>
        <p>Technologies I've been working with:</p>
        <div>
          <ul style={styles.list} >
            <li>JavaScript (ES6+)</li>
            <li>React </li>
            <li>jQuery</li>
            <li>HTML5 / CSS3</li>
            <li>Bootstrap</li>
            <li>Material-UI</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About