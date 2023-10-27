import React from "react";

interface BannerProps {
    type: "degree" | "age" | "sex";
    text: string;
}

export const Banner: React.FC<BannerProps> = ({ type, text }) => {
    let colorClass = "";

    if (type === "degree") {
        colorClass = "#86c158";
    } else if (type === "age") {
        colorClass = "#58c179";
    } else if (type === "sex") {
        colorClass = "#58c179";
    }

    return (
        <div className={`inline-flex flex-col items-center gap-[10px] px-[10px] py-[5px] relative rounded-[20px] overflow-hidden bg-[${colorClass}]`}>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                {text}
            </div>
        </div>
    );
};
