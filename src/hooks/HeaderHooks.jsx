import {useEffect, useState} from 'react';
import {useCookies} from 'react-cookie';
import {MovieService} from "../services/movie.service.js";

export function useHeaderState() {
    const [isBurger, setIsBurger] = useState(false);
    const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [moviesList, setMoviesList] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [isMobileSearchingOpen, setIsMobileSearchingOpen] = useState(false);
    const [isFormActive, setIsFormActive] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['userName']);
    const [userName, setUserName] = useState('');

    useEffect(() => {
        async function fetchMovies() {
            try {
                const data = await MovieService.getMovies();
                setMoviesList(data);
            } catch (error) {
                console.error(error);
            }
        }

        fetchMovies();
    }, []);

    useEffect(() => {
        document.body.style.overflow = isBurger || isSearchBarOpen ? 'hidden' : 'auto';
        if (cookies.userName) {
            setUserName(`${cookies.userName}`);
        } else {
            setUserName('Sign in');
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isBurger, isSearchBarOpen, cookies.userName]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'Escape') {
                setIsSearchBarOpen(false);
                setIsFormActive(false);
                setIsMobileSearchingOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    useEffect(() => {
        if (searchQuery.trim() === '') {
            setFilteredMovies([]);
        } else {
            const filtered = moviesList.filter((movie) =>
                movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredMovies(filtered);
        }
    }, [searchQuery, moviesList]);

    const closeMobileMenu = () => {
        setIsBurger(false);
    };

    const closeMobileSearch = () => {
        setIsFormActive(false);
        setIsSearchBarOpen(false);
        setIsMobileSearchingOpen(false);
    };

    return {
        isBurger,
        setIsBurger,
        isSearchBarOpen,
        setIsSearchBarOpen,
        searchQuery,
        setSearchQuery,
        moviesList,
        setMoviesList,
        filteredMovies,
        setFilteredMovies,
        isMobileSearchingOpen,
        setIsMobileSearchingOpen,
        isFormActive,
        setIsFormActive,
        cookies,
        userName,
        closeMobileMenu,
        closeMobileSearch,
    };
}
