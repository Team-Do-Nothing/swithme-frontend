"use client";

import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import { Challenge } from "@/redux/interface";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdNavigateNext } from "react-icons/md";

const ChallengeMemberCard = ({
  data,
}: {
  data: { name: string; temperature: number };
}) => {
  return (
    <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-[15px] rounded-xl bg-primary-100">
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">
        {data.name}
      </p>
      <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-white">
        {data.temperature} ℃
      </p>
    </div>
  );
};

const ChallengeDetail = ({
  params,
}: {
  params: { id: string; challengeId: string };
}) => {
  const [data, setData] = useState<Challenge>();
  const memberList = [
    {
      name: "user",
      temperature: 36.5,
    },
    {
      name: "user1",
      temperature: 36.5,
    },
    {
      name: "user2",
      temperature: 37.5,
    },
    {
      name: "user3",
      temperature: 36.5,
    },
  ];

  useEffect(() => {
    const getData = async () => {
      const data: Challenge = await (
        await axios.get(
          `/api/mygroup/challenge?challengeId=${params.challengeId}`
        )
      ).data;
      setData(data);
    };

    getData();
  }, [params.challengeId]);

  return (
    <>
      <MyGroupHeader />
      <div className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-2.5">
        <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden">
          <div className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
            <p className="flex flex-grow-0 flex-shrink-0 text-xl font-bold text-left text-[#999]">
              <Link href={`/mygroup/${params.id}/challenge`}>챌린지</Link>
              <MdNavigateNext className="!relative !w-[24px] !h-[24px]" />
              {data?.title}
            </p>
          </div>
          <div className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden px-2.5">
            <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#58c179]">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 text-[28px] font-bold text-left text-black">
                {data?.title}
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5 py-[5px] rounded-[20px] bg-[#86c158] text-lg font-bold text-center text-white">
                  {data?.challengeState}
                </div>
              </div>
              <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-[#999]">
                {data?.dateCreated}
              </p>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden py-2.5">
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#58c179]">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  목표
                </div>
                <div className="flex flex-col justify-start items-start flex-grow relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  {data?.goal}
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#58c179]">
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  인증 방식
                </div>
                <div className="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  기간 : {data?.startDate} ~ {data?.endDate}
                  <p className="flex-grow-0 flex-shrink-0 text-2xl font-bold text-left text-black">
                    {data?.checkFormat}
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#58c179]">
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  참가 비용
                </div>
                <div className="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  {data?.challengeFee}원
                </div>
              </div>
              <div className="flex justify-start items-center self-stretch flex-grow overflow-hidden p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#58c179]">
                <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 text-2xl font-bold text-left text-black">
                  참여자
                </div>
                <div className="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-2.5 p-2.5">
                  <div className="grid grid-cols-3 flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5">
                    {memberList.map((member, key) => (
                      <ChallengeMemberCard key={key} data={member} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-[15px] rounded-xl bg-[#86c158] text-xl font-semibold text-left text-white">
                챌린지 참여하기
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default ChallengeDetail;
