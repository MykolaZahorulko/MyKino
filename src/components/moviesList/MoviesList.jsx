import React from 'react';
import MovieItem from '../movieItem/MovieItem.jsx';
import styles from './MoviesList.module.scss';
import Loading from "../features/loading/Loading.jsx";

const MoviesList = ({isLoading, moviesList, favoriteMovies, toggleFavoriteMovie, isNeedFavorite}) => {
    return (
        <div className={styles.movie_list}>
            <div className={`${styles.movie_list__container} ${styles.container}`}>
                {isLoading ? (
                    <Loading/>
                ) : (
                    <div className={styles.movie_list__content}>
                        {moviesList.map((movie) =>
                                movie.large_cover_image && (
                                    <MovieItem
                                        to={`/movie/${movie.id}`}
                                        key={movie.id}
                                        title={movie.title}
                                        imgSrc={movie.large_cover_image}
                                        rating={movie.rating}
                                        year={movie.year}
                                        isNeedFavorite={isNeedFavorite}
                                        toggleFavoriteMovie={() => toggleFavoriteMovie(movie)}
                                        isFavorite={isNeedFavorite && favoriteMovies.some((favMovie) => favMovie.id === movie.id)}
                                    />
                                )
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MoviesList;
