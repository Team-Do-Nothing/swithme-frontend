import React from 'react'
import {DropdownCloseButton} from "@/components/MyGroup/DropDownCloseButton";
import MyGroupNavBar from "@/components/MyGroup/MyGroupNavBar";
import {BiChevronDown} from "react-icons/bi";
import {Heart2Button} from "@/components/MyGroup/Heart2Button";

const MyGroupHeader = () => {
    return (
        <>
            <div className="flex items-start gap-[10px] px-[10px] py-[20px] relative">
                <div className="flex flex-col h-[84px] items-start gap-[15px] p-[10px] relative flex-1 grow">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[24px] whitespace-nowrap">
                        리액트 같이 공부하실 분 모십니다.
                    </p>
                    <div
                        className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] mb-[-5.00px] rounded-[20px] overflow-hidden">
                        <div
                            className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-[#58c179] rounded-[20px] overflow-hidden">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                강남구 서초동
                            </div>
                        </div>
                        <div
                            className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-[#86c158] rounded-[20px] overflow-hidden">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                개발 - 프론트엔드
                            </div>
                        </div>
                        <div
                            className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative flex-[0_0_auto] bg-[#d4c261] rounded-[20px] overflow-hidden">
                            <div
                                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                40 / 50명
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="inline-flex items-center justify-center gap-[10px] p-[10px] relative self-stretch flex-[0_0_auto]">
                    <Heart2Button />
                    <DropdownCloseButton text="모집중" />
                </div>
            </div>
            <MyGroupNavBar/>
        </>
    )
}
export default MyGroupHeader