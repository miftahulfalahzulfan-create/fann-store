
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const topupRoutes = require("./routes/topup");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api", topupRoutes);

app.listen(3000, () => console.log("Server jalan di http://localhost:3000"));
