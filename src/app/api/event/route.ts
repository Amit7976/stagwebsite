import connect3 from "@/dbConfig/dbConfig3";
import { getEventModel } from "@/models/EventModel";
import { NextResponse } from "next/server";

const conn = await connect3();
const EventModel = getEventModel(conn);

await connect3();

export async function GET() {
  const data = await EventModel.find({ active: true }).sort({ createdAt: -1 });
  return NextResponse.json({ success: true, data: data });
}
