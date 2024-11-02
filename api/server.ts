import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "../src/routes/index";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();
const port = process.env.port || 4000;

app.use(cors()); // Esto permite todos los orígenes

app.use(express.json());

const MONGO_URL =
  "mongodb+srv://rodifer1196:fer123456@clustertfm.tfo2g.mongodb.net/rodifer1196";

mongoose
  .connect(MONGO_URL, {
    dbName: "products",
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((error) => {
    console.log(error);
  });
//mongoose.connection.on("error", (error: Error) => console.log(error));
app.use("/", router);
// app.listen(port, () => {
//   console.log(`SERVER IN RUNNING ON PORT ${port}`);
// });

// Exporta la aplicación Express para que se maneje como una función de Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};
