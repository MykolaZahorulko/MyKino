import React, {useEffect} from 'react';
import styles from './Search.module.scss';
import {FiSearch as SearchIcon} from 'react-icons/fi';
import {CgClose as CloseIcon} from 'react-icons/cg';
import {useSearchState} from "../../../hooks/SearchHooks.jsx";

const Search = ({setIsSearchBarOpen, isSearchBarOpen, setSearchQuery, searchQuery, className, setIsMobileSearchingOpen, isFormActive, setIsFormActive}) => {
    useEffect(() => {
        if (isFormActive) {
            setIsSearchClicked(false)
        }
        if (isFormActive && searchRef.current) {
            searchRef.current.focus();
        }
        document.addEventListener('click', handleSearchClick);
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('click', handleSearchClick);
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isFormActive,isSearchBarOpen]);

    if (className === undefined) {
        className = '';
    }
    const {
        isSearchClicked,
        setIsSearchClicked,
        searchRef,
        handleSearchClick,
        handleKeyPress
    } = useSearchState()

    return (
        <div className={`${styles.search} ${className}`}>
            <div className={styles.search__bar}>
                <div className={`${styles.img} ${styles.search__icon_dandruff}`}>
                    <SearchIcon/>
                </div>
                <form
                    action="/"
                    className={styles.search__form}
                    onFocus={() => {
                        setIsSearchBarOpen(true);
                    }}
                    onClick={() => {
                        setIsSearchBarOpen(true);
                    }}
                >
                    <input
                        className={styles.search__control}
                        name="query"
                        type="text"
                        ref={searchRef}
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                    />
                    {!isFormActive && isSearchClicked && searchQuery.length === 0 ? (
                        <label
                            htmlFor="search__control"
                            className={styles.search__control_label}
                        >
                            Searching
                        </label>
                    ) : null}
                </form>
                <div
                    className={`${styles.img} ${styles.search__icon_close}`}
                    onClick={() => {
                        setIsSearchBarOpen(false)
                        setSearchQuery('')
                        if (window.innerWidth < 768) {
                            setIsMobileSearchingOpen(false)
                            setIsFormActive(false)
                        }
                    }}
                >
                    <CloseIcon/>
                </div>
            </div>
        </div>
    );
};

export default Search;
