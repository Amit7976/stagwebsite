import { FilterQuery } from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import connect from "@/dbConfig/dbConfig";
import User from "@/models/userModel";


export interface IUser {
  firstName: string;
  lastName: string;
  isDeleted: boolean;
  isAccess: boolean;
  image?: string;
  createdAt: Date;
}

export async function GET(req: NextRequest) {
  try {
    await connect();

    // query param le lo
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type"); // job | intern | director

    // ✅ strongly typed filter
    const filter: FilterQuery<IUser> = {
      isDeleted: false,
      isAccess: true,
    };

    // condition apply karo
    if (type === "job") {
      filter.jobStatus = "Job";
    } else if (type === "intern") {
      filter.jobStatus = { $in: ["Unpaid_Internship", "Paid_Internship"] };
    } else if (type === "director") {
      filter.department = "Director";
    }

    const admins = await User.find(filter)
      .sort({ createdAt: -1 })
      .select("_id firstName lastName image department");

    return NextResponse.json({ success: true, data: admins });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error fetching admins", error },
      { status: 500 }
    );
  }
}
