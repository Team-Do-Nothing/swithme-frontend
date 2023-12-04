import axios from "axios";
import DUMMY_DATA from "./data.json"
import { NextResponse } from "next/server";

interface Data {
  challengeId : number,
    studyId : number,
    title :string,
    goal : string,
    startDate : string,
    endDate : string,
    challengeFee : number,
    checkFormat : string,
    challengeState : "DAILY" | "SPECIAL",
    challengeFeeAll : number
}

export async function GET (request : Request) {
  const studyId = request.url.split("studyId=")[1];
  const challengeId = request.url.split("challengeId=")[1];
  // const challengeList = axios.get(`${process.env.NEXT_PUBLIC_SERVER_URI}/challenge/getChallenge?studyId=${studyId}`);
  const challengeList : Data[] = DUMMY_DATA as Data[];
  if(challengeId!==undefined) {
    return NextResponse.json(challengeList.filter(challenge=>challenge.challengeId===Number.parseInt(challengeId))[0]);
  }
  return NextResponse.json(challengeList);
}