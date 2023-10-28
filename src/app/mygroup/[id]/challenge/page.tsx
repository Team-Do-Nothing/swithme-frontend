import React from 'react'
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import {MdNavigateNext} from "react-icons/md";
import {BiCaretLeft} from "react-icons/bi";
import {BiCaretRight} from "react-icons/bi";

const ChallengePage = () => {
    return (
        <>
            <MyGroupHeader />
            <div className="flex flex-col items-start relative">
                <div className="flex items-start justify-between p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-variable-collection-text-2 text-[20px] relative w-fit mt-[-1.00px] tracking-[0] leading-[24px] whitespace-nowrap">
                        챌린지
                    </div>
                    <button className="inline-flex flex-col items-center justify-center gap-[10px] px-[10px] py-[5px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden all-[unset] box-border">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                            button
                        </div>
                    </button>
                </div>
                <div className="flex flex-col items-center gap-[10px] p-[10px] relative flex-1 self-stretch w-full grow">
                    <div className="flex flex-col items-start p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-variable-collection-secondary rounded-[12px] overflow-hidden">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    매일매일 코테문제 풀기 챌린지
                                </div>
                                <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                    Daily
                                </div>
                            </div>
                            <MdNavigateNext className="!relative !w-[24px] !h-[24px]" />
                        </div>
                    </div>
                    <div className="flex flex-col items-start p-[20px] relative self-stretch w-full flex-[0_0_auto] bg-variable-collection-primary rounded-[12px] overflow-hidden">
                        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    매일매일 코테문제 풀기 챌린지
                                </div>
                                <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                    Special
                                </div>
                            </div>
                            <MdNavigateNext className="!relative !w-[24px] !h-[24px]" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
                        <BiCaretLeft className="!relative !w-[24px] !h-[24px]" />
                        <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-transparent text-[24px] relative w-fit mt-[-1.00px] tracking-[0] leading-[24px] whitespace-nowrap">
                            <span className="text-black">1 </span>
                            <span className="text-[#999999]">| 2 | 3 | 4 | 5 | ...</span>
                        </p>
                        <BiCaretRight className="!relative !w-[24px] !h-[24px]" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChallengePage
