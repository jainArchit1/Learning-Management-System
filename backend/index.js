import express from "express";
import { database } from "./Database/database.js";
import router from "./routes/routes.js";
const app = express();
const PORT = 3000;
database();
app.use(express.json());
app.use("/api/v1", router);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.get("/", (req, res) => {
  res.send("Hello World");
});
