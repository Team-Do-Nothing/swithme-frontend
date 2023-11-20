"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import MyGroupHeader from "@/components/MyGroup/MyGroupHeader";
import { BsPersonAdd } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { Banner } from "@/components/MyGroup/Banner";
import axios from "axios";
import { Member } from "@/redux/interface";
import { useAppDispatch } from "@/redux/store";
import { setModal } from "@/redux/slices/modalSlice";

const MemberCard = ({ data }: { data: Member }) => {
  const ageGroup = useMemo(() => {
    const birthdate = new Date(data.birthdate!);
    const today = new Date();
    const gap = new Date(today.getTime() - birthdate.getTime());
    const age = gap.getFullYear() - new Date(0).getFullYear() + 1;
    switch (Math.floor(age / 10)) {
      case 0:
      case 1:
        return "10대";
      case 2:
        return "20대";
      case 3:
        return "30대";
      case 4:
        return "40대";
      case 5:
        return "50대";
      default:
        return "60대 이상";
    }
  }, [data.birthdate]);

  return (
    <div className="flex flex-col items-start justify-center gap-[10px] p-[10px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[24px] overflow-hidden border border-solid border-variable-collection-primary">
      <div className="flex items-center relative self-stretch w-full flex-[0_0_auto]">
        <BiUserCircle className="!relative !w-[76px] !h-[76px]" />
        <div className="flex flex-col items-start gap-[10px] relative flex-1 grow">
          <div className="flex items-start gap-[10px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[24px] whitespace-nowrap">
                {data.name}
              </div>
            </div>
            <Banner type="degree" text={`${data.temperature}`} />
            <Banner type="age" text={ageGroup} />
            <Banner type="sex" text={data.gender!} />
          </div>
          <div className="inline-flex flex-col items-start gap-[10px] px-[10px] py-0 relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-black text-[20px] tracking-[0] leading-[24px] whitespace-nowrap">
              {data.introduce}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberPage = ({ params }: { params: { id: string } }) => {
  const studyId = params.id;
  const [memberList, setMemberList] = useState<Member[]>([]);
  const dispatch = useAppDispatch();

  const getMember = useCallback(async () => {
    const data = (await axios.post("/api/mygroup/member", { studyId })).data;
    setMemberList(data);
  }, [studyId]);

  useEffect(() => {
    getMember();
  }, [getMember]);

  return (
    <>
      <MyGroupHeader />
      <div className="flex flex-col items-center gap-[10px] px-[15px] py-[10px] relative">
        <div className="flex items-center justify-end gap-[10px] px-[10px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <div
            onClick={() => {
              dispatch(setModal("inviteMember"));
            }}
            className="inline-flex flex-col items-center justify-center gap-[10px] p-[10px] relative flex-[0_0_auto] bg-variable-collection-primary rounded-[12px] overflow-hidden cursor-pointer"
          >
            <BsPersonAdd className="!relative !w-[24px] !h-[24px]" />
          </div>
        </div>
        {memberList.map((el) => (
          <MemberCard key={el.memberId} data={el} />
        ))}
      </div>
    </>
  );
};
export default MemberPage;
