import Button from "../Button";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Member } from "@/redux/interface";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { Banner } from "../MyGroup/Banner";
import Modal from "./Modal";

const MemberCard = ({ member }: { member: Member }) => {
  const ageGroup = useMemo(() => {
    const birthdate = new Date(member.birthdate!);
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
  }, [member.birthdate]);

  return (
    <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-5 py-[15px] rounded-3xl border border-[#58c179]">
      <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-2.5">
        <p className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-left text-black">
          {member.name}
        </p>
        <Banner type="degree" text={`${member.temperature}`} />
        <Banner type="age" text={ageGroup} />
        <Banner type="sex" text={member.gender!} />
      </div>
      <BsThreeDotsVertical className="text-2xl" />
    </div>
  );
};

const InviteMemberModal = () => {
  const member = useAppSelector((state) => state.auth.data);
  const study = useAppSelector((state) => state.study.data);

  const [applyList, setApplyLIst] = useState<Member[]>([]);

  useEffect(() => {
    const getApplyList = async () => {
      if (member.memberId === study.memberId) {
        setApplyLIst(
          (await axios.get(`/api/mygroup/member?studyId=${study.studyId}`)).data
        );
      }
    };

    getApplyList();
  }, [member.memberId, study.studyId, study.memberId]);

  return (
    <Modal title="스터디 모집 공고 URL">
      <div className="flex w-full justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5">
        <div className="flex flex-col justify-center items-start flex-grow relative overflow-hidden gap-2.5 p-2.5 rounded-xl border-2 border-[#86c158] text-xl font-semibold text-left">
          http://localhost:3000/groups/123456
        </div>
        <Button>Copy</Button>
      </div>
      {member.memberId === study.memberId && (
        <>
          {applyList.map((el, idx) => (
            <MemberCard key={idx} member={el} />
          ))}
        </>
      )}
    </Modal>
  );
};

export default InviteMemberModal;
