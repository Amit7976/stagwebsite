import mongoose from 'mongoose';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// DEFINE THE USER SCHEMA
const DEFAULT_ACCESS = [
  "dashboard",
  "attendance",
  "attendance_history",
  "auth",
  "logs",
  "employees",
  "my_task",
  "add_admin_report",
];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, default: "" },
    email: { type: String, required: true, unique: true },
    image: { type: String },
    password: { type: String, required: true, select: false },
    phone: { type: String, required: true },
    department: { type: String, required: true },
    designation: { type: String, required: true },
    jobStatus: { type: String },
    workTime: { type: Number, default: 8 },
    dob: { type: Date },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    address: { type: String },
    dateOfJoining: { type: Date, required: true },
    isAccess: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    role: {
      type: String,
      required: true,
      default: "super_admin",
      enum: [
        "super_admin",
        "manager_admin",
        "employee_admin",
        "intern_admin",
        "base",
      ],
    },
    access: {
      type: [{ type: String }],
      set: function (userProvidedAccess: string[]) {
        return Array.from(
          new Set([...(userProvidedAccess || []), ...DEFAULT_ACCESS])
        );
      },
      default: DEFAULT_ACCESS,
    },
  },
  {
    timestamps: true,
  }
);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SAVE THE MODEL
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const User = mongoose.models?.Admin || mongoose.model("Admin", userSchema);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export default User;
