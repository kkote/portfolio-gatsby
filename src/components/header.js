import * as React from "react"
import PropTypes from "prop-types"

const styles = {
  header: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: 'auto',
    minHeight: '6rem',
    width: '100%',
  },
  wrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: 'var(--page-width)',
    padding: '0 2.5rem',
    width: '100%',
  },
  a: {
    color: 'var(--primary-color)',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    textDecorationSkipInk: 'auto',
  },
  title: {
    filter: 'none !important',
    fontSize: '1.75rem',
    fontWeight: '900',
    pointerEvents: 'auto !important',
    position: 'relative',
    userSelect: 'auto !important',
    zIndex: '13',
    maxWidth: 'clamp(0px, (100vw - 500px) * 1000, 100%)',
    maxHeight: 'clamp(0px, (100vw - 500px) * 1000, 1000px)',
    overflow: 'hidden',
  },
  navbar: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    width: 'auto',
  },
  navItem: {
    color: 'var(--primary-color)',
    fontSize: '1rem',
    fontWeight: '700',
    marginRight: '4rem',
    padding: '0',
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    textDecorationSkipInk: 'auto',
  }

}

const Header = ({ siteTitle }) => (
  <header style={styles.header}>
    <div style={styles.wrapper}>
      <a style={styles.a} href="/#projects">
        <div style={styles.title}>Portfolio</div>
      </a>
      <nav style={styles.navbar}>
        <a style={styles.navItem} href="/#projects">Projects</a>
        <a style={styles.navItem} href="/#about">About</a>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
