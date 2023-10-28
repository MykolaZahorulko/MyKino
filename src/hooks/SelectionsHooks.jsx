import React, {useEffect} from 'react'
import selectionsData from '../data/sliderData.js'
import {useFavoriteContext} from '../context/FavoriteContext';


export function useSelectionState() {
    const {favoriteMovies, toggleFavoriteMovie} = useFavoriteContext()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    const selections = [
        {
            title: "The best movies",
            movies: selectionsData[0]['all'].slice(0, 5),
        },
        {
            title: "The scariest movies",
            movies: selectionsData[0]['horrors'].slice(0, 5),
        },
        {
            title: "Popular cartoons",
            movies: selectionsData[0]['cartoons'].slice(0, 5),
        },
        {
            title: "Best romantic movies",
            movies: selectionsData[0]['romantics'].slice(0, 5),
        },
    ];
    return {
        favoriteMovies,
        toggleFavoriteMovie,
        selections
    }
}