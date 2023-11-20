import React from 'react';


const CardFilter = () => {
    return (
        <div className="flex items-center relative border-b-2 [border-bottom-style:solid] border-[#999999]">
            <div className="inline-flex flex-col items-center px-[10px] py-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-SemiBold'Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    전체
                </div>
            </div>
            <div className="inline-flex flex-col items-center px-[10px] py-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-SemiBold'Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    모집 중
                </div>
            </div>
            <div className="inline-flex flex-col items-center px-[10px] py-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-SemiBold'Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                    모집 완료
                </div>
            </div>
        </div>
    )
}
export default CardFilter;