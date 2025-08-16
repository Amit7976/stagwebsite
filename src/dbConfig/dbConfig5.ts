import mongoose, { Connection } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


let db5Connection: Connection | undefined = global.mongoose_fifth_conn;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const connect5 = async (): Promise<Connection> => {
  if (db5Connection && db5Connection.readyState === 1) {
    return db5Connection;
  }

  // ---------------------------------------------------------------------------------------------------------

  try {
    const conn = await mongoose
      .createConnection(process.env.MONGO_URI5!, {})
      .asPromise();

    // ---------------------------------------------------------------------------------------------------------

    conn.on("connected", () => {
      console.log("✅ MONGO_URI5 connected");
    });

    // ---------------------------------------------------------------------------------------------------------

    conn.on("error", (err) => {
      console.log("❌ MONGO_URI5 connection error:", err);
    });

    // ---------------------------------------------------------------------------------------------------------

    db5Connection = conn;
    global.mongoose_fifth_conn = conn;

    // ---------------------------------------------------------------------------------------------------------

    return conn;
  } catch (err) {
    console.error("❌ Error connecting to MONGO_URI5:", err);
    throw err;
  }
};

export default connect5;
