import React from 'react'
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'

const Button = ({children, className, ...props}) => {
    return (
        <Link className={`${styles.button} ${className}`} {...props}>{children}</Link>
    )
}
export default Button
