import React from 'react';

const MyGroupNavBar = () => {
    return (
        <div className="flex items-start justify-center relative self-stretch w-full flex-[0_0_auto] rounded-[24px] overflow-hidden border-[3px] border-solid border-variable-collection-primary">
            <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[15px] relative flex-1 grow z-[4] bg-variable-collection-primary border-b [border-bottom-style:solid] border-variable-collection-secondary">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    공지 사항
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[15px] relative flex-1 grow z-[3] border-b [border-bottom-style:solid] border-variable-collection-secondary">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-variable-collection-text-1 text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    일정
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[15px] relative flex-1 grow z-[2] border-b [border-bottom-style:solid] border-variable-collection-secondary">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    게시판
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[15px] relative flex-1 grow z-[1] border-b [border-bottom-style:solid] border-variable-collection-secondary">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    챌린지
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] px-[30px] py-[15px] relative flex-1 grow z-0 border-b [border-bottom-style:solid] border-variable-collection-secondary">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    멤버
                </div>
            </div>
        </div>
    );
};
export default MyGroupNavBar;
