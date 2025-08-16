import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME3,
  api_key: process.env.CLOUDINARY_API_KEY3,
  api_secret: process.env.CLOUDINARY_API_SECRET3,
  secure: true,
});

export default cloudinary;