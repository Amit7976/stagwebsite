import { Connection, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const InquirySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
    },
    servicesInterested: {
      type: [String],
    },
    message: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);

// export default Inquiry;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type InquiryType = InferSchemaType<typeof InquirySchema>;

// Dynamic model getter
export const getInquiryModel = (conn: Connection): Model<InquiryType> => {
  return (
    conn.models.Inquiry || conn.model<InquiryType>("Inquiry", InquirySchema)
  );
};
