const router = require("express").Router();

const weatherController = require("../controller/weatherController");

router.get("/api/weather", weatherController.getWeatherInformation);
router.get("/api/search", weatherController.searchCities);
router.get("api/forecast", weatherController.getForecast);

module.exports = router;
