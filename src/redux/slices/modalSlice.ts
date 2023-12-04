import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    current:"none"
  },
  reducers: {
    setModal: (state, action) => {
      state.current = action.payload
    },
    clearModal: (state) => {
      state.current = "createChallenge";
    }
  },
})

export const {setModal, clearModal} = modalSlice.actions

export default modalSlice.reducer;