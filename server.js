const express = require("express");
const mongoose = require("mongoose");
const indexRoute = require("./routes/index");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const app = express();
console.log("salom");
mongoose
  .connect(process.env.MONGODB_URI_local, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log("error connecting", err);
  });

app.use(express.json());
app.use(cors());

app.use("/api", indexRoute);
app.use(errorHandler);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Started up at prot ${PORT}`);
});
