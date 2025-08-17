import connect2 from "@/dbConfig/dbConfig2";
import { getCareerModel } from "@/models/CareerModel";
import { NextResponse } from "next/server";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const conn = await connect2();
const CareerModel = getCareerModel(conn);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export async function GET() {
  await connect2();

  const today = new Date();
  const startOfToday = new Date(today.setHours(0, 0, 0, 0));
  const endOfToday = new Date(today.setHours(23, 59, 59, 999));

  const careers = await CareerModel.find({
    active: true,
    openDate: { $lte: endOfToday },
    closeDate: { $gte: startOfToday },
  }).sort({ createdAt: -1 });

  return NextResponse.json({ success: true, data: careers });
}
