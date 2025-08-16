import connect2 from "@/dbConfig/dbConfig2";
import { getFAQModel } from "@/models/faqModel";
import { NextResponse } from "next/server";

const conn = await connect2();
const FaqModel = getFAQModel(conn);

// ✅ GET: /api/faqs
export async function GET() {
  await connect2();
  try {
    const faqs = await FaqModel.find().sort({ createdAt: -1 });
    return NextResponse.json(faqs);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch FAQs", error },
      { status: 500 }
    );
  }
}