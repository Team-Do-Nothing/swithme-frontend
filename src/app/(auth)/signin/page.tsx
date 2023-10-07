'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { FormEventHandler } from "react";

const SignIn = () => {

  const handleSubmit : FormEventHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-full max-w-5xl h-full min-h-full overflow-hidden px-2.5 py-5">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden p-5 rounded-3xl border-2 border-primary-100">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#999]">
          <h1 className="text-2xl font-semibold w-full text-start"> Study With Me 로그인 </h1>
          <div className="w-full flex justify-center items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
              <form onSubmit={handleSubmit} className="flex justify-between items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 w-full">
                <div className="flex flex-col w-full h-fit gap-2.5">
                  <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 w-full">
                    <label htmlFor="id" className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[50px] relative overflow-hidden gap-2.5 py-2.5 text-[22px] font-semibold">
                      ID
                    </label>
                    <Input id="id" name="id" className="w-full" />
                  </div>
                  <div className="flex justify-center items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 w-full">
                    <label htmlFor="id" className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[50px] relative overflow-hidden gap-2.5 py-2.5 text-[22px] font-semibold">
                      PW
                    </label>
                    <Input id="pw" name="pw" type="password" className="w-full" />
                  </div>
                </div>
                <Button size="lg">로그인</Button>
              </form>
              <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#999]">
                    비밀번호을 잊으셨나요?
                  </p>
                  <Button>비밀번호 찾기</Button>
                </div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
                  <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#999]">
                    계정이 없으신가요?
                  </p>
                  <Button>회원가입</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-2xl font-semibold text-left text-black">
              소셜 로그인
            </p>
          </div>
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
            <div onClick={()=>{fetch("/signin/social/api").then(res=>res.json()).then(data=>{window.location.href=data.url})}} className="cursor-pointer">
              카카오로 로그인
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;