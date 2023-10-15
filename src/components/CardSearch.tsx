'use client';
import React, {useState} from 'react';
import FilterButton from "@/components/FilterButton";

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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const res = await fetch(
            `/api/groups/search?query=${query}`
        );
        const groups = await res.json();
        console.log(groups);
        getCardResults(groups);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row w-full items-center gap-2">
            <input type="text"
                   placeholder="관심 스터디를 검색해보세요!"
                   className="p-2 rounded border shadow-md flex-8 w-full"
                   value={query}
                   onChange={(e) => setQuery(e.target.value)}
            />
            <div className="flex gap-3">
                <button
                    className="bg-green-500 hover:bg-green-600 rounded-xl text-gray-50 py-1 sm:py-2 lg:py-3 px-2 sm:px-4 lg:px-8 border border-gray-400 font-semibold transition w-full md:w-auto whitespace-nowrap">
                    검색
                </button>
                <button
                    className="bg-gray-500 hover:bg-green-600 rounded-xl text-gray-50 py-1 sm:py-2 lg:py-3 px-2 sm:px-4 lg:px-6 border border-gray-400 font-semibold transition w-full md:w-auto whitespace-nowrap">
                    초기화
                </button>
            </div>
        </form>
    );
};

export default CardSearch;