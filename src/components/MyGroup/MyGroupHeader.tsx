'use client';

import React, {useState} from 'react'
import {DropdownCloseButton} from "@/components/MyGroup/DropDownCloseButton";
import MyGroupNavBar from "@/components/MyGroup/MyGroupNavBar";
import {RiHeart2Line} from "react-icons/ri";
import {RiHeart2Fill} from "react-icons/ri";

const MyGroupHeader = () => {
    const [liked, setLiked] = useState(false);

    const handleClick = () => {
        setLiked(!liked);
    };

    return (
        <>
            <div className="flex items-start gap-[10px] px-[10px] py-[20px] relative">
                <div className="flex flex-col h-[84px] items-start gap-[15px] p-[10px] relative flex-1 grow">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[24px] whitespace-nowrap">
                        리액트 같이 공부하실 분 모십니다.
                    </p>
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] mb-[-5.00px] rounded-[20px] overflow-hidden">
                        <div className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-[#58c179] rounded-[20px] overflow-hidden cursor-pointer hover:bg-[#36a057]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                강남구 서초동
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-[#86c158] rounded-[20px] overflow-hidden cursor-pointer hover:bg-[#64a036]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                개발 - 프론트엔드
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-[#d4c261] rounded-[20px] overflow-hidden cursor-pointer hover:bg-[#a2a040]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                40 / 50명
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative self-stretch flex-[0_0_auto]">
                    <button
                        type="button"
                        className="inline-flex flex-col items-center justify-center gap-[10px] p-[20px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#999999] shadow-[0px_4px_4px_#00000040] hover:bg-gray-100"
                        onClick={handleClick}
                    >
                        {liked ? (
                            <RiHeart2Fill className="!relative !w-[24px] !h-[24px] text-red-500" />
                        ) : (
                            <RiHeart2Line className="!relative !w-[24px] !h-[24px] text-black-500" />
                        )}
                    </button>
                    <DropdownCloseButton />
                </div>
            </div>
            <MyGroupNavBar/>
        </>
    )
}
export default MyGroupHeader;
