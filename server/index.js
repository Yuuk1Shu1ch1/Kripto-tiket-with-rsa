import express from "express";
import cors from "cors";
import router from "./controller.js";

const app = express();
const port = 8000;
const corsOption = {
   origin: 'http://www.example.com'
};

app.use(express.json())
app.use(cors(corsOption()));
app.use(express.urlencoded({ extended: true }))

app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
