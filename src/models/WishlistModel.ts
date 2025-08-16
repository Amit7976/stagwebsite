import mongoose, { Connection, InferSchemaType, Model } from "mongoose";


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////


const WishlistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },
    product: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    timestamp: {
      type: String,
      default: () => new Date().toISOString(),
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Prevent model overwrite on hot reloads (Next.js dev mode)
// const WishlistModel =
//   mongoose.models.Wishlist || mongoose.model("Wishlist", WishlistSchema);

// export default WishlistModel;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Type inference from schema
export type WishlistType = InferSchemaType<typeof WishlistSchema>;

// Dynamic model getter
export const getWishlistModel = (conn: Connection): Model<WishlistType> => {
  return conn.models.Wishlist || conn.model<WishlistType>("Wishlist", WishlistSchema);
};