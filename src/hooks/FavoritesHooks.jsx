import React, {useEffect, useState} from 'react';
import {useFavoriteContext} from '../context/FavoriteContext.jsx';


export function useFavoriteState() {
    const [isLoading, setIsLoading] = useState(true);
    const {favoriteMovies, toggleFavoriteMovie} = useFavoriteContext();
    const [favoritesFromLocalStorage, setFavoritesFromLocalStorage] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        setIsLoading(false)
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavoritesFromLocalStorage(favorites);
    }, []);

    const handleToggleFavorite = (movie) => {
        toggleFavoriteMovie(movie)
        const updatedFavorites = favoritesFromLocalStorage.filter((favMovie) => favMovie.id !== movie.id);
        setFavoritesFromLocalStorage(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    return {
        favoriteMovies,
        favoritesFromLocalStorage,
        isLoading,
        handleToggleFavorite
    };
}