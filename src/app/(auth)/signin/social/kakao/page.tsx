'use client'

import Button from "@/components/Button";
import { kakaoLogin } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

const KakaoLogin = () => {

  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const member = useAppSelector(state => state.auth);
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    dispatch(kakaoLogin(code as string));
  }, [])

  useEffect(() => {
    if(member.status==="login") router.push("/")
  }, [member.status])

  return (
    <div className="w-full h-full flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 max-w-5xl overflow-hidden px-2.5 py-5">
      <div className="h-96 flex flex-col justify-center items-center flex-grow overflow-hidden gap-2.5 p-5 rounded-3xl border-2 border-primary-100">
        {member.status === "loading"
          ?
          <CgSpinner className="animate-spin text-9xl text-text-200"/>
          :
          <>
            <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 border-t-0 border-r-0 border-b border-l-0 border-primary-100">
              <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
                <span className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
                  카카오 계정과 연동된 계정이 없습니다
                </span>
                <br />
                <span className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
                  회원가입을 진행해주세요!
                </span>
              </p>
              <img
                src="/team_do_nothing.png"
                className="flex-grow-0 flex-shrink-0 w-[200px] h-[200px] object-cover"
              />
            </div>
            <Button onClick={()=>{router.push(`/signup/social/kakao/${member.data.memberId}`)}}>회원가입</Button>
          </>
        }
      </div>
    </div>
  )
}

export default KakaoLogin;