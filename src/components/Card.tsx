import React from 'react';
import {BiCommentDetail, BiHeart} from "react-icons/bi";

interface CardProps {
    params: {
        study_id: string;
        title: string;
        category_name: string;
        number_of_members: number;
        member_name: string;
        study_info: string;
        study_status: number;
        region_name: string;
    },
}

const getStatusLabel = (status: number) => {
    const statusLabels = ["모집 진행중", "모집 완료", "스터디 종료"];
    return statusLabels[status] || "";
};

const getStatusBg = (status: number) => {
    const statusColors = ["bg-green-500", "bg-yellow-500", "bg-gray-500"];
    return statusColors[status] || "";
};

const Card: React.FC<CardProps> = ({
                                       params: {
                                           study_id,
                                           title,
                                           category_name,
                                           number_of_members,
                                           member_name,
                                           study_info,
                                           study_status,
                                           region_name
                                       }
                                   }) => {
    return (
        <div className="flex flex-col items-start p-[10px] relative border-b [border-bottem-style:solid] border-[#999999] hover:bg-gray-200">
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex gap-[10px] px-[10px] py-[5px] items-center relative flex-[0_0_auto]">
                    <div className="inline-flex flex-col justify-center p-[10px] bg-variable-collection-primary rounded-[20px] overflow-hidden items-center relative flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1px] [font-family:'Inter-SemiBold',Helvetica] font-semiblod text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                            모집중
                        </div>
                    </div>
                    <p className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                        {title}
                    </p>
                </div>
                <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden">
                    <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden">
                        <span className="text-center whitespace-nowrap md:text-base bg-blue-500 text-gray-50 rounded-xl p-0.5 md:p-1">{region_name}</span>
                        <span className="text-center whitespace-nowrap md:text-base bg-orange-500 text-gray-50 rounded-xl p-0.5 md:p-1">{category_name}</span>
                        <span className="text-center whitespace-nowrap md:text-base bg-purple-500 text-gray-50 rounded-xl p-0.5 md:p-1">{number_of_members}명</span>
                    </div>
                </div>
            </div>
            <div className="flex gap-[10px] self-stretch w-full items-center relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    {study_info}
                </p>
            </div>
            <div className="flex justify-between self-stretch w-full items-center relative flex-[0_0_auto]">
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        작성자
                    </div>
                    <div className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                        {member_name}
                    </div>
                </div>
                <div className="inline-flex items-center gap-[10px] px-[9px] py-0 relative flex-[0_0_auto]">
                    <div className="inline-flex items-center justify-center gap-[5px] px-0 py-[5px] relative flex-[0_0_auto]">
                        <BiHeart />
                        <div className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            0
                        </div>
                    </div>
                    <div className="inline-flex items-center justify-center gap-[5px] px-0 py-[5px] relative flex-[0_0_auto]">
                        <BiCommentDetail />
                        <div className="relative w-fit mt-[-1px] [font-family:'Inter-Medium',Helvetica] font-medium text-[#999999] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            0
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;