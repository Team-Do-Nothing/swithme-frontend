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

    const [majorCategory, setMajorCategory] = useState('');
    const [minorCategory, setMinorCategory] = useState('');
    const [minorCategories, setMinorCategories] = useState<string[]>([]);

    const [district, setDistrict] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [neighborhoods, setNeighborhoods] = useState<string[]>([]);

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    const majorCategories: {[key: string]: string[]} = {
        'IT': ['개발', '보안', '네트워킹'],
        '문화': ['음악', '영화', '미술'],
        '예술': ['회화', '조각', '공연'],
    };

    const locationCategories: {[key: string]: string[]} = {
        '강남구': ['강남동', '역삼동', '청담동'],
        '종로구': ['종로1가', '종로2가', '종로3가'],
        '마포구': ['망원동', '상암동', '성산동']
    };

    useEffect(() => {
        if (majorCategory in majorCategories) {
            setMinorCategories(majorCategories[majorCategory]);
        } else {
            setMinorCategories([]);
        }
        setMinorCategory('');

        if (district in locationCategories) {
            setNeighborhoods(locationCategories[district]);
        } else {
            setNeighborhoods([]);
        }
        setNeighborhood('');
    }, [majorCategory, district]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            `/api/groups/search?query=${query}`
        );
        const groups = await res.json();
        getCardResults(groups);
    }

    const handleReset = async () => {
        setQuery('');
        setMajorCategory('');
        setMinorCategory('');
        setDistrict('');
        setNeighborhood('');

        const res = await fetch(`/api/groups/search?query=`);
        const groups = await res.json();
        getCardResults(groups);
    };

    return (
        <form onSubmit={handleSubmit} className="flex items-start gap-[10px] px-[10px] py-[10px] relative border-b-2 [border-bottom-style:solid] border-[#999999]">
            <div className="flex flex-col items-start justify-center gap-[10px] relative flex-1 grow">
                <div className="flex items-center justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                        분야
                    </div>
                    <select value={majorCategory} onChange={(e) => setMajorCategory(e.target.value)} className="flex flex-col items-center justify-center p-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999] hover:border-[#000000]">
                        <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px]" value="">대분류 선택</option>
                        {Object.keys(majorCategories).map(key => (
                            <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#000000] text-[18px]" key={key} value={key}>{key}</option>
                        ))}
                    </select>
                    <select value={minorCategory} onChange={(e) => setMinorCategory(e.target.value)} className="flex flex-col items-center justify-center p-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999] hover:border-[#000000]" disabled={minorCategories.length === 0}>
                        <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px]" value="">소분류 선택</option>
                        {minorCategories.map(category => (
                            <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#000000] text-[18px]" key={category} value={category}>{category}</option>
                        ))}
                    </select>
                    <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                        위치
                    </div>
                    <select value={district} onChange={(e) => setDistrict(e.target.value)} className="flex flex-col items-center justify-center p-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999] hover:border-[#000000]">
                        <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px]" value="">구 선택</option>
                        {Object.keys(locationCategories).map(key => (
                            <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#000000] text-[18px]" key={key} value={key}>{key}</option>
                        ))}
                    </select>
                    <select value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} className="flex flex-col items-center justify-center p-[10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999] hover:border-[#000000]" disabled={neighborhoods.length === 0}>
                        <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px]" value="">동 선택</option>
                        {neighborhoods.map(n => (
                            <option className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#000000] text-[18px]" key={n} value={n}>{n}</option>
                        ))}
                    </select>
                </div>
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
                <button type="submit" className="inline-flex flex-col items-center justify-center px-[30px] py-[16px] relative bg-green-500 rounded-[12px] overflow-hidden all-[unset] box-border cursor-pointer shadow-[0px_4px_4px_#00000040] hover:bg-green-600">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                        검색
                    </div>
                </button>
                <button
                    className="inline-flex items-center justify-center p-[10px] relative flex-[0_0_auto] rounded-[12px] overflow-hidden border border-solid border-[#d9d9d9] shadow-[0px_4px_4px_#00000040] hover:bg-gray-200"
                    onClick={handleReset}>
                    <BiRefresh className="relative w-[24px] h-[24px] overflow-hidden" />
                    <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[20px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                        초기화
                    </div>
                </button>
            </div>
        </form>
    );
};

export default CardSearch;