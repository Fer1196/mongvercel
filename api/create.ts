import { VercelRequest, VercelResponse } from "@vercel/node";
import express from "express";
import serverless from "serverless-http";
import ProductController from "../src/controllers/ProductController";
import mongoose from "mongoose";

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

const app = express();
app.use(express.json());

// Define la ruta POST /products utilizando Express
app.post("/products", (req, res) => {
  res.status(201).json({
    message:
      "Recurso creado Vercel modificado ahora mismo con nueva data V23....",
  });
});

// Convierte la aplicación Express a una función manejadora de Vercel
const handler = serverless(app);

// Exporta la función manejadora
export default async (req: VercelRequest, res: VercelResponse) => {
  // Usa la función handler para manejar la solicitud de Vercel con Express
  return handler(req, res);
};
