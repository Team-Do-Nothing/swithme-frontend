"use client ";

import { setModal } from "@/redux/slices/modalSlice";
import { useAppDispatch } from "@/redux/store";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen overflow-hidden bg-black/20">
      <div className="flex box-border flex-col justify-center items-center flex-grow-0 flex-shrink-0 w-full md:max-w-3xl overflow-hidden gap-[5px] p-8 rounded-3xl bg-white border-2 border-primary-100">
        <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 p-2.5">
          <div className="flex w-full justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden p-2.5">
            <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-black">
              {title}
            </p>
            <AiOutlineClose
              className="cursor-pointer"
              onClick={() => {
                dispatch(setModal("none"));
              }}
            />
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
