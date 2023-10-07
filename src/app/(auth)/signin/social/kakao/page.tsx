'use client'

import { kakaoLogin } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KakaoLogin = () => {

  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const code = searchParams.get("code");

    axios.post(`/signin/social/kakao/api`, { code }).then(res => {
      dispatch(kakaoLogin(res.data))
    })
    // fetch(`/signin/social/kakao/api?code=${code}`).then(res => res.json()).then(data => { console.log(data) });
  }, [])

  return (
    <>
    </>
  )
}

export default KakaoLogin;