'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { Member } from "@/redux/interface";
import { signIn } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FormEventHandler, useEffect } from "react";
import { BiSolidMessageRounded } from "react-icons/bi"
import { CgSpinner } from "react-icons/cg";

const SignIn = () => {

  const dispatch = useAppDispatch();
  const auth = useAppSelector(state=>state.auth);

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget as HTMLFormElement);
    dispatch(signIn(data))
    .then(data=>{
      if((data.payload as Member).name==="")  alert("일치하는 회원정보가 존재하지 않습니다.\n아이디와 비밀번호를 확인해주세요.");
    });
  }

  useEffect(()=>{
    if(auth.status==="login") window.location.href = "/";
  },[auth])

  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-full max-w-5xl h-full min-h-full overflow-hidden px-2.5 py-5">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden p-5 rounded-3xl border-2 border-primary-100">
        <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 border-t-0 border-r-0 border-b border-l-0 border-[#999]">
          <h1 className="text-2xl font-semibold w-full text-start" onClick={()=>{console.log(auth)}}> Study With Me 로그인 </h1>
          <div className="w-full flex justify-center items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
              <form onSubmit={handleSubmit} className="flex justify-between items-center flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5 w-full">
                <div className="grid grid-cols-[80px,1fr] w-full h-fit gap-2.5">
                  <label htmlFor="email" className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[50px] relative overflow-hidden gap-2.5 py-2.5 text-[22px] font-semibold">
                    ID
                  </label>
                  <Input id="email" name="email" className="w-full" />
                  <label htmlFor="password" className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 w-[50px] relative overflow-hidden gap-2.5 py-2.5 text-[22px] font-semibold">
                    PW
                  </label>
                  <Input id="password" name="password" type="password" className="w-full" />
                </div>
                {auth.status==="loading"?<Button size="lg" disabled><CgSpinner className="animate-spin text-2xl" /></Button>:<Button size="lg">로그인</Button>}
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
            <div onClick={() => { fetch("/signin/social/api").then(res => res.json()).then(data => { window.location.href = data.url }) }} className="cursor-pointer bg-[#fee500] text-black flex justify-center items-center rounded-xl px-4 py-3 gap-2.5 text-xl">
              <BiSolidMessageRounded />
              카카오로 로그인
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn;