import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
*/

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
/*         listStyleType: "circle",
        columns: "3",
        paddingKeft: "1.2rem",
        color: "#707070",
        marginBottom: ".2rem" */
    },
};


export const About = () => (
  <div style={styles.wrapper} id="about">
    <h2>About Me</h2>
    <div>
      <div>
        <p>
        I am a developer with a unique blend of experience in using JavaScript and Python for software testing, web applications, and data processes. I am passionate about continuous learning and thrive in challenging environments. I enjoy applying my technical skills to new and interesting projects.
        </p>
        <p>
        Some highlights of my experience:
        </p>
        <ul>
        <li>
        <b>Software Testing</b>: I have over 2 years of experience working as a software tester. In this role, I automated GUI tests and analyzed the results of more than 1100 automated nightly tests. I also updated the test framework to accommodate new features and fixed individual tests to ensure their accuracy.
        </li>
        <li>
        <b>Web Development</b>: As a self-taught web developer, I have built front-end applications and portfolio websites. I started with simple jQuery websites and have since specialized in React, a powerful JavaScript framework. I believe in creating user-friendly and visually appealing web experiences.
        </li>
        <li>
        <b>Data Project</b>: I took on a freelance data project where I developed Python scripts to extract API stock data and load it into a MySQL database. Additionally, I set up storage and hosting using AWS, ensuring efficient data management and access.
        </li>
        </ul>
        <p>
            I’m passionate about continuous learning, and thrive in challenging environments. 
            Enjoy applying technical skills in new or interesting projects.
        </p>
        
        <p>Technologies I've worked with:</p>
        <div>
          <ul style={styles.list} >
            
            <li><b>JavaScript</b>: Proficient in using to create test automations and dynamic web applications.</li>
            <li><b>React</b>: Specialized in building modern and scalable user interfaces using React.</li>
            <li><b>GraphQL</b>: Experience in utilizing GraphQL to efficiently fetch and manipulate data.</li>
            <li><b>Python</b>: Skilled in developing scripts and applications for various data-related tasks.</li>
            <li><b>MySQL</b>: Familiar with MySQL database management and querying data.</li>
            <li><b>Web APIs</b>: Experience in working with different web APIs to retrieve and process data.</li>
            <li><b>Test Automation</b>: Proficient in using TestComplete(Similar to Selenium) for automated software testing.</li>
            <li><b>AWS RDS & EC2</b>: Experience in setting up and managing AWS RDS (Relational Database Service) and EC2 (Elastic Compute Cloud) for data storage and hosting.</li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
)

export default About