import { Connection, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const AttendanceSchema = new Schema(
  {
    userId: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true },
    checkInTime: { type: Number, default: null },
    checkOutTime: { type: Number, default: null },
    holiday: { type: Boolean, default: 0 },
    holidayReason: { type: String, default: null },
  },
  { timestamps: true } // createdAt = timestamp
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type AttendanceType = InferSchemaType<typeof AttendanceSchema>;
export const getAttendanceModel = (conn: Connection): Model<AttendanceType> => {
  return (
    conn.models.Attendance ||
    conn.model<AttendanceType>("Attendance", AttendanceSchema)
  );
};
