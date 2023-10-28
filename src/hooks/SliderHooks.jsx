import {useEffect, useState} from 'react';

export function useSliderLogic(slidesData) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [mousePosition, setMousePosition] = useState({startX: 0, startY: 0});
    const [dragging, setDragging] = useState(false);
    const [dragDistance, setDragDistance] = useState(0);
    const [selectedSection, setSelectedSection] = useState('All');

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isMouseOver) {
                goToNext();
            }
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex, isMouseOver]);

    const slides = slidesData[0][`${selectedSection.toLowerCase()}`];

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const handleMouseDown = (e) => {
        setMousePosition({startX: e.clientX, startY: e.clientY});
        setDragging(true);
        setDragDistance(0);
    };

    const handleMouseMove = (e) => {
        if (dragging) {
            const distanceX = e.clientX - mousePosition.startX;
            setDragDistance(distanceX);
        }
    };

    const handleMouseUp = () => {
        if (dragging) {
            if (dragDistance > 50) {
                goToPrevious();
            } else if (dragDistance < -50) {
                goToNext();
            }
        }

        setDragging(false);
        setDragDistance(0);
    };

    const handleTouchStart = (e) => {
        setMousePosition({startX: e.touches[0].clientX, startY: e.touches[0].clientY});
        setDragging(true);
        setDragDistance(0);
    };

    const handleTouchMove = (e) => {
        if (dragging) {
            const distanceX = e.touches[0].clientX - mousePosition.startX;
            setDragDistance(distanceX);
        }
    };

    const handleTouchEnd = () => {
        if (dragging) {
            if (dragDistance > 50) {
                goToPrevious();
            } else if (dragDistance < -50) {
                goToNext();
            }
        }

        setDragging(false);
        setDragDistance(0);
    };

    return {
        currentIndex,
        isMouseOver,
        selectedSection,
        slides,
        setIsMouseOver,
        setCurrentIndex,
        goToPrevious,
        goToNext,
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
        setSelectedSection,
    };
}
