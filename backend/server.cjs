require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const coffeeShopsRoutes = require("./routes/coffeeShopsRoutes.cjs");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/valley-roots/coffeeShops", coffeeShopsRoutes);

// db + server
const PORT = process.env.PORT || 4000;
console.log("MONGODB_URI exists?", !!process.env.MONGODB_URI);
console.log("MONGODB_URI preview:", process.env.MONGODB_URI?.replace(/\/\/.*?:.*?@/, "//<user>:<pass>@"));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to DB & listening on port ${PORT}!`);
    });
  })
  .catch((error) => console.log("Mongo connection error:", error));
