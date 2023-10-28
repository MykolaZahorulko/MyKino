import React from 'react'
import styles from './Layout.module.scss'
import Header from '../components/common/header/Header.jsx'
import Footer from '../components/common/footer/Footer.jsx'
const Layout = ({ children }) => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout
