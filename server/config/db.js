import mongoose from "mongoose";

const connectMongos = async () => {
  try {
    const mongooseConnectionURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/curdoperation";
    const res = await mongoose.connect(mongooseConnectionURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connection successfully established");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongos;
