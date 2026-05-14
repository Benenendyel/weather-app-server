require("dotenv").config();
const weatherRouter = require("./src/routes/weatherRouter");

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.use(weatherRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening to port:", PORT);
});
