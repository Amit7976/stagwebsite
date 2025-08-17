import connect2 from "@/dbConfig/dbConfig2";
import { getInquiryModel } from "@/models/InquiryModel";
import { NextRequest, NextResponse } from "next/server";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export async function POST(req: NextRequest) {
  try {
    const conn = await connect2();
    const InquiryModel = getInquiryModel(conn);
    
    const body = await req.json();
    const { name, email, phone, companyName, servicesInterested, message } =
      body;

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required." },
        { status: 400 }
      );
    }

    const newInquiry = await InquiryModel.create({
      name,
      email,
      phone,
      companyName,
      servicesInterested,
      message,
      timestamp: new Date(),
    });

     // ---------------------------------------------------------------------------------------------------------
    
    
    return NextResponse.json(newInquiry);
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to add inquiry", error },
      { status: 500 }
    );
  }
}