import { Member } from "@/redux/interface";
import axios from "axios";

interface KakaoAccessToken {
  access_token: string,
  token_type: string,
  refresh_token: string,
  expries_in: number,
  scope: string,
  refresh_token_expires_in: number,
}

export const POST = async (request: Request) => {
  const data = await request.json();

  console.log(data);

  const tokenData : KakaoAccessToken = (await axios.post("https://kauth.kakao.com/oauth/token", {
    grant_type: "authorization_code",
    client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
    redirect_uri: process.env.NEXT_PUBLIC_KAKAO_SIGN_IN_REDIRECT_URI,
    code: data.code
  }, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      "charset": "utf-8"
    }
  })).data;

  // const memberData = (await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/auth/socialLogin`,{
  //   loginType:'kakao',
  //   oauthId:tokenData.access_token,
  // })).data;

  console.log(tokenData);

  const memberData: Member = {
    memberId: 1111,
    email: "test",
    name: "",
    nickname: "test",
  }

  return Response.json(memberData);
}