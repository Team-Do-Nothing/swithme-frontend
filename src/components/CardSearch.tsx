'use client';

import React, {useState} from 'react';
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
        <form onSubmit={handleSubmit} className="flex items-start gap-[10px] px-[10px] py-[10px] relative border-b-2 [border-bottom-style:solid] border-[#999999]">
            <div className="flex flex-col items-start justify-center gap-[10px] relative flex-1 grow">
                <div className="flex items-center justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                        모집 상태
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            전체
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            모집중
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            모집완료
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                        분야
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            대분류
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            소분류
                        </div>
                    </div>
                    <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                        위치
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            구
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center p-[10px] relative flex-1 grow rounded-[13px] overflow-hidden border-2 border-solid border-[#999999]">
                        <div className="mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            동
                        </div>
                    </div>
                </div>
                <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-[12px] overflow-hidden border-2 border-solid border-[#999999]">
                    <div className="flex items-center gap-[10px] p-[10px] relative flex-1 grow">
                        <BiSearch className="relative w-[24px] h-[24px] overflow-hidden" />
                        <div className="mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[18px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                            관심 스터디를 검색해보세요!
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-[150px] items-center justify-center gap-[10px] p-[10px] relative self-stretch">
                <button className="inline-flex flex-col items-center justify-center gap-[10px] px-[30px] py-[20px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden all-[unset] box-border">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                        검색
                    </div>
                </button>
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] rounded-[12px] overflow-hidden border border-solid border-[#d9d9d9] shadow-[0px_4px_4px_#00000040]">
                    <BiRefresh className="relative w-[24px] h-[24px] overflow-hidden" />
                    <div className="mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[20px] relative w-fit tracking-[0] leading-[24px] whitespace-nowrap">
                        초기화
                    </div>
                </div>
            </div>
        </form>
    );
};

export default CardSearch;