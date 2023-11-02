import { configureStore } from "@reduxjs/toolkit";
import dummySlice from "./slices/dummySlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    dummy: dummySlice,
    auth: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;