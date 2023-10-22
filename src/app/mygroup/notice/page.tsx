import React from 'react';
import {DropdownCloseButton} from "@/components/MyGroup/DropDownCloseButton";
import {Heart2Button} from "@/components/MyGroup/Heart2Button";
import Post from "@/components/Groups/Post";
import {BiCaretLeft} from "react-icons/bi";
import {BiCaretRight} from "react-icons/bi";
import MyGroupNavBar from "@/components/MyGroup/MyGroupNavBar";

const NoticePage = () => {
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
                    <Heart2Button/>
                    <div className="!flex-[0_0_auto]">
                        <DropdownCloseButton text="모집 중"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-[5px] relative">
                <MyGroupNavBar/>
                <div className="flex flex-col items-center gap-[10px] relative flex-1 self-stretch w-full grow">
                    <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                        <div className="flex items-center justify-between p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative flex-[0_0_auto]" />
                            <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
                                <BiCaretLeft className="!relative !w-[24px] !h-[24px]" />
                                <p className="text-transparent text-[24px] relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium tracking-[0] leading-[24px] whitespace-nowrap">
                                    <span className="text-black">1 </span>
                                    <span className="text-[#999999]">| 2 | 3 | 4 | 5 | ...</span>
                                </p>
                                <BiCaretRight className="!relative !w-[24px] !h-[24px]" />
                            </div>
                            <button className="inline-flex flex-col items-center justify-center gap-[10px] px-[10px] py-[5px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden all-[unset] box-border">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    글쓰기
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default NoticePage;

