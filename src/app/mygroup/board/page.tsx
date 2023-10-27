import React from 'react';
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import Post from "@/components/Groups/Post";
import {BiCaretLeft, BiCaretRight} from "react-icons/bi";

const BoardPage = () => {
    return (
        <>
            <MyGroupHeader />
            <div className="flex flex-col items-center gap-[5px] relative">
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
export default BoardPage;
