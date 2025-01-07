import express from "express";
import { database } from "./Database/database.js";
const app = express();
const PORT = 3000;
database();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
