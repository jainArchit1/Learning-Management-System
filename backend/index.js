import express from "express";
import { database } from "./Database/database.js";
import router from "./routes/routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const PORT = 5000;

// Connect to Database
database();

// Middleware should be applied in the correct order
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Define routes after applying CORS
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
