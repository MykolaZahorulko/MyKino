import React from 'react'
import {PiPlayBold as PlayIcon} from 'react-icons/pi';
import {BsBookmark as FavoriteIcon, BsBookmarkFill as FillFavoriteIcon} from 'react-icons/bs'
import styles from './MovieImage.module.scss'
import ToFavorite from "../ui/toFavorite/ToFavorite.jsx"

const MovieImage = ({imgSrc, title, className, toggleFavoriteMovie, isFavorite, isNeedFavorite}) => {

    return (
        <div className={`${styles.movie_item__img} ${styles.img} ${className}`}>
            {isNeedFavorite ? (
                <ToFavorite
                    isFavorite={isFavorite}
                    toggleFavoriteMovie={toggleFavoriteMovie}
                    className={`${styles.movie_item__to_favourite_btn} ${styles.img}`}
                >
                    {isFavorite ? (
                        <FillFavoriteIcon/>
                    ) : (
                        <FavoriteIcon/>
                    )}
                </ToFavorite>
            ) : ''
            }
            <div className={`${styles.movie_item__play_btn} ${styles.img}`}>
                <PlayIcon/>
            </div>
            <img src={imgSrc} alt={title}/>
        </div>
    )
}
export default MovieImage
