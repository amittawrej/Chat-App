import mongoose from "mongoose";
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGODB_URL ,{
        dbName:"chatapp",
    })
    .then((c) => {
      console.log(`Database Connected c ${c.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default connectDB;