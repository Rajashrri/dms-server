import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDb = async () => {
  mongoose.connection.on("connected", () => {
    console.log("🔗 Mongoose default connection is open");
  });

  mongoose.connection.on("error", (err) => {
    console.log("⚠️ Mongoose default connection error:", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ Mongoose default connection disconnected");
  });


  await mongoose.connect(config?.databaseUrl)

  console.log(config?.databaseUrl)
};
