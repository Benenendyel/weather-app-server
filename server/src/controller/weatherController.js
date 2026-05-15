const weatherController = {
  async getWeatherInformation(req, res) {
    const cityName = req.query.cityName;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.WEATHERMAP_API_KEY}&units=metric`,
    );
    const data = await response.json();
    res.json(data);
  },

  async searchCities(req, res) {
    const query = req.query.q;
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${process.env.WEATHERMAP_API_KEY}`,
    );
    const data = await response.json();
    res.json(data);
  },
};

module.exports = weatherController;
