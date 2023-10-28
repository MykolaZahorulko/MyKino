import React from 'react'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
const Logo = ({className, ...props}) => {
    return (
        <div className={`${styles.icon__logo} ${styles.img} ${className}`} {...props}>
            <Link to="/MyKino"><img src="https://imagizer.imageshack.com/v2/320x240q70/924/qa8HtV.png" alt="Logo"/></Link>
        </div>
    )
}
export default Logo
