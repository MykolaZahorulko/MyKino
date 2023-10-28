import React from 'react'
import Slider from '../../features/slider/Slider.jsx'
import slidesData from '../../../data/sliderData.js'
import MoviesList from '../../moviesList/MoviesList.jsx'
import styles from './Home.module.scss'
import { useHomeState } from "../../../hooks/HomeHooks.jsx";

const Home = () => {
    const {
        setSelectedSort,
        isLoading,
        moviesList,
        favoriteMovies,
        selectedSort,
        toggleFavoriteMovie,
        sortPosts,
    } = useHomeState()
    return (
        <div className={styles.main__content}>
            <Slider
                slidesData={slidesData}
                selectedSort={selectedSort}
                setSelectedSort={setSelectedSort}
                sortPosts={sortPosts}
            />
            <MoviesList
                moviesList={moviesList}
                isLoading={isLoading}
                favoriteMovies={favoriteMovies}
                toggleFavoriteMovie={toggleFavoriteMovie}
                isNeedFavorite={true}
            />
        </div>
    )
}
export default Home
