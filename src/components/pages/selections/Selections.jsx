import React from 'react'
import styles from './Selections.module.scss'
import MoviesList from "../../moviesList/MoviesList.jsx"
import {useSelectionState} from "../../../hooks/SelectionsHooks.jsx";

const Selections = () => {
    const {
        favoriteMovies,
        toggleFavoriteMovie,
        selections
    } = useSelectionState()
    return (
        <div className={styles.selections}>
            <div className={styles.container}>
                <div className={styles.selections__items}>
                    {selections.map((selection, index) => (
                        <div className={styles.selections__item} key={index}>
                            <div className={styles.selections__title}>
                                {selection.title}
                            </div>
                            <MoviesList
                                moviesList={selection.movies}
                                isNeedFavorite={true}
                                isLoading={false}
                                favoriteMovies={favoriteMovies}
                                toggleFavoriteMovie={toggleFavoriteMovie}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Selections
