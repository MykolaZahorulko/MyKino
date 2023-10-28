import React from 'react';
import styles from './MovieItem.module.scss';
import {Link} from 'react-router-dom';
import MovieImage from "../movieImage/MovieImage.jsx";

const MovieItem = ({title, imgSrc, year, rating, toggleFavoriteMovie, isFavorite, isNeedFavorite, ...props}) => {
    return (
        <Link
            className={styles.movie_item}
            {...props}
        >
            <MovieImage
                isNeedFavorite={isNeedFavorite}
                title={title}
                imgSrc={imgSrc}
                className={`${styles.movie_item__img} ${styles.img}`}
                isFavorite={isFavorite}
                toggleFavoriteMovie={toggleFavoriteMovie}
            />
            <div className={styles.movie_item__info}>
                <div className={styles.movie_item__info_title}>{title}</div>
                <span className={styles.movie_item__info_year}>{year}</span>
            </div>
        </Link>
    )
}

export default MovieItem;
