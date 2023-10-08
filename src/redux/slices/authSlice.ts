import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Member } from "../interface";
import axios from "axios";

interface authState {
  status: string,
  data: Member,
}

const initialState: authState = {
  status: 'logout',
  data: {
    memberId: 0,
    email: "",
    name: "",
    nickname: "",
  }
}

export const signUp = createAsyncThunk('signup', async (data: FormData) => {
  const signUpData: Member = {
    memberId: 0,
    email: data.get("email") as string,
    password: data.get("pw") as string,
    name: data.get("name") as string,
    nickname: data.get("nickname") as string,
    gender: data.get("gender") as string,
    birthdate: data.get("birthdate") as string,
    phone: data.get("phone") as string,
    introduce: data.get("introduce") as string,
  };

  console.log(signUpData);
  return signUpData;

  // const memberData = (await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/auth/signup`, signUpData)).data();
  // return {...signUpData, memberId:memberData.memberId};
});

export const signIn = createAsyncThunk('signin', async (data: FormData) => {
  // const memberData = (await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/auth/login`, {
  //   email: data.get("email"),
  //   password: data.get("password"),
  // })).data();

  const memberData: Member = {
    memberId: 1111,
    email: "test",
    name: "",
    nickname: "test",
  }

  return memberData;
})

export const kakaoLogin = createAsyncThunk('kakaoLogin', async (data: Member) => {
  const memberData = (await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/auth/socialLogin`, {
    loginType: "kakao",
    oauthId: data
  })).data();

  return memberData;
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.status = "login";
      state.data = action.payload;
    }),
      builder.addCase(signUp.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(signUp.rejected, (state) => {
        state = initialState;
      }),
      builder.addCase(signIn.fulfilled, (state, action) => {
        if ((action.payload as Member).name === "") state.status = "logout";
        else {
          state.status = "login";
          state.data = action.payload;
        }
      }),
      builder.addCase(signIn.pending, (state) => {
        state.status = "loading";
      }),
      builder.addCase(kakaoLogin.fulfilled, (state, action) => {
        if ((action.payload as Member).name === "") state.status = "logout";
        else {
          state.status = "login";
          state.data = action.payload;
        }
      }),
      builder.addCase(kakaoLogin.pending, (state) => {
        state.status = "loading";
      })
  }
})

export default authSlice.reducer;