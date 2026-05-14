const weatherController = {
  async getWeatherInformation(req, res) {
    const cityName = req.query.cityName;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHERMAP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    res.json(data);
  },
};

module.exports = weatherController;
