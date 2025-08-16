import mongoose, { Connection } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////

let db4Connection: Connection | undefined = global.mongoose_forth_conn;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const connect4 = async (): Promise<Connection> => {
  if (db4Connection && db4Connection.readyState === 1) {
    return db4Connection;
  }

  // ---------------------------------------------------------------------------------------------------------
  try {
    const conn = await mongoose
      .createConnection(process.env.MONGO_URI4!, {})
      .asPromise();

    // ---------------------------------------------------------------------------------------------------------

    conn.on("connected", () => {
      console.log("✅ MONGO_URI4 connected");
    });

    // ---------------------------------------------------------------------------------------------------------

    conn.on("error", (err) => {
      console.log("❌ MONGO_URI4 connection error:", err);
    });

    // ---------------------------------------------------------------------------------------------------------

    db4Connection = conn;
    global.mongoose_forth_conn = conn;

    // ---------------------------------------------------------------------------------------------------------

    return conn;
  } catch (err) {
    console.error("❌ Error connecting to MONGO_URI4:", err);
    throw err;
  }
};

export default connect4;
