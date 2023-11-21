import React, { useState } from 'react';

const FILTER_OPTIONS = {
    ALL: '전체',
    RECRUITING: '모집 중',
    RECRUITED: '모집 완료',
    COMPLETED: '진행 종료'
};

const COLORS = {
    default: '#bbbbbb',
    selected: '#000000',
    borderColor: '#999999'
};

const MyGroupCardFilter: React.FC = () => {
    const [selected, setSelected] = useState<string>(FILTER_OPTIONS.ALL);

    const handleClick = (option: string) => {
        setSelected(option);
    };

    const isSelected = (option: string) => {
        return selected === option ? COLORS.selected : COLORS.default;
    };

    return (
        <div className={`flex items-center relative border-b-2 [border-bottom-style:solid] border-[${COLORS.borderColor}]`}>
            {Object.entries(FILTER_OPTIONS).map(([key, value]) => (
                <button key={key}
                        type="button"
                        className={`inline-flex flex-col items-center px-[10px] py-[5px] relative flex-[0_0_auto]`}
                        onClick={() => handleClick(value)}
                        style={{ color: isSelected(value) }}>
                    <div className={`relative w-fit mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[22px] tracking-[0] leading-[24px] whitespace-nowrap hover:text-black`}>
                        {value}
                    </div>
                </button>
            ))}
        </div>
    );
};

export default MyGroupCardFilter;
