import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
	Wrapper,IntroWrapper,Details,FirstLine,SecondLine,ThirdLine,FourthLine,Contact,
} from './intro' */

const styles = {
    section: {
        paddingBottom: "4rem",
        backgroundSize: "contain",
        backgroundPosition: "right top",
        backgroundRepeat: "no-repeat"
    },
    wrapper: {
        maxWidth: "1280px",
	    margin: "0 auto",
	    width: "90%",
        padding: "4rem 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space between"
    },
    details: {
        flex: "1",
        fontFamily: "'Nunito Sans',sans-serif"
    },
  };

const Intro = () => (
	<section style={styles.section}>
		<div style={styles.wrapper}>
			<div style={styles.details}>
                <h1>Hi, </h1>
				<h1>I'm Kate.</h1>
				<h2>A Python & JavaScript developer.</h2>
				<h3>
					<p>
                    I build automated tests, develop front-end web apps, and script data solutions.
					</p>
                </h3>
			</div>
		</div>
	</section>
)

export default Intro