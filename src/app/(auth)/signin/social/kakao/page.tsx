'use client'

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const KakaoLogin = () => {

  const searchParams = useSearchParams();
  
  useEffect(()=>{
    const code =searchParams.get("code");
    console.log(code);
    fetch(`/signin/social/kakao/api?code=${code}`).then(res=>res.json()).then(data=>{console.log(data)});
  }, [])

  return(
    <> 
    </>
  )
}

export default KakaoLogin;