import React from 'react';
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import {BsPersonAdd} from "react-icons/bs";
import {BiUserCircle} from "react-icons/bi";
import {Banner} from "@/components/MyGroup/Banner";

const MemberPage = () => {
    return (
        <>
            <MyGroupHeader />
            <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative">
                <div className="flex items-center justify-end gap-[10px] px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-variable-collection-primary rounded-[12px] overflow-hidden">
                        <BsPersonAdd className="!relative !w-[24px] !h-[24px]" />
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[24px] overflow-hidden border border-solid border-variable-collection-primary">
                    <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <BiUserCircle className="!relative !w-[76px] !h-[76px]" />
                        <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        user1
                                    </div>
                                </div>
                                <Banner type="degree" text="온도" />
                                <Banner type="age" text="연령층" />
                                <Banner type="sex" text="성별" />
                            </div>
                            <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    자기소개글 들어갈 자리. 하나! 둘! 셋! 야!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[24px] overflow-hidden border border-solid border-variable-collection-primary">
                    <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <BiUserCircle className="!relative !w-[76px] !h-[76px]" />
                        <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        user1
                                    </div>
                                </div>
                                <Banner type="degree" text="온도" />
                                <Banner type="age" text="연령층" />
                                <Banner type="sex" text="성별" />
                            </div>
                            <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    자기소개글 들어갈 자리. 하나! 둘! 셋! 야!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[24px] overflow-hidden border border-solid border-variable-collection-primary">
                    <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <BiUserCircle className="!relative !w-[76px] !h-[76px]" />
                        <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        user1
                                    </div>
                                </div>
                                <Banner type="degree" text="온도" />
                                <Banner type="age" text="연령층" />
                                <Banner type="sex" text="성별" />
                            </div>
                            <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    자기소개글 들어갈 자리. 하나! 둘! 셋! 야!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[24px] overflow-hidden border border-solid border-variable-collection-primary">
                    <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <BiUserCircle className="!relative !w-[76px] !h-[76px]" />
                        <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        user1
                                    </div>
                                </div>
                                <Banner type="degree" text="온도" />
                                <Banner type="age" text="연령층" />
                                <Banner type="sex" text="성별" />
                            </div>
                            <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    자기소개글 들어갈 자리. 하나! 둘! 셋! 야!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[24px] overflow-hidden border border-solid border-variable-collection-primary">
                    <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
                        <BiUserCircle className="!relative !w-[76px] !h-[76px]" />
                        <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
                            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        user1
                                    </div>
                                </div>
                                <Banner type="degree" text="온도" />
                                <Banner type="age" text="연령층" />
                                <Banner type="sex" text="성별" />
                            </div>
                            <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    자기소개글 들어갈 자리. 하나! 둘! 셋! 야!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default MemberPage;
