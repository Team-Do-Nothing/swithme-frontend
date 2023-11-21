'use client';

import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface OptionsType {
    [key: string]: string;
}

export const DropdownCloseButton: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string>('모집 중');

    const options: OptionsType = {
        '모집 중': 'bg-green-500 hover:bg-green-600',
        '모집 완료': 'bg-yellow-500 hover:bg-yellow-600',
        '스터디 종료': 'bg-gray-500 hover:bg-gray-600'
    };

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                className={`inline-flex items-center justify-center w-[158px] py-[20px] rounded-[12px] overflow-hidden ${options[selectedOption]}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                    {selectedOption}
                </div>
                <BiChevronDown className="!relative !w-[24px] !h-[24px]" />
            </button>
            {isOpen && (
                <div className="absolute w-full rounded-[12px] mt-2 overflow-hidden bg-white shadow-lg z-10 opacity-95">
                    {Object.keys(options).map((option, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-center w-[158px] py-[20px] font-semibold text-[16px] cursor-pointer ${options[option]} text-white`}
                            onClick={() => handleSelect(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
