import mongoose from "mongoose";


const connectMongos=async()=>{
try {
    const res=await mongoose.connect("mongodb://127.0.0.1:27017/curdoperation");

        console.log("connection  sucessfully");
    
} catch (error) {
    console.log("check",error);
}

};
export default connectMongos;

