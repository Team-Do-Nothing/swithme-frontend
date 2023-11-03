'use client';
import React, {useState} from 'react';

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
        <form onSubmit={handleSubmit}>
            <div className="flex mt-4">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between w-full">
                    <div className="flex items-center gap-2 flex-grow">
                        <span className="font-bold text-black-600 w-16 whitespace-nowrap">분야</span>
                        {['대분류', '소분류'].map(label => (
                            <button
                                key={label}
                                className="
                                        flex-grow
                                        py-1
                                        sm:py-2
                                        lg:py-3
                                        px-2
                                        sm:px-4
                                        lg:px-6
                                        border border-gray-400
                                        rounded-3xl
                                        text-gray-500
                                        sm:text-base
                                        lg:text-lg
                                        font-semibold
                                        bg-gray-100
                                        hover:bg-gray-400
                                        w-full
                                        sm:max-w-32
                                        md:max-w-48
                                        lg:max-w-72
                                        transition">
                                {label}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 mt-2 sm:mt-0 flex-grow">
                        <span className="font-bold text-black-600 w-16 whitespace-nowrap">위치</span>
                        {['구', '동'].map(label => (
                            <button
                                key={label}
                                className="
                                        flex-grow
                                        py-1
                                        sm:py-2
                                        lg:py-3
                                        px-2
                                        sm:px-4
                                        lg:px-6
                                        border border-gray-400
                                        rounded-3xl
                                        text-gray-500
                                        sm:text-base
                                        lg:text-lg
                                        font-semibold
                                        bg-gray-100
                                        hover:bg-gray-400
                                        w-full
                                        sm:max-w-32
                                        md:max-w-48
                                        lg:max-w-72
                                        transition">
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row w-full items-center gap-2">
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
            </div>
        </form>
    );
};

export default CardSearch;