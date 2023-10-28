import React from 'react';
import styles from './Slider.module.scss';
import {FiEye as EyeIcon} from 'react-icons/fi';
import Button from '../../ui/button/Button.jsx';
import {Link} from 'react-router-dom';
import MovieImage from "../../movieImage/MovieImage.jsx";
import Select from "../../ui/select/Select.jsx";
import {useFavoriteContext} from '../../../context/FavoriteContext';
import {useSliderLogic} from '../../../hooks/SliderHooks.jsx';

const Slider = ({slidesData, selectedSort, sortPosts}) => {
    const {
        currentIndex,
        setIsMouseOver,
        selectedSection,
        slides,
        setCurrentIndex,
        goToPrevious,
        goToNext,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        setSelectedSection
    } = useSliderLogic(slidesData);
    const {favoriteMovies, toggleFavoriteMovie} = useFavoriteContext();

    const addOrRemoveFromFavorites = () => {
        const currentSlide = slides[currentIndex];
        const isFavorite = favoriteMovies.some((favMovie) => favMovie.id === currentSlide.id);

        if (isFavorite) {
            toggleFavoriteMovie(currentSlide);
        } else {
            toggleFavoriteMovie(currentSlide);
        }
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };
    return (
        <div className={styles.main_slider}>
            <div className={styles.main_slider__backgraund}
                 style={{backgroundImage: `url(${slides[currentIndex].background_image_original})`}}>
            </div>
            <div className={`${styles.main_slider__container} ${styles.container}`}>
                <div className={styles.main_slider__slide_block}>
                    <div className={styles.main_slider__slide_block_left_arrow} onClick={goToPrevious}>❮</div>
                    {slides.map((slide, slideIndex) => (
                        <div
                            className={`${styles.main_slider__slide_block_slide} ${
                                currentIndex === slideIndex ? styles.active : ''
                            }`}
                            key={slideIndex}
                            onMouseEnter={() => setIsMouseOver(true)}
                            onMouseLeave={() => setIsMouseOver(false)}
                            onMouseDown={handleMouseDown}
                            onMouseMove={handleMouseMove}
                            onMouseUp={handleMouseUp}
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            <Link to={`/movie/${slide.id}`}>
                                <MovieImage
                                    isFavorite={favoriteMovies.some((favMovie) => favMovie.id === slide.id)}
                                    isNeedFavorite={true}
                                    toggleFavoriteMovie={addOrRemoveFromFavorites}
                                    favoriteMovies={favoriteMovies} title={slide.title}
                                    imgSrc={slide.large_cover_image}
                                    className={`${styles.main_slider__slide_block_slide_img} ${styles.img}`}
                                />
                            </Link>
                            <div className={styles.main_slider__slide_block_slide_information}>
                                <div className={styles.main_slider__slide_block_slide_information_rating}>
                                    <div
                                        className={`${styles.main_slider__slide_block_slide_information_rating_imdb_icon} ${styles.img}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1"
                                             x="0px" y="0px" viewBox="0 0 48 48" enableBackground="new 0 0 48 48"
                                             xmlSpace="preserve">
                                            <g>
                                                <path fill="#FFC107"
                                                      d="M44,13H4c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V17C48,14.8,46.2,13,44,13z"/>
                                            </g>
                                            <g>
                                                <path fill="#000"
                                                      d="M28.1,18h-3.7v13.1h3.7c2,0,2.8-0.4,3.3-0.7c0.6-0.4,0.9-1.1,0.9-1.8v-7.9c0-0.9-0.4-1.7-0.9-2   C30.6,18.2,30.3,18,28.1,18z M28.8,28.3c0,0.6-0.7,0.6-1.3,0.6V20c0.6,0,1.3,0,1.3,0.6V28.3z"/>
                                                <path fill="#000"
                                                      d="M33.8,18v13.3h2.8c0,0,0.2-0.9,0.4-0.7c0.4,0,1.5,0.6,2.2,0.6s1.1,0,1.5-0.2c0.6-0.4,0.7-0.7,0.7-1.3v-7.8   c0-1.1-1.1-1.8-2-1.8s-1.8,0.6-2.2,0.9v-3H33.8z M37.4,22.2c0-0.4,0-0.6,0.4-0.6c0.2,0,0.4,0.2,0.4,0.6v6.6c0,0.4,0,0.6-0.4,0.6   c-0.2,0-0.4-0.2-0.4-0.6V22.2z"/>
                                                <polygon fill="#000"
                                                         points="22.7,31.3 22.7,18 18.3,18 17.5,24.3 16.4,18 12.4,18 12.4,31.3 15.3,31.3 15.3,23.9 16.6,31.3    18.6,31.3 19.9,23.9 19.9,31.3  "/>
                                                <rect x="7.6" y="18" fill="#000" width="3.1" height="13.3"/>
                                            </g>
                                        </svg>
                                    </div>
                                    <div className={styles.main_slider__slide_block_slide_information_rating_number}>
                                        {slide.rating}
                                    </div>
                                </div>
                                <div className={styles.main_slider__slide_block_slide_information_text}>
                                    <h2 className={styles.main_slider__slide_block_slide_information_text_title}>
                                        {slide.title}
                                    </h2>

                                    <p className={styles.main_slider__slide_block_slide_information_text_description}>
                                        {slide.description_full}
                                    </p>
                                </div>
                                <div className={styles.main_slider__slide_block_slide_information_navigation}>
                                    <Button
                                        to={`/movie/${slide.id}`}
                                        className={styles.main_slider__slide_block_slide_information_navigation_watch}
                                    >
                                        <EyeIcon/>
                                        Watch
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.main_slider__slide_block_right_arrow} onClick={goToNext}>❯</div>
                </div>
                <ul className={styles.main_slider__bullets}>
                    {slides.map((slide, slideIndex) => (
                        <li
                            className={`${styles.slider__bullet} ${currentIndex === slideIndex ? styles.active : ''}`}
                            key={slideIndex}
                            onClick={() => {
                                goToSlide(slideIndex)
                            }}
                        >
                        </li>
                    ))}
                </ul>
            </div>
            <div className={`${styles.main_slider__sections} ${styles.container}`}>
                <ul className={styles.main_slider__sections_body}>
                    {['All', 'Movies', 'Horrors', 'Cartoons', 'Romantics'].map((section) => (
                        <li
                            key={section}
                            className={`${styles.main_slider__section} ${selectedSection === section ? styles.active : ''}`}
                            onClick={() => {
                                setSelectedSection(section)
                                setCurrentIndex(0)
                            }
                            }
                        >
                            {section}
                        </li>
                    ))}
                </ul>
                <Select
                    value={selectedSort}
                    onChange={sortPosts}
                    defaultValue="Sorting"
                    options={[
                        {value: 'title', name: 'Sort by title'},
                        {value: 'year', name: 'Sort by year'},
                        {value: 'view', name: 'Sort by views'},
                        {value: 'rating', name: 'Sort by rating'}
                    ]}
                />
            </div>
        </div>
    )
}

export default Slider
