import React from 'react'
/* import { Header } from 'components/theme'
import { Container, Button } from 'components/common'
import {
    Wrapper,IntroWrapper,Details,FirstLine,SecondLine,ThirdLine,FourthLine,Contact,
} from './intro' */

const styles = {
    section: {
        background: 'var(--background-color)',
        height: 'auto',
        scrollMarginTop: '60px',
        width: '100%',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '50vh',
        height: '100%',
        margin: '0 auto 8rem',
        maxWidth: 'var(--page-width)',
        padding: 'var(--page-padding)',
        width: '100%',
    },
    details: {
        flex      : "1",
        fontFamily: "'Nunito Sans',sans-serif"
    },
    name: {
        /* marginBottom: "2rem" */
        fontSize: '2.625rem',
        lineHeight: '4rem',
        marginBottom: '0',
    },
    job: {
        fontSize: '2rem',
        margin: "-.5rem 0 0", 
        lineHeight: '1.7',
    },
    desc: {
        fontSize: '1.125rem',
        marginBottom: '2rem',
    },
    linkGroup: {
        /* margin: '0 -2.5rem', */
        overflowX: 'auto',
        overflowY: 'hidden',
        padding: 'var(--page-padding)',
        paddingBottom: '.5rem',
        whiteSpace: 'nowrap',
    },
    link: {
        backgroundPosition: '100% 100%',
        backgroundSize: '205% 100%',
        border: '.125rem solid black',
        borderRadius: '5px',
        color: 'var(--primary-color)',
        fontSize: '1rem',
        height: 'auto',
        padding: '.3rem 1rem',
        transition: 'all .1s ease-out',
        width: 'auto',
        cursor: 'pointer',
        display: 'inline-block',
        textDecoration: 'none',
        textDecorationSkipInk: 'auto',
        marginRight: '1rem',
    }
};

const Intro = () => (
  <section style={styles.section}>
    <div style={styles.wrapper}>
      <h1 style={styles.name}>Hi, I'm Kate.</h1>
      <h2 style={styles.job}>A Test Analyst and Developer.</h2>
      <p style={styles.desc}>
      I specialize in building automated tests and crafting front-end web applications.
      </p>
      <div style={styles.linkGroup}>
        <a style={styles.link} href="https://github.com/kkote">Github</a>
        <a style={styles.link} href="http://www.linkedin.com/in/kkote">LinkedIn</a>
      </div>
    </div>
  </section>
)

export default Intro

