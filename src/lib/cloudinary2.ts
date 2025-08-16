import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME2,
  api_key: process.env.CLOUDINARY_API_KEY2,
  api_secret: process.env.CLOUDINARY_API_SECRET2,
  secure: true,
});

export default cloudinary;