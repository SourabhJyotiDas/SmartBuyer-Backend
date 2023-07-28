// Connect to Mongo db server 
import mongoose  from "mongoose";

const connectToMongo = async () => {
   await mongoose.connect(process.env.DB_URI, () => {
        console.log("Connected to Mongo Successfully");
    })
}

export default connectToMongo;