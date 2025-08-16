import { Connection, Document, InferSchemaType, Model, Schema } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


export interface IEvent extends Document {
  title: string;
  description: string;
  startdatetime: string;
  enddatetime: string;
  image?: string;
  link?: string;
  active: boolean;
  timestamp: string;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const EventSchema = new Schema<IEvent>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    startdatetime: { type: String, required: true },
    enddatetime: { type: String, required: true },
    image: { type: String },
    link: { type: String },
    active: { type: Boolean, default: true },
    timestamp: { type: String, default: () => new Date().toISOString() },
  },
  { timestamps: true }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const EventModel =
//   models.Event || mongoose.model<IEvent>("Event", EventSchema);
// export default EventModel;


/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type EventType = InferSchemaType<typeof EventSchema>;

// Dynamic model getter
export const getEventModel = (conn: Connection): Model<EventType> => {
  return conn.models.Event || conn.model<EventType>("Event", EventSchema);
};