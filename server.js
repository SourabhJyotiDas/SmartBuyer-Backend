import app from "./app.js";
import dotenv from "dotenv";
import cloudinary from "cloudinary";
import connectDatabase from "./database.js";

// config
dotenv.config({ path: "config/config.env" })

// connecting to Database
connectDatabase()



// Cloudinary setup

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.listen(process.env.PORT, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`);
})