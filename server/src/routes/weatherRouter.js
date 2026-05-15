const router = require("express").Router();

const weatherController = require("../controller/weatherController");

router.get("/api/weather", weatherController.getWeatherInformation);
router.get("/api/search", weatherController.searchCities);

module.exports = router;
