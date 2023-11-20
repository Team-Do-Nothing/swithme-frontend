import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Study } from "../interface";
import axios from "axios";

const initialStudy: Study = {
  studyId: 0,
  categoryId: 0,
  memberId: 0
}

const initialState = {
  status: 'loaded',
  data: initialStudy,
}

const studySlice = createSlice({
  name: 'study',
  initialState,
  reducers: {
    setStudy : (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: (builder => {

  })
})

export const {setStudy} = studySlice.actions;

export default studySlice.reducer;