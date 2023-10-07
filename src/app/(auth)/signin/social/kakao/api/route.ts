import axios from "axios";

export const GET = async (response: Response) => {
  const { searchParams } = new URL(response.url);
  const code = searchParams.get("code");

  return axios.post("https://kauth.kakao.com/oauth/token", {
    grant_type: "authorization_code",
    client_id: process.env.NEXT_PUBLIC_KAKAO_API_KEY,
    redirect_uri: process.env.NEXT_PUBLIC_KAKAO_SIGN_IN_REDIRECT_URI,
    code
  }, {
    headers: {
      "Content-type": "application/x-www-form-urlencoded",
      "charset": "utf-8"
    }
  }).then(res=>{
    const data = res.data;
    axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}`,data);
    return Response.json({data});
  }).catch(err=>{
    console.log(err);
  })
}