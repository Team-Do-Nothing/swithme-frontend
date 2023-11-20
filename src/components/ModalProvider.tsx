"use client";

import { useAppSelector } from "@/redux/store";
import InviteMemberModal from "./Modal/InviteMemberModal";

const ModalProvider = () => {
  const modal = useAppSelector((state) => state.modal.current);

  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen z-50 ${
        modal === "none" && "hidden"
      }`}
    >
      {modal === "inviteMember" && <InviteMemberModal />}
    </div>
  );
};

export default ModalProvider;
