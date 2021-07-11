import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

//Routes

import postRoutes from "./routes/posts.js";

//limit 30mb as images are sent.

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//routes

app.use("/posts", postRoutes);

const CONNECTION_URL =
  "mongodb+srv://mern:mern@123@cluster0.idsjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`Server connection established on port ${PORT}`)
    );
  })
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);
