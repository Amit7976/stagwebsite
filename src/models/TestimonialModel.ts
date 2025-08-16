import mongoose, { Connection, InferSchemaType, Model } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const TestimonialSchema = new mongoose.Schema({
  active: { type: Boolean, default: true },
  star: { type: Number, required: true, min: 1, max: 5 },
  companyName: { type: String, required: true },
  authorName: { type: String, required: true },
  authorTitle: { type: String, required: true },
  content: { type: String, required: true },
  companyLogo: { type: String, required: true, default: "" },
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// export const TestimonialModel =
//     mongoose.models.Testimonial || mongoose.model("Testimonial", TestimonialSchema);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type TestimonialType = InferSchemaType<typeof TestimonialSchema>;

// Dynamic model getter
export const getTestimonialModel = (
  conn: Connection
): Model<TestimonialType> => {
  return (
    conn.models.Testimonial ||
    conn.model<TestimonialType>("Testimonial", TestimonialSchema)
  );
};
