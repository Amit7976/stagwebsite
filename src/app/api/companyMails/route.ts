import connect2 from "@/dbConfig/dbConfig2";
import { getCompanyMailModel } from "@/models/companyMailModel";
import { NextResponse } from "next/server";

const conn = await connect2();
const CompanyMailModel = getCompanyMailModel(conn);

export async function GET() {
  await connect2();
  try {
    const emails = await CompanyMailModel.find({ active: true })
      .sort({
        createdAt: -1,
      })
      .select("name description email");
    return NextResponse.json({ success: true, data: emails });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch emails", error },
      { status: 500 }
    );
  }
}
