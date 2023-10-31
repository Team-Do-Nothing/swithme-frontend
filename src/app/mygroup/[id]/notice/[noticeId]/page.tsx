import React from 'react';

import {RiHeart2Line} from "react-icons/ri";
import {BiUserCircle, BiChevronRight, BiSubdirectoryRight, BiStar, BiArrowBack} from "react-icons/bi";
import {Banner} from "@/components/MyGroup/Banner";

const NoticeContent = () => {
    return (
        <div className="flex flex-col w-full items-start justify-center relative">
            <button className="inline-flex items-center p-[10px] relative">
                <BiArrowBack className="relative flex-[0_0_auto] mb-[-8.00px] ml-[-4.00px] mr-[-4.00px]"/>
            </button>
            <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto] border-b-2 [border-bottom-style:solid] border-[#999999]">
                <div className="flex flex-col h-[84px] justify-center items-start gap-[15px] p-[10px] relative flex-1 grow">
                    <p className="w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[32px] leading-[24px] relative mt-[-1.00px] tracking-[0] whitespace-nowrap">
                        리액트 같이 공부하실 분 모십니다.
                    </p>
                </div>
                <div className="inline-flex items-center justify-center gap-[10px] p-[10px] relative self-stretch flex-[0_0_auto]">
                    <div className="inline-flex flex-col items-center justify-center gap-[10px] p-[20px] relative flex-[0_0_auto] rounded-[20px] overflow-hidden border border-solid border-[#999999] shadow-[0px_4px_4px_#00000040]">
                        <RiHeart2Line className="!relative !w-[24px] !h-[24px]" />
                    </div>
                    <button className="inline-flex flex-col items-center justify-center gap-[10px] px-[30px] py-[20px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden all-[unset] box-border">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                            참여하기
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
                <div className="flex flex-col items-start justify-center gap-[10px] px-[10px] py-[30px] relative self-stretch w-full flex-[0_0_auto]">
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px]">
            <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px]">
              [개발 스터디 모집 내용 예시]
              <br />
              스터디 주제 : 리액트를 배워나가면서 서로 지식을 공유하며 모르는 부분을 채워나갔으면합니다.
              <br />
              스터디 목표 : 리액트를 실무에 적용할만큼 다루기
              <br />
              예상 스터디 일정(횟수) : 정해진 기한을 두지않고 자유롭게 스터디하는 형식입니다.
              <br />
              예상 커리큘럼 간략히 : 끊어둔 유료인강(유데미) 및 인프런 무료인강 제공가능 / 개인껄로 공부해도 무관
              <br />
              예상 모집인원 : 2~3??
              <br />
              스터디 소개와 개설 이유 : 프런트쪽은 무지해서 같이 배우면 좀 더 도움되고 의지가 생길 것 같습니다.
              <br />
              스터디 관련 주의사항 : 코딩을 전혀 모르셔도되고 분량을 정해두는 것이 아닌 자유로운 스터디라 부담없이
              오시면됩니다.
              <br />
              스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.) : smileb22
            </span>
                        <a href="mailto:xoxoxmin1268@naver.com" rel="noopener noreferrer" target="_blank">
                            <span className="underline">@naver.com</span>
                        </a>
                        <span className="[font-family:'Inter-Medium',Helvetica] font-medium text-black text-[16px] tracking-[0] leading-[24px]">
              {" "}
                            이메일주시면됩니다.
            </span>
                    </p>
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
                                <Banner type="degree" text="온도"/>
                                <Banner type="age" text="연련층"/>
                                <Banner type="sex" text="성별"/>
                            </div>
                            <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                                <p className="w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] leading-[24px] relative mt-[-1.00px] tracking-[0] whitespace-nowrap">
                                    자기소개글 들어갈 자리. 하나! 둘! 셋! 야!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-start gap-[10px] p-[10px] relative flex-1 self-stretch w-full grow">
                    <div className="flex items-start gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            댓글
                        </div>
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#30b900] text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                            3
                        </div>
                    </div>
                    <div className="flex items-start gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] rounded-[20px] overflow-hidden border-2 border-solid border-[#d9d9d9]">
                        <div className="flex flex-col items-start gap-[10px] p-[10px] relative flex-1 self-stretch grow">
                            <div className="w-[798px] h-[24px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#00000040] text-[16px] leading-[24px] relative mt-[-1.00px] tracking-[0] whitespace-nowrap">
                                댓글을 입력해보세요!
                            </div>
                        </div>
                        <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
                            <div className="inline-flex items-start gap-[10px] p-[5px] relative flex-[0_0_auto] bg-[#58c179] rounded-[12px] overflow-hidden">
                                <BiChevronRight className="!relative !w-[36px] !h-[36px]" />
                            </div>
                            <div className="inline-flex flex-col items-center justify-center gap-[10px] px-[10px] py-[5px] relative bg-white rounded-[12px] overflow-hidden border-2 border-solid border-variable-collection-primary">
                                <div className="relative w-fit mt-[-2.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-variable-collection-primary text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    비밀 댓글
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-[10px] relative flex-1 self-stretch w-full grow overflow-hidden">
                        <div className="flex flex-col items-start p-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#999999]">
                            <div className="flex items-start justify-between px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    UBiiiii
                                </div>
                                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    2023.03.02
                                </div>
                            </div>
                            <div className="flex items-start gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                                    스터디 가입할까 하는데 시간은 언제쯤으로 생각하고 계시나연
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start p-[10px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-[#999999]">
                            <div className="inline-flex flex-col items-start gap-[10px] p-[10px] relative self-stretch flex-[0_0_auto]">
                                <BiSubdirectoryRight className="!relative !w-[24px] !h-[24px]" />
                            </div>
                            <div className="flex flex-col items-start gap-[10px] p-[10px] relative flex-1 grow">
                                <div className="flex items-start justify-between px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                                    <div className="flex w-[124px] items-start gap-[5px] px-[10px] py-0 relative">
                                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[15px] tracking-[0] leading-[24px] whitespace-nowrap">
                                            seokuzin
                                        </div>
                                        <BiStar className="!relative !w-[24px] !h-[24px]" />
                                    </div>
                                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#999999] text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        2023.03.03
                                    </div>
                                </div>
                                <div className="flex items-start gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
                                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[16px] tracking-[0] leading-[24px] whitespace-nowrap">
                                        다 모이면 그 때 정할 껍니당
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NoticeContent;
