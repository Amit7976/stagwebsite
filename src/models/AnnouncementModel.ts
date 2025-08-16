import { Connection, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const AnnouncementSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String }, // Cloudinary or any image URL
    link: { type: String },
    active: { type: Boolean, default: true },
    timestamp: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const AnnouncementModel =
//   models.Announcement || model("Announcement", AnnouncementSchema);
// export default AnnouncementModel;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type AnnouncementType = InferSchemaType<typeof AnnouncementSchema>;

// Dynamic model getter
export const getAnnouncementModel = (
  conn: Connection
): Model<AnnouncementType> => {
  return (
    conn.models.Announcement ||
    conn.model<AnnouncementType>("Announcement", AnnouncementSchema)
  );
};
