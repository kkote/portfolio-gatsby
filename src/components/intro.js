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
        maxWidth      : "1280px",
        margin        : "0 auto",
        width         : "90%",
        padding       : "4rem 0",
        display       : "flex",
        alignItems    : "center",
        justifyContent: "space between"
    },
    details: {
        flex      : "1",
        fontFamily: "'Nunito Sans',sans-serif"
    },
    lineOne: {
        marginBottom: "2rem"
    }
};

const Intro = () => (
    <section style={styles.section}>
        <div style={styles.wrapper}>
            <div style={styles.details}>
                <h1 style={styles.lineOne}>Hi, </h1>
                <h1 style={styles.lineOne}>I'm Kate.</h1>
                <h2>A Python & JavaScript developer.</h2>
                <p>
                    I build automated tests, develop front-end web apps, and script data solutions.
                </p>
            </div>
        </div>
    </section>
)

export default Intro

