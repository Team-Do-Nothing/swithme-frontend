import PropTypes from "prop-types";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
    text: string;
}

export const DropdownCloseButton = ({ text = "button" }: Props) => {
    return (
        <div className="inline-flex items-center justify-center gap-[10px] px-[15px] py-[20px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                {text}
            </div>
            <BiChevronDown className="!relative !w-[24px] !h-[24px]" />
        </div>
    );
};

DropdownCloseButton.propTypes = {
    text: PropTypes.string,
};
