"use client";

import React, { useEffect, useState } from "react";
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import { MdNavigateNext } from "react-icons/md";
import { BiCaretLeft } from "react-icons/bi";
import { BiCaretRight } from "react-icons/bi";
import { Challenge } from "@/redux/interface";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import axios from "axios";
import { setModal } from "@/redux/slices/modalSlice";

const ChallengeButton = ({
  studyId,
  data,
}: {
  studyId: number;
  data: Challenge;
}) => {
  const getTheme = () => {
    switch (data.challengeState) {
      case "DAILY":
        return "bg-primary-200";
      case "SPECIAL":
        return "bg-primary-100";
      default:
        return "bg-primary-200 ";
    }
  };
  return (
    <Link
      href={`/mygroup/${studyId}/challenge/${data.challengeId}`}
      className={`flex flex-col items-start p-[20px] relative self-stretch w-full  rounded-[12px] overflow-hidden ${getTheme()}`}
    >
      <div className="flex items-center justify-between relative self-stretch w-full">
        <div className="inline-flex items-center gap-[20px] relative">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[22px] tracking-[0] leading-[24px] whitespace-nowrap">
            {data.title}
          </div>
          <div className="relative w-fit [font-family:'Inter-Bold',Helvetica] font-bold text-white text-[18px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
            {data.challengeState}
          </div>
        </div>
        <MdNavigateNext className="!relative !w-[24px] !h-[24px]" />
      </div>
    </Link>
  );
};

const ChallengePage = () => {
  const [challengeList, setChallengeList] = useState<Challenge[]>([]);
  const study = useAppSelector((state) => state.study.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getChallengeList = async () => {
      const data = (
        await axios.get(`/api/mygroup/challenge?studyId=${study.studyId}`)
      ).data;
      setChallengeList(data);
    };

    getChallengeList();
  }, [study.studyId]);
  return (
    <>
      <MyGroupHeader />
      <div className="flex flex-col items-start relative">
        <div className="flex items-start justify-between p-[10px] relative self-stretch w-full">
          <div className="[font-family:'Inter-Bold',Helvetica] font-bold text-variable-collection-text-2 text-[20px] relative w-fit mt-[-1.00px] tracking-[0] leading-[24px] whitespace-nowrap">
            챌린지
          </div>
          <button
            onClick={() => {
              dispatch(setModal("createChallenge"));
            }}
            className="inline-flex flex-col items-center justify-center gap-[10px] px-[10px] py-[5px] relative bg-variable-collection-primary rounded-[12px] overflow-hidden all-[unset] box-border"
          >
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[14px] tracking-[0] leading-[24px] whitespace-nowrap">
              챌린지 추가
            </div>
          </button>
        </div>
        <div className="flex flex-col items-center gap-[10px] p-[10px] relative flex-1 self-stretch w-full grow">
          {challengeList.map((challenge, key) => (
            <ChallengeButton
              key={key}
              studyId={study.studyId}
              data={challenge}
            />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-[10px] relative flex-[0_0_auto]">
            <BiCaretLeft className="!relative !w-[24px] !h-[24px]" />
            <p className="[font-family:'Inter-Medium',Helvetica] font-medium text-transparent text-[24px] relative w-fit mt-[-1.00px] tracking-[0] leading-[24px] whitespace-nowrap">
              <span className="text-black">1 </span>
              <span className="text-[#999999]">| 2 | 3 | 4 | 5 | ...</span>
            </p>
            <BiCaretRight className="!relative !w-[24px] !h-[24px]" />
          </div>
        </div>
      </div>
    </>
  );
};
export default ChallengePage;
