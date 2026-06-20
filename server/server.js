const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const bookRoutes = require("./routes/bookRoutes");
const memberRoutes = require("./routes/memberRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Library Management API Running...");
});

app.use("/api/books", bookRoutes);
app.use("/api/members", memberRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const transactionRoutes =
  require("./routes/transactionRoutes");

  app.use(
  "/api/transactions",
  transactionRoutes
);

const analyticsRoutes =
  require("./routes/analyticsRoutes");

  app.use(
  "/api/analytics",
  analyticsRoutes
);