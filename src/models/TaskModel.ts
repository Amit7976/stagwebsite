import mongoose, { Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const TaskSchema = new Schema(
  {
    assigner: { type: Schema.Types.ObjectId, ref: "User", required: true },
    assignerFirstName: { type: String, required: true, trim: true },
    assignerLastName: { type: String, required: true, trim: true },
    assignerEmail: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    targetId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    targetRole: {
      type: String,
      required: true,
      trim: true,
      enum: [
        "super_admin",
        "manager_admin",
        "employee_admin",
        "intern_admin",
        "base",
      ],
    },
    targetFirstName: { type: String, required: true, trim: true },
    targetLastName: { type: String, required: true, trim: true },
    targetEmail: { type: String, required: true, trim: true, lowercase: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    note: { type: String, trim: true },
    dateOfAssign: { type: Date, required: true },
    dateOfSubmit: { type: Date, default: null },
    deadline: { type: Date, required: true },
    isAccess: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SAVE THE MODEL
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const TaskModel =
  mongoose.models?.Task || mongoose.model("Task", TaskSchema);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default TaskModel;
