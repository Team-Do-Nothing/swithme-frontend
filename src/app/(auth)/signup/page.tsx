'use client'

import Button from "@/components/Button";
import Input from "@/components/Input";
import { signUp } from "@/redux/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { FormEventHandler, MouseEventHandler, useEffect, useState } from "react";
import { CgSpinner } from "react-icons/cg"

const SignUpForm = () => {
  const [enableEmail, setEnableEmail] = useState<number>(0);
  const [enableNickname, setEnableNickname] = useState<number>(0);
  const [samePassword, setSamePassword] = useState<number>(0);
  const [handleSignup, setHandleSignUp] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    setHandleSignUp(true);

    if (enableEmail !== 1) {
      switch (enableEmail) {
        case 0:
          alert("이메일 중복여부를 확인해주세요.");
          break;
        default:
          alert("사용할 수 없는 이메일입니다.\n이메일 정보를 확인해주세요.");
      }

      document.getElementById("email")?.focus();
      setHandleSignUp(false);
      return;
    }

    if (enableNickname !== 1) {
      switch (enableNickname) {
        case 0:
          alert("닉네임 중복여부를 확인해주세요.");
          break;
        default:
          alert("사용할 수 없는 닉네임입니다.\n닉네임 정보를 확인해주세요.");
      }

      document.getElementById("nickname")?.focus();
      setHandleSignUp(false);
      return;
    }

    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData.get("introduce"))
    dispatch(signUp(formData))
      .then(res => {
        setHandleSignUp(false);
      });
  }

  const checkEmail: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setEnableEmail(0);
    const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    if (!emailRegEx.test(email)) setEnableEmail(3);
    else {
      setEnableEmail(0);
    }
    console.log(email);
    // axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/auth/checkEmail`, {email})
    //   .then(res => {
    //     console.log(res);
    //     setEnableEmail(1);
    //   }).catch(err => {
    //     console.log(err);
    //     setEnableEmail(2);
    //   })
  }

  const checkNickname: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setEnableNickname(0);

    const nickname = (document.getElementById("nickname") as HTMLInputElement).value;
    // axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/auth/checkNickname`, {nickname})
    //   .then(res => {
    //     console.log(res);
    //     setEnableEmail(1);
    //   }).catch(err => {
    //     console.log(err);
    //     setEnableEmail(2);
    //   })
  }

  return (
    <div className="w-full max-w-5xl flex flex-col items-center flex-grow-0 flex-shrink-0 overflow-hidden py-5 rounded-3xl border-2 border-primary-100">
      <span className="w-full flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden px-2.5 text-2xl font-semibold text-left">
        S-With Me 회원가입
      </span>
      <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center flex-grow-0 flex-shrink-0 overflow-hidden py-2.5 gap-5">
        <div
          className="w-full grid grid-cols-[150px,1fr] grid-rows-[1fr,1fr,1fr,1fr,1fr] flex-grow-0 flex-shrink-0 overflow-hidden py-2.5 px-5 gap-5 border-primary-100 border-b-2"
        >
          <label htmlFor="email" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            아이디(이메일)
          </label>
          <div className="w-full flex justify-start gap-2.5">
            <div className="w-full flex flex-col h-full relative">
              <Input id="email" name="email" className="w-full h-full" />
              <span className={`absolute bottom-0.5 left-4 text-primary-200 ${enableEmail == 1 ? "block" : "hidden"}`}>사용할 수 있는 이메일입니다.</span>
              <span className={`absolute bottom-0.5 left-4 text-red-600 ${enableEmail == 2 ? "block" : "hidden"}`}>이미 가입된 이메일입니다.</span>
              <span className={`absolute bottom-0.5 left-4 text-red-600 ${enableEmail == 3 ? "block" : "hidden"}`}>이메일 형식이 올바르지 않습니다.</span>
            </div>
            <Button size="lg" onClick={checkEmail}>중복 확인</Button>
          </div>
          <label htmlFor="password" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            비밀번호
          </label>
          <Input id="password" name="password" type="password" className="w-full" />
          <label htmlFor="pwcheck" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            비밀번호 확인
          </label>
          <div className="w-full flex flex-col relative">
            <Input id="pwcheck" name="pwcheck" type="password" className="w-full h-full" onChange={(e) => { e.currentTarget.value == (document.getElementById("password") as HTMLInputElement).value ? setSamePassword(1) : setSamePassword(2); }} />
            <span className={`absolute bottom-0.5 left-4 text-primary-200 ${samePassword == 1 ? "block" : "hidden"}`}>비밀번호가 일치합니다.</span>
            <span className={`absolute bottom-0.5 left-4 text-red-600 ${samePassword == 2 ? "block" : "hidden"}`}>비밀번호가 다릅니다.</span>
          </div>
          <label htmlFor="pw" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            이름
          </label>
          <Input id="name" name="name" className="w-full" />
          <label htmlFor="nickname" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            닉네임
          </label>
          <div className="w-full flex justify-start gap-2.5">
            <div className="w-full flex flex-col h-full relative">
              <Input id="nickname" name="nickname" className="w-full h-full" />
              <span className={`absolute bottom-0.5 left-4 text-primary-200 ${enableNickname == 1 ? "block" : "hidden"}`}>사용할 수 있는 닉네임입니다.</span>
              <span className={`absolute bottom-0.5 left-4 text-red-600 ${enableNickname == 2 ? "block" : "hidden"}`}>이미 사용 중인 닉네임입니다.</span>
            </div>
            <Button size="lg" onClick={checkNickname}>중복 확인</Button>
          </div>
          <label htmlFor="" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[150px] relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            생년월일
          </label>
          <Input id="birthdate" name="birthdate" type="date" className="w-fit" />
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
          <label htmlFor="introduce" className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 py-2.5 font-semibold text-xl">
            자기소개
          </label>
          <textarea id="introduce" name="introduce" className="w-full flex justify-start items-center flex-grow-0 flex-shrink-0 overflow-auto px-2.5 py-1 border-primary-100 border-2 rounded-xl"></textarea>
        </div>
        {handleSignup ? <Button size="lg" disabled><CgSpinner className="animate-spin text-3xl" /></Button> : <Button size="lg">회원가입</Button>}
      </form>
    </div>
  )
}

const SignUpSuccess = () => {
  return (
    <div className=" w-full max-w-3xl flex flex-col justify-center items-center flex-grow overflow-hidden gap-2.5 p-5 rounded-3xl border-2 border-primary-100">
      <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 p-2.5 border-t-0 border-r-0 border-b border-l-0 border-primary-100">
        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
          <span className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
            회원가입이 완료되었습니다!
          </span>
          <br />
          <span className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
            가입한 계정으로 로그인해주세요!
          </span>
        </p>
        <img
          src="/team_do_nothing.png"
          className="flex-grow-0 flex-shrink-0 w-[200px] h-[200px] object-cover"
        />
      </div>
      <Button size="lg" onClick={()=>{window.location.href="/signin"}}>로그인</Button>
    </div>
  )
}

const SignUp = () => {
  const auth = useAppSelector(state => state.auth);

  useEffect(() => {
    if (auth.status === "login") window.location.href = "/";
  }, [auth])

  return (
    <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-full overflow-hidden px-2.5 py-5">
      {auth.status === "logout" && <SignUpForm />}
      {auth.status === "signup" && <SignUpSuccess />}
    </div>
  )
}

export default SignUp;