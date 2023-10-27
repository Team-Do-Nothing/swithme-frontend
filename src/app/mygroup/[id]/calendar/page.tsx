import React from 'react';
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import {BiCaretLeft} from "react-icons/bi";
import {BiCaretRight} from "react-icons/bi";
import {BiPlus} from "react-icons/bi";

const CalendarPage = () => {
    const monthDays = Array.from({ length: 30 }, (_, i) => i + 1); // 30일까지 있는 달 예시
    const startDay = new Date(2023, 8, 1).getDay(); // 9월의 첫 날이 무슨 요일인지 (0: 일요일, 6: 토요일)

    const paddedDays = [
        ...Array(startDay).fill(null), // 첫 주의 빈 칸 삽입
        ...monthDays,
        ...Array(6 - (startDay + monthDays.length - 1) % 7).fill(null), // 마지막 주의 빈 칸 삽입
    ];

    const weeks = [];
    for (let i = 0; i < paddedDays.length; i += 7) {
        weeks.push(paddedDays.slice(i, i + 7));
    }

    return (
        <>
            <MyGroupHeader />
            <div className="flex items-start justify-center gap-[10px] px-0 py-[10px] relative">
                <div className="flex flex-col items-start relative flex-1 self-stretch grow">
                    <div className="flex flex-col items-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="flex flex-col items-center justify-center relative self-stretch w-full flex-[0_0_auto]">
                            <div className="inline-flex items-center justify-center gap-[10px] px-0 py-[10px] relative flex-[0_0_auto]">
                                <BiCaretLeft className="!relative !w-[24px] !h-[24px]" />
                                <div className="w-fit [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[24px] whitespace-nowrap relative mt-[-1.00px] tracking-[0] leading-[24px]">
                                    9월
                                </div>
                                <BiCaretRight className="!relative !w-[24px] !h-[24px]" />
                            </div>
                            <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] bg-[#6b6c6d] overflow-hidden">
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#ff7474] text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        SUN
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        MON
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        TUS
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        WED
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        THU
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        FRI
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center px-[10px] py-[5px] relative flex-1 grow">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        SAT
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                            {weeks.map((week, weekIndex) => (
                                <div key={weekIndex} className="flex items-center relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
                                    {week.map((day, dayIndex) => (
                                        <div key={dayIndex} className={`flex flex-col h-[100px] items-start gap-[10px] p-[10px] relative flex-1 grow border border-solid border-[#6b6c6d]`}>
                                            {day !== null && (
                                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
                                                    {day}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-[200px] items-center relative self-stretch rounded-[20px] overflow-hidden border border-solid border-variable-collection-primary">
                    <div className="flex flex-col items-end gap-[10px] px-[10px] py-[5px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-variable-collection-primary">
                        <BiPlus className="!relative !w-[24px] !h-[24px]" />
                    </div>
                    <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#58c179]">
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Front-End Study
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[15px] relative mt-[-1.00px] tracking-[0] leading-[24px]">
                                아침마다 코테공부
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#58c179]">
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Front-End Study
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[15px] tracking-[0] leading-[24px]">
                                React 공부를 해보자
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#58c179]">
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Front-End Study
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[15px] tracking-[0] leading-[24px]">
                                HTML, CSS3가 밥 먹여주...
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#58c179]">
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Back-End Study
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="self-stretch [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[15px] relative mt-[-1.00px] tracking-[0] leading-[24px]">
                                저녁마다 코테공부
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#58c179]">
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Back-End Study
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[15px] tracking-[0] leading-[24px]">
                                가을에 하는 Spring Boot
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#58c179]">
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
                                Back-End Study
                            </div>
                        </div>
                        <div className="flex flex-col items-start justify-center px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                            <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#6b6c6d] text-[15px] tracking-[0] leading-[24px]">
                                JWT는 뭐람
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default CalendarPage;
