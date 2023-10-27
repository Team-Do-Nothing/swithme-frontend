import React from "react";
import { RiHeart2Line } from "react-icons/ri";

export const Heart2Button = () => {
    return (
        <button type="button" className="inline-flex flex-col items-center justify-center gap-[10px] p-[20px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#999999] shadow-[0px_4px_4px_#00000040]">
            <RiHeart2Line className="!relative !w-[24px] !h-[24px]" />
        </button>
    );
};
