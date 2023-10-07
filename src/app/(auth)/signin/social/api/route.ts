import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

export const GET = (request:Request) => {
  console.log("api call!");
  return(Response.json({url:`https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_SIGN_IN_REDIRECT_URI}&response_type=code`}));
}