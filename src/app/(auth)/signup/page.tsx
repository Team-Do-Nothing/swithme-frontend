'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { FormEventHandler } from "react";

const SignUp = () => {

  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-full overflow-hidden px-2.5 py-5">
      <div className="w-full max-w-5xl flex flex-col items-center flex-grow-0 flex-shrink-0 overflow-hidden py-5 rounded-3xl border-2 border-primary-100">
        <span className="w-full flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5 text-2xl font-semibold text-left">
          S-With Me 회원가입
        </span>
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden py-2.5 gap-5">
          <div
            className="w-full grid grid-cols-2 flex-grow-0 flex-shrink-0 overflow-hidden py-2.5 px-5 gap-5 border-primary-100 border-b-2"
            style={{
              gridTemplateColumns: "150px 1fr",
            }}
          >
            <label htmlFor="email" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 text-[22px] font-semibold">
              아이디(이메일)
            </label>
            <div className="w-full flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-2.5 py-[5px] h-fit">
              <Input id="email" name="email" className="w-full" />
              <div className="flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 px-[30px] py-5 rounded-xl bg-primary-100">
                <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-white">
                  중복 확인
                </p>
              </div>
            </div>
            <label htmlFor="pw" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              비밀번호
            </label>
            <Input id="pw" name="pw" type="password" className="w-full" />
            <label htmlFor="pw" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              비밀번호 확인
            </label>
            <Input id="pwcheck" name="pwcheck" type="password" className="w-full" />
            <label htmlFor="pw" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              이름
            </label>
            <Input id="name" name="name" type="password" className="w-full" />
            <label htmlFor="pw" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              생년월일
            </label>
            <Input id="pw" name="pw" type="password" className="w-full" />
            <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              성별
            </div>
            <div className="flex justify-start items-center gap-5">
              <Input id="M" name="gender" type="radio" value="M" className="checked:border-none checked:outline-none" />
              <label htmlFor="M" className="text-xl font-semibold">남</label>
              <Input id="F" name="gender" type="radio" value="F" className="checked:border-none checked:outline-none" />
              <label htmlFor="F" className="text-xl font-semibold">여</label>
            </div>
            <label htmlFor="phone" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              전화번호
            </label>
            <Input id="phone" name="phone" className="w-full" />
            <label htmlFor="pw" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
              자기소개
            </label>
            <textarea className="w-full flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-auto px-2.5 py-1 border-primary-100 border-2 rounded-xl"></textarea>
          </div>
          <Button size="lg">회원가입</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;