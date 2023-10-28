import React, {useEffect, useRef, useState} from 'react';

export function useSearchState() {
    const [isSearchClicked, setIsSearchClicked] = useState(true);
    const searchRef = useRef(null);
        const handleSearchClick = (event) => {
            if (
                searchRef.current &&
                (searchRef.current.contains(event.target) ||
                    event.target.tagName === 'LABEL')
            ) {
                setIsSearchClicked(false);
                searchRef.current.focus();
            } else {
                setIsSearchClicked(true);
            }
        };

        function handleKeyPress(e) {
            if (window.innerWidth > 768) {
                if (e.key === 'Escape') {
                    searchRef.current.blur()
                    setIsSearchClicked(true)
                }
                if (e.key === 'Enter') {
                    e.preventDefault();
                }
            }

        }

    return {
        isSearchClicked,
        setIsSearchClicked,
        searchRef,
        handleSearchClick,
        handleKeyPress
    }

}