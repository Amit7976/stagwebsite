import { NextRequest, NextResponse } from "next/server";
import { getNewsletterModel } from "@/models/NewsletterModel";
import connect4 from "@/dbConfig/dbConfig4";

const conn = await connect4();
const NewsletterModel = getNewsletterModel(conn);

// ➕ POST — Add a new subscriber
export async function POST(req: NextRequest) {
  const formData = await req.formData();

  if (!formData.get("email")) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  try {
    const existing = await NewsletterModel.findOne({
      email: formData.get("email"),
    });

    if (existing) {
      return NextResponse.json(
        { msg: "Already subscribed" },
        { status: 409 }
      );
    }

    const subscriber = new NewsletterModel({
      email: formData.get("email"),
      active: true,
    });

    await subscriber.save();

    // ---------------------------------------------------------------------------------------------------------

    return NextResponse.json({ success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { msg: "Something went wrong" },
      { status: 500 }
    );
  }
}
