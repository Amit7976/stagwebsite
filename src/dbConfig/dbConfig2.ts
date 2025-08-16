import mongoose, { Connection } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


let db2Connection: Connection | undefined = global.mongoose_secondary_conn;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const connect2 = async (): Promise<Connection> => {
  if (db2Connection && db2Connection.readyState === 1) {
    return db2Connection;
  }

  // ---------------------------------------------------------------------------------------------------------

  try {
    const conn = await mongoose
      .createConnection(process.env.MONGO_URI2!, {})
      .asPromise();

    conn.on("connected", () => {
      console.log("✅ MONGO_URI2 connected");
    });

    conn.on("error", (err) => {
      console.log("❌ MONGO_URI2 connection error:", err);
    });

    db2Connection = conn;
    global.mongoose_secondary_conn = conn;

    return conn;
  } catch (err) {
    console.error("❌ Error connecting to MONGO_URI2:", err);
    throw err;
  }
};

export default connect2;
