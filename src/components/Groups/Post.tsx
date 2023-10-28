import React from 'react'

import {BiCommentDetail} from "react-icons/bi";
import {BiHeart} from "react-icons/bi";

const Post = () => {
    return (
        <div className="flex flex-col items-start p-[10px] relative border-b [border-bottom-style:solid] border-[#999999] w-full">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex gap-[10px] px-[10px] py-[5px] items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col justify-center p-[10px] bg-variable-collection-primary rounded-[20px] overflow-hidden items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            모집 중
                        </div>
                    </div>
                    <p className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                        리액트 같이 공부하실 분 모십니다.
                    </p>
                </div>
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden">
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden">
                        <div className="!flex-[0_0_auto]">
                            <div className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative bg-[#58c179] rounded-[20px] overflow-hidden">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                    대구청량리동
                                </div>
                            </div>
                        </div>
                        <div className="!flex-[0_0_auto]">
                            <div className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative bg-[#86c158] rounded-[20px] overflow-hidden">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                    개발 - 프론트엔드
                                </div>
                            </div>
                        </div>
                        <div className="!flex-[0_0_auto]">
                            <div className="inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative bg-[#d4c261] rounded-[20px] overflow-hidden">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                                    50명
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] self-stretch w-full items-center relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    [개발 스터디 모집 내용 예시] 스터디 주제: 리액트를 배워나가면서 서로 지식을 공유하며 모르는 부분을 ...
                </p>
            </div>
            <div className="flex justify-between self-stretch w-full items-center relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        작성자
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        seoku_zin
                    </div>
                </div>
                <div className="inline-flex items-center gap-[10px] px-[9px] py-0 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[5px] px-0 py-[5px] relative flex-[0_0_auto]">
                        <BiHeart className="!relative !w-[20px] !h-[20px]" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            0
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[5px] px-0 py-[5px] relative flex-[0_0_auto]">
                        <BiCommentDetail className="!relative !w-[20px] !h-[20px]" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post
