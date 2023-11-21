'use client';

import React, {useState, useEffect} from 'react';
import {BiSearch, BiRefresh} from "react-icons/bi";

interface Group {
    study_id: string;
    title: string;
    category_name: string;
    number_of_members: number;
    member_name: string;
    study_info: string;
    study_status: number;
    region_name: string;
}

interface CardSearchProps {
    getCardResults: (group: Group[]) => void;
}
const CardSearch: React.FC<CardSearchProps> = ({getCardResults}) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            `/api/groups/search?query=${query}`
        );
        const groups = await res.json();
        getCardResults(groups);
    }

    return (
        <form onSubmit={handleSubmit} className="flex gap-[10px] px-[10px] py-[10px] relative border-b-2 [border-bottom-style:solid] border-[#999999]">
            <div className="flex flex-col items-center justify-center gap-[10px] relative flex-1 grow">
                <div className={`flex items-center justify-center relative self-stretch w-full rounded-[12px] overflow-hidden border-2 ${isFocused ? 'border-black' : 'border-[#999999]'} hover:border-[#000000]`}>
                    <BiSearch className="absolute left-[10px] w-[24px] h-[24px]" />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        placeholder="관심 스터디를 검색해보세요!"
                        className="flex-1 pl-[40px] pr-[10px] py-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#000000] text-[18px] w-full tracking-[0] leading-[24px] whitespace-nowrap rounded-[12px] outline-none"
                    />
                </div>
            </div>
            <div className="flex flex-col w-[150px] items-center justify-center gap-[10px] p-[10px] relative self-stretch">
                <button type="submit" className="inline-flex flex-col items-center justify-center px-[30px] py-[12px] relative bg-green-500 rounded-[12px] overflow-hidden all-[unset] box-border cursor-pointer shadow-[0px_4px_4px_#00000040] hover:bg-green-600">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                        검색
                    </div>
                </button>
            </div>
        </form>
    );
};

export default CardSearch;