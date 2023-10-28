import React from 'react'
import styles from './MovieWatch.module.scss'
import {BsBookmark as FavoriteIcon, BsBookmarkFill as FillFavoriteIcon} from 'react-icons/bs'
import Loading from "../../features/loading/Loading.jsx"
import ToFavorite from "../../ui/toFavorite/ToFavorite.jsx"
import {useMovieWatchState} from "../../../hooks/MovieWatchHooks.jsx";

const MovieWatch = () => {
    const {
        movie,
        isLoading,
        favoriteMovies,
        toggleFavoriteMovie,
    } = useMovieWatchState()
    return (
        <div className={styles.movie_watch}>
            <div className={styles.container}>
                {isLoading ? (
                    <Loading/>
                ) : (
                    <>
                        <div className={styles.movie_watch__content}>
                            <div className={styles.movie_watch__poster}>
                                <div className={styles.movie_watch__poster__image}>
                                    <div className={`${styles.movie_watch__img} ${styles.img}`}>
                                        <img src={movie.medium_cover_image} alt="img"/>
                                    </div>
                                    <div className={`${styles.movie_watch__to_favourite_btn} ${styles.img}`}>
                                        <ToFavorite
                                            isFavorite={favoriteMovies.some((favMovie) => favMovie.id === movie.id)}
                                            toggleFavoriteMovie={() => toggleFavoriteMovie(movie)}
                                        >
                                            {favoriteMovies.some((favMovie) => favMovie.id === movie.id) ? (
                                                <FillFavoriteIcon style={{color: 'red'}}/>
                                            ) : (
                                                <FavoriteIcon/>
                                            )}
                                        </ToFavorite>
                                    </div>
                                </div>
                                <div className={styles.movie_watch__description}>
                                    <div className={styles.movie_watch__rating}>
                                        <div
                                            className={`${styles.movie_watch__imdb_icon} ${styles.img}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                 xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                                 x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48"
                                                 xmlSpace="preserve">
                                                <g>
                                                    <path fill="#FFC107"
                                                          d="M44,13H4c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V17C48,14.8,46.2,13,44,13z"/>
                                                </g>
                                                <g>
                                                    <path fill="#000"
                                                          d="M28.1,18h-3.7v13.1h3.7c2,0,2.8-0.4,3.3-0.7c0.6-0.4,0.9-1.1,0.9-1.8v-7.9c0-0.9-0.4-1.7-0.9-2   C30.6,18.2,30.3,18,28.1,18z M28.8,28.3c0,0.6-0.7,0.6-1.3,0.6V20c0.6,0,1.3,0,1.3,0.6V28.3z"/>
                                                    <path fill="#000"
                                                          d="M33.8,18v13.3h2.8c0,0,0.2-0.9,0.4-0.7c0.4,0,1.5,0.6,2.2,0.6s1.1,0,1.5-0.2c0.6-0.4,0.7-0.7,0.7-1.3v-7.8   c0-1.1-1.1-1.8-2-1.8s-1.8,0.6-2.2,0.9v-3H33.8z M37.4,22.2c0-0.4,0-0.6,0.4-0.6c0.2,0,0.4,0.2,0.4,0.6v6.6c0,0.4,0,0.6-0.4,0.6   c-0.2,0-0.4-0.2-0.4-0.6V22.2z"/>
                                                    <polygon fill="#000"
                                                             points="22.7,31.3 22.7,18 18.3,18 17.5,24.3 16.4,18 12.4,18 12.4,31.3 15.3,31.3 15.3,23.9 16.6,31.3    18.6,31.3 19.9,23.9 19.9,31.3  "/>
                                                    <rect x="7.6" y="18" fill="#000" width="3.1" height="13.3"/>
                                                </g>
                                            </svg>
                                        </div>
                                        <div
                                            className={styles.movie_watch__rating_number}>
                                            {movie.rating}
                                        </div>
                                    </div>
                                    <h2 className={styles.movie_watch__title}>
                                        {movie.title}
                                    </h2>
                                    <div className={styles.movie_watch__year}>{movie.year}</div>
                                    <p className={styles.movie_watch__text}>{movie.description_full}</p>
                                </div>
                            </div>
                            {movie.yt_trailer_code !== '' ? (
                                <div className={styles.movie_watch__trailer}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            ) : (
                                <div className={styles.error_text}>No trailer available</div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default MovieWatch;
