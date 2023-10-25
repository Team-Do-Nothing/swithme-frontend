'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import RadioButton from "@/components/RadioButton";
import { useState } from "react";

const SocialSignUp = () => {
  const [gender, setGender] = useState<string>("");

  return (
    <div className="w-full h-full flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5 py-5">
      <form className="w-full max-w-4xl flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-5 rounded-3xl border-2 border-primary-100">
        <div className="w-full flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 border-t-0 border-r-0 border-b border-l-0 border-primary-100">
          <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-black">
              S-With Me 회원가입
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden p-2.5">
            <div className="w-full grid grid-cols-[150px,1fr] justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden p-2.5">
              <label htmlFor="name" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-left text-black text-2xl">
                이름
              </label>
              <Input id="name" name="name" />
              <label htmlFor="nickname" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-left text-black text-2xl">
                닉네임
              </label>
              <div className="w-full flex gap-3">
                <Input id="nickname" name="nickname" className="w-full"/>
                <Button>중복 확인</Button>
              </div>
              <label htmlFor="birthdate" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-left text-black text-2xl">
                생년월일
              </label>
              <Input id="birthdate" name="birthdate" type="date" />
              <label htmlFor="name" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-left text-black text-2xl">
                성별
              </label>
              <div className="flex flex-grow-0 flex-shrink-0 gap-2">
                <input type="radio" id="male" name="gender" value="M" className="hidden peer/male"/>
                <label htmlFor="male" className="flex justify-center items-center px-5 py-2 rounded-xl text-xl border-2 border-primary-100 bg-white text-primary-100 peer-checked/male:bg-primary-100 peer-checked/male:text-white">남성</label>
                <input type="radio" id="female" name="gender" value="F" className="hidden peer/female"/>
                <label htmlFor="female" className="flex justify-center items-center px-5 py-2 rounded-xl text-xl border-2 border-primary-100 bg-white text-primary-100 peer-checked/female:bg-primary-100 peer-checked/female:text-white">여성</label>
              </div>
              <label htmlFor="phone" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-left text-black text-2xl">
                전화번호
              </label>
              <Input id="phone" name="phone" />
              <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-left text-black text-2xl">
                자기소개
              </div>
              <textarea id="name" name="name" className="border-2 border-primary-100 rounded-lg h-40 px-4 py-2"/>
            </div>
          </div>
        </div>
        <Button size="md">회원가입</Button>
      </form>
    </div>
  )
}

export default SocialSignUp;