import React from 'react';

import {BiCommentDetail, BiHeart} from "react-icons/bi";

interface NoticeCardProps {
    params: {
        title: string;
        content: string;
        writer: string;
        likes: number;
        comments: number;
    }
}

const NoticeCard = ({params:{title, content, writer, likes, comments}}:NoticeCardProps) => {
    return (
        <div className="flex flex-col items-start p-[10px] relative border-b [border-bottom-style:solid] border-[#999999] w-full">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex gap-[10px] px-[5px] py-[20px] items-center relative flex-[0_0_auto]">
                    <p className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                        {title}
                    </p>
                </div>
            </div>
            <div className="flex gap-[10px] self-stretch w-full items-center relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    {content}
                </p>
            </div>
            <div className="flex justify-between self-stretch w-full items-center relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        작성자
                    </div>
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        {writer}
                    </div>
                </div>
                <div className="inline-flex items-center gap-[10px] px-[9px] py-0 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[5px] px-0 py-[5px] relative flex-[0_0_auto]">
                        <BiHeart className="!relative !w-[20px] !h-[20px]" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            {likes}
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[5px] px-0 py-[5px] relative flex-[0_0_auto]">
                        <BiCommentDetail className="!relative !w-[20px] !h-[20px]" />
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            {comments}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NoticeCard;
