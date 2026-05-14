const router = require("express").Router();

const weatherController = require("../controller/weatherController");

router.get("/api/weather", weatherController.getWeatherInformation);

module.exports = router;
