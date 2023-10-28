import React from 'react';
import styles from './Header.module.scss';
import {FaTelegramPlane as TelegramIcon} from 'react-icons/fa';
import {GoPerson as PersonIcon} from 'react-icons/go';
import {FiSearch as SearchIcon} from 'react-icons/fi';
import {BsBookmark as FavoriteIcon, BsGrid as SelectionIcon} from 'react-icons/bs';
import {Link} from 'react-router-dom';
import Logo from '../../ui/logo/Logo.jsx';
import Button from '../../ui/button/Button.jsx';
import Search from '../../ui/search/Search.jsx';
import MoviesList from '../../moviesList/MoviesList.jsx';
import {useHeaderState} from '../../../hooks/HeaderHooks.jsx';

function Header() {
    const {isBurger, setIsBurger, isSearchBarOpen, setIsSearchBarOpen, searchQuery, setSearchQuery, filteredMovies, isMobileSearchingOpen, setIsMobileSearchingOpen, isFormActive, setIsFormActive, userName, closeMobileMenu, closeMobileSearch,} = useHeaderState();

    return (
        <header className={styles.header}>
            <div className={styles.header__body}>
                <div className={`${styles.header__content} ${styles.container}`}>
                    <div className={styles.header__content_left}>
                        <Logo
                            className={styles.header__content_left_logo}
                            onClick={() => {
                                closeMobileSearch()
                                closeMobileMenu()
                            }}/>
                        <Button className={styles.header__content_left_button} to="https://web.telegram.org/a/">
                            <div className={`${styles.img} ${styles.header__content_left_button_telegram_icon}`}>
                                <TelegramIcon/>
                            </div>
                            <span className={styles.header__content_left_button_text}>We in Telegram</span>
                        </Button>
                    </div>
                    <div className={styles.header__content_center}>
                        <div className={styles.center__content}>
                            <Link to="/selections" className={styles.center__content_item}
                                  onClick={() => {
                                      closeMobileSearch()
                                      closeMobileMenu()
                                  }}>
                                <div className={`${styles.img} ${styles.center__content_icon}`}>
                                    <SelectionIcon/>
                                </div>
                                <div className={styles.center__content_text}>Selections</div>
                            </Link>
                            <Link
                                to="/favorites"
                                className={styles.center__content_item}
                                onClick={() => {
                                    closeMobileSearch()
                                    closeMobileMenu()
                                }}>
                                <div className={`${styles.img} ${styles.center__content_icon}`}>
                                    <FavoriteIcon/>
                                </div>
                                <div className={styles.center__content_text}>Favorites</div>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.header__content_right}>
                        <Search setIsSearchBarOpen={setIsSearchBarOpen} setSearchQuery={setSearchQuery}
                                searchQuery={searchQuery}/>
                    </div>
                    <div className={styles.header__content_login}>
                        <Link to="/login" className={styles.login__content}>
                            <div className={`${styles.img} ${styles.login__content_icon}`}>
                                <PersonIcon/>
                            </div>
                            <div className={styles.login__content_text}>
                                {userName ? `${userName}` : 'Sign in'}
                            </div>
                        </Link>
                    </div>
                    <div
                        className={styles.mobile_searching_opener}
                        onClick={() => {
                            setIsMobileSearchingOpen(!isMobileSearchingOpen)
                            setIsSearchBarOpen(false)
                            setIsFormActive(!isFormActive)
                        }}
                    >
                        <div className={styles.mobile_searching_opener_content}>
                            <div className={styles.mobile_searching_opener_body}>
                                <div className={`${styles.mobile_searching_opener_icon} ${styles.img}`}>
                                    <SearchIcon/>
                                </div>
                                <div className={styles.mobile_searching_opener_text}>
                                    Searching
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.header__content_burger} ${isBurger ? styles._active : ''}`}
                         onClick={() => setIsBurger(!isBurger)}>
                        <span></span>
                    </div>
                </div>
            </div>
            <div
                className={`${styles.searching_mobile} ${isMobileSearchingOpen ? styles.searching_mobile_active : ''}`}>
                <Search
                    className={styles.searching_mobile_bar}
                    setIsSearchBarOpen={setIsSearchBarOpen}
                    isSearchBarOpen={isSearchBarOpen}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                    setIsMobileSearchingOpen={setIsMobileSearchingOpen}
                    isFormActive={isFormActive}
                    setIsFormActive={setIsFormActive}/>
            </div>

            <div
                className={`${styles.header__mobile} ${isBurger ? styles._active : ''}`}
                onClick={() => setIsMobileSearchingOpen(false)}>
                <div className={`${styles.header__mobile_content} ${styles.container}`}>
                    <Link
                        to="/login"
                        className={styles.header__mobile_content__item}
                        onClick={() => {
                            closeMobileSearch()
                            closeMobileMenu()
                        }}>
                        <div className={`${styles.img} ${styles.header__mobile_content_icon}`}>
                            <PersonIcon/>
                        </div>
                        <div className={styles.header__mobile_content_text}>
                            {userName ? userName : 'Sign in'}
                        </div>
                    </Link>
                    <Link
                        to="/selections"
                        className={styles.header__mobile_content__item}
                        onClick={() => {
                            closeMobileSearch()
                            closeMobileMenu()
                        }}>
                        <div className={`${styles.img} ${styles.header__mobile_content_icon}`}>
                            <SelectionIcon/>
                        </div>
                        <div className={styles.header__mobile_content_text}>Selections</div>
                    </Link>
                    <Link
                        to="/favorites"
                        className={styles.header__mobile_content__item}
                        onClick={() => {
                            closeMobileSearch()
                            closeMobileMenu()
                        }}>
                        <div className={`${styles.img} ${styles.header__mobile_content_icon}`}>
                            <FavoriteIcon/>
                        </div>
                        <div className={styles.header__mobile_content_text}>Favorites</div>
                    </Link>
                </div>
            </div>
            <div
                className={`${styles.search_list} ${isSearchBarOpen ? styles.search_active : ''}`}
                onClick={() => {
                    setIsSearchBarOpen(false)
                    setIsMobileSearchingOpen(false)
                    setIsFormActive(false)
                    setSearchQuery('')
                }}
            >
                <MoviesList
                    moviesList={filteredMovies}
                />
            </div>
        </header>
    );
};

export default Header;
