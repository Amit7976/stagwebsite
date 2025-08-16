import { Connection, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const NewsletterSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const NewsletterModel =
//   models.Newsletter || model("Newsletter", NewsletterSchema);
// export default NewsletterModel;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type NewsletterType = InferSchemaType<typeof NewsletterSchema>;

// Dynamic model getter
export const getNewsletterModel = (conn: Connection): Model<NewsletterType> => {
  return conn.models.Newsletter || conn.model<NewsletterType>("Newsletter", NewsletterSchema);
};