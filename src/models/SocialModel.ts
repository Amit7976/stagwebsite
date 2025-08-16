import { Connection, Document, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export interface ISocial extends Document {
  name: string;
  url: string;
  status: boolean;
  professional: boolean;
  followers: string;
  active: boolean;
}

const SocialSchema = new Schema<ISocial>(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    status: { type: Boolean, default: true },
    professional: { type: Boolean, default: false },
    followers: { type: String, default: "" },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const SocialModel = models.Social || model<ISocial>("Social", SocialSchema);
// export default SocialModel;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type SocialType = InferSchemaType<typeof SocialSchema>;

// Dynamic model getter
export const getSocialModel = (conn: Connection): Model<SocialType> => {
  return conn.models.Social || conn.model<SocialType>("Social", SocialSchema);
};