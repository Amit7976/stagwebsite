import { Connection, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const LogSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    userId: { type: String },
    deviceType: String,
    cpuArchitecture: String,
    osName: String,
    osVersion: String,
    browserName: String,
    browserVersion: String,
    ip: String,
    userAgent: String,
  },
  {
    timestamps: true,
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type LogType = InferSchemaType<typeof LogSchema>;

// Dynamic model getter
export const getLogModel = (conn: Connection): Model<LogType> => {
  return conn.models.Log || conn.model<LogType>("Log", LogSchema);
};