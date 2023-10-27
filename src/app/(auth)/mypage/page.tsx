'use client'

import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";

const UserDataPage = () => {

  const auth = useAppSelector((state)=>state.auth);
  const member = auth.data;
  const router = useRouter();

  useEffect(()=>{
    const status = auth.status;

    if(status!=="login")  router.push("/");
  }, [])

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2.5 p-2.5">
      <div className="grid grid-cols-[150px,1fr] gap-y-5 justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded-xl border-2 border-[#58c179]">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5">
          <FaUserCircle className="text-8xl" />
        </div>
        <div className="h-full flex items-center flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-black">
          {member.nickname}
        </div>
        <div className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-center text-black border-r-2 border-text-300">
          성별
        </div>
        <div className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-left text-black">
          {member.gender==='M' ? '남성' : '여성'}
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 border-r-2 border-text-300 text-xl font-semibold">
          연락처
        </div>
        <div className="h-full flex justify-start items-center flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-black">
          {member.phone}
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 border-r-2 border-text-300 text-xl font-semibold">
          생년월일
        </div>
        <div className="h-full flex justify-start items-center flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-black">
          {member.birthdate}
        </div>
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 border-r-2 border-text-300 text-xl font-semibold">
          자기소개
        </div>
        <div className="h-full flex justify-start items-center flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-black">
          {member.introduce}
        </div>
      </div>
      <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded-xl border-2 border-primary-100">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5 border-r-2 border-text-300 font-semibold text-left text-black text-xl">
            현재 포인트
          </div>
          <p className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-left text-black">
            100,000 Point
          </p>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2.5 font-semibold text-left text-black text-xl">
          사용 이력 보기
        </div>
      </div>
      <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 rounded-xl border border-error-100">
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2.5 font-semibold text-left text-black text-xl">
          회원정보 수정
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-5 py-2.5 font-semibold text-left text-error-100 text-xl">
          회원 탈퇴
        </div>
      </div>
    </div>
  )
}

const MyPage = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5 py-5">
      <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden border-t-0 border-r-0 border-b-2 border-l-0 border-[#999]">
        <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5 py-[5px] border-t-0 border-r-0 border-b-2 border-l-0 border-black">
            <p className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-left text-black">
              내 정보
            </p>
          </div>
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5 py-[5px]">
            <p className="flex-grow-0 flex-shrink-0 text-[22px] font-semibold text-left text-[#999]">
              내 포인트
            </p>
          </div>
        </div>
      </div>
      <UserDataPage />
    </div>
  )
}

export default MyPage;