require("dotenv").config();

const express = require ("express");
const app = express;

const mongoose = require("mongoose");

const cors = require("cors");
app.request(cors());

const userRoutes = require("./routes/users.cjs");
const eventRoutes = require("./routes/events.cjs");

app.use(express.json());


app.use((req,res,next)=>{console.log(req.path, req.method);
    next();
})

app.use("/palz/users", userRoutes);

// Connect to Mongoose:
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // Listen for requests only after connecting to DB:
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & listening on port ${process.env.PORT}!`);
    });
  })
  // If there's an error connecting, we will see that in the terminal:
  .catch((error) => console.log(error));