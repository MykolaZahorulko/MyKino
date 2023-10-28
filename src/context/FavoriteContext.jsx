import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => {
    return useContext(FavoriteContext);
};

export const FavoriteProvider = ({ children }) => {
    const favoritesFromLocalStorage = JSON.parse(localStorage.getItem('favorites')) || [];
    const [favoriteMovies, setFavoriteMovies] = useState(favoritesFromLocalStorage);

    const toggleFavoriteMovie = (movie) => {
        setFavoriteMovies((prevFavoriteMovies) => {
            const isFavorite = prevFavoriteMovies.some((favMovie) => favMovie.id === movie.id);

            if (isFavorite) {
                const newFavorites = prevFavoriteMovies.filter((favMovie) => favMovie.id !== movie.id);
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                return newFavorites;
            } else {
                const newFavorites = [...prevFavoriteMovies, movie];
                localStorage.setItem('favorites', JSON.stringify(newFavorites));
                return newFavorites;
            }
        });
    };

    return (
        <FavoriteContext.Provider value={{ favoriteMovies, toggleFavoriteMovie }}>
            {children}
        </FavoriteContext.Provider>
    );
};
