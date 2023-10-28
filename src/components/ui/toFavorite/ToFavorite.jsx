import React, { useState } from 'react'
import styles from './ToFavorite.module.scss'
const ToFavorite = ({children, toggleFavoriteMovie, className, isFavorite}) => {
    const [isFluctuation, setIsFluctuation] = useState(false);
    return (
        <div
            className={`${className} ${isFavorite ? styles.favorite : ''} ${isFluctuation ? styles.fluction : ''}`}
            onClick={(e) => {
                e.preventDefault()
                toggleFavoriteMovie()
                setIsFluctuation(!isFluctuation)
            }}
        >
            {children}
        </div>
    )
}
export default ToFavorite
