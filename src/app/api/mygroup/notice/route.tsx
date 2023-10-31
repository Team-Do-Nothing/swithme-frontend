import {NextResponse} from "next/server";
import notices from "@/app/api/mygroup/notice/data.json";

export async function GET(request: Request,) {
    return NextResponse.json(notices);
}