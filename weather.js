class Weather {
  constructor(city, state) {
    this.apiKey = '7df60a18aaa61eb09ceca87a9495bac9';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`);

    const responseData = await response.json();


    return responseData;
  }
  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
