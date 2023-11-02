import axios from "axios";
import { NextResponse } from "next/server";
import dummyData from "./data.json";

export async function POST (request:Request) {
  const studyId = (await request.json()).studyId;
  // const data = (await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URI}/study/getStudyMember`, {studyId})).data();
  const data = dummyData;
  return NextResponse.json(data);
}