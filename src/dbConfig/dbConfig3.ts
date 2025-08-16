import mongoose, { Connection } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


let db3Connection: Connection | undefined = global.mongoose_tertiary_conn;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const connect3 = async (): Promise<Connection> => {
  if (db3Connection && db3Connection.readyState === 1) {
    return db3Connection;
  }

  // ---------------------------------------------------------------------------------------------------------

  try {
    const conn = await mongoose
      .createConnection(process.env.MONGO_URI3!, {})
      .asPromise();

    // ---------------------------------------------------------------------------------------------------------

    conn.on("connected", () => {
      console.log("✅ MONGO_URI3 connected");
    });

    // ---------------------------------------------------------------------------------------------------------

    conn.on("error", (err) => {
      console.log("❌ MONGO_URI3 connection error:", err);
    });

    // ---------------------------------------------------------------------------------------------------------

    db3Connection = conn;
    global.mongoose_tertiary_conn = conn;

    // ---------------------------------------------------------------------------------------------------------

    return conn;
  } catch (err) {
    console.error("❌ Error connecting to MONGO_URI3:", err);
    throw err;
  }
};

export default connect3;
