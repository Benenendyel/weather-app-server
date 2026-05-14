require("dotenv").config();
const weatherRouter = require("./src/routes/weatherRouter");

const express = require("express");
const app = express();

app.use(express.json());

app.use(weatherRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening to port:", PORT);
});
