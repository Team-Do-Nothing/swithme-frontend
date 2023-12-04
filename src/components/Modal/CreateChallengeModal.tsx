"use client";

import { FormEventHandler, useState } from "react";
import Input from "../Input";
import Modal from "./Modal";
import Button from "../Button";

const CreateChallengeModal = () => {
  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      title: formData.get("title"),
      goal: formData.get("goal"),
      startDate: formData.get("startDate"),
      endDate: formData.get("endDate"),
      challengeFee: formData.get("challengeFee"),
      checkFormat: formData.get("checkFormat"),
      challengeState: formData.get("challengeState"),
    };
    console.log(data);
  };

  return (
    <Modal title="">
      <form
        onSubmit={handleSubmit}
        className="w-full h-full flex flex-col items-center gap-1 "
      >
        <div className="w-full flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 p-2.5 text-[28px] font-semibold text-left text-black">
            챌린지명
          </div>
          <Input className="w-full" name="title" />
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 p-2.5 text-[28px] font-semibold text-left text-black">
            진행 기간
          </div>
          <div className="flex justify-center items-center flex-grow relative overflow-hidden gap-2.5 p-2.5">
            <Input type="date" name="startDate" />
            <p className="flex-grow-0 flex-shrink-0 text-[32px] font-semibold text-left text-black">
              ~
            </p>
            <Input type="date" name="endDate" />
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 p-2.5 text-[28px] font-semibold text-left text-black">
            인증 방식
          </div>
          <div className="w-fit flex justify-center items-center flex-grow overflow-hidden gap-2.5 p-2.5">
            <input
              id="daily"
              type="radio"
              name="challengeState"
              value="DAILY"
              className="peer/daily hidden"
              checked
            />
            <label
              htmlFor="daily"
              className={`flex flex-col justify-center items-center flex-grow h-[50px] relative p-2.5 rounded-2xl bg-white border-[3px] border-primary-200 text-xl font-bold text-left text-primary-200 peer-checked/daily:bg-primary-200 peer-checked/daily:text-white`}
            >
              Daily
            </label>
            <input
              id="special"
              type="radio"
              name="challengeState"
              value="SPECIAL"
              className="peer/special hidden"
              checked
            />
            <label
              htmlFor="special"
              className={`flex flex-col justify-center items-center flex-grow h-[50px] relative p-2.5 rounded-2xl bg-white border-[3px] border-primary-100 text-xl font-bold text-left text-primary-100 peer-checked/special:bg-primary-100 peer-checked/special:text-white`}
            >
              Special
            </label>
            <Input name="checkFormat" className=" w-full h-full" />
          </div>
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-2.5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-40 relative p-2.5 text-[28px] font-semibold text-left text-black">
            참가금액
          </div>
          <Input name="challengeFee" className="w-full h-full" />
        </div>
        <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[188px] overflow-hidden px-2.5">
          <div className="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-40 relative overflow-hidden gap-2.5 p-2.5 text-[28px] font-semibold text-left text-black">
            목표
          </div>
          <textarea
            name="goal"
            className="w-full h-full border-primary-100 border-2 rounded-xl"
          />
        </div>
        <Button theme="100" size="lg">
          챌린지 생성하기
        </Button>
      </form>
    </Modal>
  );
};

export default CreateChallengeModal;
