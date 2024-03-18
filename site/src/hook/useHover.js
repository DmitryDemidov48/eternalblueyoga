import { useState } from 'react';

// Кастомный хук для отслеживания состояния наведения на иконки
export const useHover = () => {
    const [hoveredIcons, setHoveredIcons] = useState({});

    const handleMouseEnter = title => {
        setHoveredIcons(prevState => ({
            ...prevState,
            [title]: true
        }));
    };

    const handleMouseLeave = title => {
        setHoveredIcons(prevState => ({
            ...prevState,
            [title]: false
        }));
    };

    return [hoveredIcons, handleMouseEnter, handleMouseLeave];
};