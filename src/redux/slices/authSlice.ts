import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Member } from "../interface";
import axios from "axios";

interface authState {
  status: string,
  data: Member,
}

const initialState : authState = {
  status: 'logout',
  data: {
    memberId: 0,
    email: "",
    name: "",
    nickname: "",
  }
}

export const signUp = createAsyncThunk('signup', async (data : FormData)=>{
  const signUpData : Member = {
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

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(signUp.fulfilled, (state, action)=>{
      state.status = "login";
      state.data = action.payload;
    }),
    builder.addCase(signUp.pending, (state)=>{
      state.status = "loading";
    }),
    builder.addCase(signUp.rejected, (state)=>{
      state = initialState;
    })
  }
})

export default authSlice.reducer;