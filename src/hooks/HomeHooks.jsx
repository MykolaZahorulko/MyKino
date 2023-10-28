import React, {useEffect, useState} from 'react'
import {MovieService} from '../services/movie.service.js'
import {useFavoriteContext} from '../context/FavoriteContext';

export function useHomeState() {
    const [isLoading, setIsLoading] = useState(true)
    const [moviesList, setMoviesList] = useState([])
    const {favoriteMovies, toggleFavoriteMovie} = useFavoriteContext()
    const [selectedSort, setSelectedSort] = useState('')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    async function getMovies() {
        const data = await MovieService.getMovies()
        setMoviesList(data)
        setIsLoading(false)
    }

    useEffect(() => {
        getMovies()
    }, []);

    const sortPosts = (selectedSort) => {
        setSelectedSort(selectedSort);

        if (selectedSort === 'title') {
            setMoviesList([...moviesList].sort((a, b) => a.title.localeCompare(b.title)))
        } else if (selectedSort === 'year') {
            setMoviesList([...moviesList].sort((a, b) => a.year - b.year))
        } else if (selectedSort === 'view') {
            setMoviesList([...moviesList].sort((a, b) => a.runtime - b.runtime))
        } else if (selectedSort === 'rating') {
            setMoviesList([...moviesList].sort((a, b) => b.rating - a.rating))
        } else {
            setMoviesList([...moviesList]);
        }
    }
    return {
        isLoading,
        moviesList,
        favoriteMovies,
        selectedSort,
        setSelectedSort,
        toggleFavoriteMovie,
        sortPosts,
    }
}