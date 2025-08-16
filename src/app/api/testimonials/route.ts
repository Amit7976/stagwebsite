import connect3 from "@/dbConfig/dbConfig3";
import { getTestimonialModel } from "@/models/TestimonialModel";
import { NextResponse } from "next/server";

const conn = await connect3();
const TestimonialModel = getTestimonialModel(conn);
await connect3();

export async function GET() {
  const data = await TestimonialModel.find({ isActive: true }).sort({
    _id: -1,
  });
  return NextResponse.json({ success: true, data: data });
}
