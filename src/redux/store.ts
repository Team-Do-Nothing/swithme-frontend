import { configureStore } from "@reduxjs/toolkit";
import dummySlice from "./slices/dummySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./slices/authSlice";
import ModalSlice from "./slices/modalSlice";
import studySlice from "./slices/studySlice";


export const store = configureStore({
  reducer: {
    dummy: dummySlice,
    auth: authSlice,
    modal: ModalSlice,
    study: studySlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;