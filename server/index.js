import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/post.js";

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://username:password@cluster0.eobih.mongodb.net/database?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

app.use("/posts", postRoutes);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
