import { Connection, Document, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export interface ICompanyMail extends Document {
  name: string;
  email: string;
  description: string;
  isActive: boolean;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const CompanyMailSchema = new Schema<ICompanyMail>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    description: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const CompanyMailModel =
//   models.Email || model<ICompanyMail>("CompanyMail", CompanyMailSchema);
// export default CompanyMailModel;

export const getCompanyMailModel = (conn: Connection): Model<ICompanyMail> => {
  return (
    conn.models.CompanyMail ||
    conn.model<ICompanyMail>("CompanyMail", CompanyMailSchema)
  );
};