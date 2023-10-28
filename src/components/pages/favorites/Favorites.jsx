import React from 'react';
import styles from './Favourites.module.scss';
import MoviesList from '../../moviesList/MoviesList.jsx';
import {useFavoriteState} from '../../../hooks/FavoritesHooks.jsx';
import Loading from '../../features/loading/Loading.jsx';

const Favorites = () => {
    const {
        favoriteMovies,
        isLoading,
        favoritesFromLocalStorage,
        handleToggleFavorite,
    } = useFavoriteState();

    return (
        <div className={styles.favorites}>
            {favoritesFromLocalStorage.length > 0 ? (
                isLoading ? (
                    <Loading/>
                ) : (
                    <MoviesList
                        moviesList={favoritesFromLocalStorage}
                        toggleFavoriteMovie={handleToggleFavorite}
                        favoriteMovies={favoriteMovies}
                        isNeedFavorite={true}
                    />
                )
            ) : (
                <div className={styles.error_text}>There is no favorite movie yet</div>
            )}
        </div>
    );
};

export default Favorites;
