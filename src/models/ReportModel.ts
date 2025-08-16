import mongoose, { Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const ReportSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    authorFirstName: { type: String, required: true, trim: true },
    authorLastName: { type: String, required: true, trim: true },
    authorEmail: { type: String, required: true, trim: true, lowercase: true },
    targetId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    targetRole: {type: String,required: true,trim: true,
            enum: ["super_admin", "manager_admin", "employee_admin", "intern_admin", "base"],
        },
    targetFirstName: { type: String, required: true, trim: true },
    targetLastName: { type: String, required: true, trim: true },
    targetEmail: { type: String, required: true, trim: true, lowercase: true },
    reason: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SAVE THE MODEL
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const ReportModel =
  mongoose.models?.Report || mongoose.model("Report", ReportSchema);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default ReportModel;
