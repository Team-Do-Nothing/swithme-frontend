'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { updateMemberInfo } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const DataRow = ({ title, value }: { title: string, value: string }) => {
  return (
    <>
      <div className="flex-grow-0 flex-shrink-0 font-semibold text-center text-black border-r-2 border-text-300 text-xl">
        {title}
      </div>
      <div className="flex-grow-0 flex-shrink-0 font-semibold text-left text-black text-xl">
        {value}
      </div>
    </>
  )
}

const UserData = () => {
  const member = useAppSelector((state) => state.auth.data);
  const dispatch = useAppDispatch();

  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [phone, setPhone] = useState<string>(member.phone || "");
  const [introduce, setIntroduce] = useState<string>(member.introduce || "");

  const handleUpdate = () => {
    const data = {
      memberId : member.memberId,
      phone,
      introduce,
    };

    dispatch(updateMemberInfo(data)).then(_=>{
      setIsUpdate(false);
    });
  }

  return (
    <div className="w-full h-full flex flex-col rounded-xl border-2 border-primary-100">
      <div className="grid grid-cols-[150px,1fr] gap-y-5 justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 p-2.5">
          <FaUserCircle className="text-8xl" />
        </div>
        <div className="h-full flex items-center flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-black">
          {member.nickname}
        </div>
        <DataRow title="E-mail" value={member.email} />
        <DataRow title="성별" value={member.gender === 'M' ? '남성' : '여성'} />
        <DataRow title="생년월일" value={member.birthdate || ""} />
        {isUpdate ? (
          <>
            <div className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black border-r-2 border-text-300">
              연락처
            </div>
            <Input className="w-full text-xl font-semibold" value={phone} onChange={(e)=>{setPhone(e.currentTarget.value)}}/>
            <div className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-center text-black border-r-2 border-text-300">
              자기소개
            </div>
            <textarea className="rounded-xl border-2 border-primary-100 px-2 py-1 text-xl font-semibold" value={introduce} onChange={(e)=>{setIntroduce(e.target.value)}}/>
          </>
        ) : (
          <>
            <DataRow title="연락처" value={member.phone || ""} />
            <DataRow title="자기소개" value={member.introduce || ""} />
          </>
        )}
      </div >
      <section className="flex py-2 gap-2 justify-center items-center">
        {isUpdate ?
          <>
            <Button theme="300" onClick={() => { setIsUpdate(false) }}>수정 취소</Button>
            <Button theme="100" onClick={() => { handleUpdate() }}>수정 완료</Button>
          </>
          : <Button theme="200" onClick={() => { setIsUpdate(true) }}>회원정보 수정</Button>}
      </section>
    </div >
  )
}

const UserInfoPage = () => {

  const auth = useAppSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    const status = auth.status;
    if (status !== "login") router.push("/");
  }, [])

  return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow overflow-hidden gap-2.5 p-2.5">
      <UserData />
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
      <UserInfoPage />
    </div>
  )
}

export default MyPage;