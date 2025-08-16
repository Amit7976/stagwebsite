import mongoose, { Connection } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


let db6Connection: Connection | undefined = global.mongoose_sixth_conn;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const connect6 = async (): Promise<Connection> => {
  if (db6Connection && db6Connection.readyState === 1) {
    return db6Connection;
  }

  // ---------------------------------------------------------------------------------------------------------
  
  try {
    const conn = await mongoose
      .createConnection(process.env.MONGO_URI6!, {})
      .asPromise();

    // ---------------------------------------------------------------------------------------------------------

    conn.on("connected", () => {
      console.log("✅ MONGO_URI6 connected");
    });

    // ---------------------------------------------------------------------------------------------------------

    conn.on("error", (err) => {
      console.log("❌ MONGO_URI6 connection error:", err);
    });

    // ---------------------------------------------------------------------------------------------------------

    db6Connection = conn;
    global.mongoose_sixth_conn = conn;

    // ---------------------------------------------------------------------------------------------------------

    return conn;
  } catch (err) {
    console.error("❌ Error connecting to MONGO_URI6:", err);
    throw err;
  }
};

export default connect6;
