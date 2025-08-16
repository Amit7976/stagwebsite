import { Connection, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const CareerSchema = new Schema(
  {
    category: { type: String, required: true },
    role: { type: String, required: true },
    applyLink: { type: String, required: true },
    openDate: { type: Date, required: true },
    closeDate: { type: Date, required: true },
    location: { type: String},
    salary: { type: String },
    openings: { type: Number, default: 1 },
    locationType: {
      type: String,
      enum: ["remote", "onsite", "hybrid"],
      default: "onsite",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship", "trainee"],
      default: "full-time",
    },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const CareerModel = models.Career || model("Career", CareerSchema);
// export default CareerModel;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type CareerType = InferSchemaType<typeof CareerSchema>;

// Dynamic model getter
export const getCareerModel = (conn: Connection): Model<CareerType> => {
  return conn.models.Career || conn.model<CareerType>("Career", CareerSchema);
};