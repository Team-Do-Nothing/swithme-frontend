import React from 'react'

interface FilterButtonProps {
    children: React.ReactNode;
    bgColor?: string;
    hoverColor?: string;
    rounded?: string;
    text?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
                                                       children,
                                                       bgColor = 'bg-gray-100',
                                                       hoverColor = 'hover:bg-gray-400',
                                                       rounded = "rounded-3xl",
                                                       text = "text-gray-500"
                                                   }) => {
    return (
        <button
            className={`
                flex-grow
                py-1 sm:py-2 lg:py-3 
                px-2 sm:px-4 lg:px-6 
                border border-gray-400 
                ${rounded} 
                ${text} sm:text-base lg:text-lg 
                font-semibold 
                ${bgColor} 
                ${hoverColor} 
                w-full sm:max-w-32 md:max-w-48 lg:max-w-72 
                transition
            `}>
            {children}
        </button>
    );
};

export default FilterButton;
