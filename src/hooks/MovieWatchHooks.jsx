import React, {useEffect, useState} from 'react'
import {MovieService} from '../services/movie.service.js'
import {useParams} from 'react-router-dom'
import {useFavoriteContext} from '../context/FavoriteContext.jsx'


export function useMovieWatchState() {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const {favoriteMovies, toggleFavoriteMovie} = useFavoriteContext();

    async function getMovie() {
        if (!id) return;
        try {
            const data = await MovieService.getMovie(id);
            setMovie(data);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        getMovie();
    }, [id]);
    return {
        movie,
        isLoading,
        favoriteMovies,
        toggleFavoriteMovie
    }
}