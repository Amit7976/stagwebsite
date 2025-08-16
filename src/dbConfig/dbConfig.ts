import mongoose from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


let connection = global.mongoose_main_conn;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function connect(): Promise<void> {
  if (connection && connection.readyState === 1) {
    return;
  }

  // ---------------------------------------------------------------------------------------------------------

  try {
    const db = await mongoose.connect(process.env.MONGO_URI!, {});

    // ---------------------------------------------------------------------------------------------------------

    connection = db.connection;
    global.mongoose_main_conn = db.connection;

    // ---------------------------------------------------------------------------------------------------------

    connection.on("connected", () => {
      console.log("✅ Main DB connected");
    });

    // ---------------------------------------------------------------------------------------------------------

    connection.on("error", (err) => {
      console.log("❌ Main DB connection error: " + err);
      process.exit();
    });
  } catch (error) {
    console.log("❌ Error connecting to Main DB:", error);
    process.exit(1);
  }
}

export default connect;
