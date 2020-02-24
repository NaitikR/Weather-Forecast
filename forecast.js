    const apiKey = '35726da49b581f864436c72bda2c9396';
    const city = document.getElementById("city");
    const state = document.getElementById("state");
const btn=document.getElementById("btn1")
btn.addEventListener("click",getForecast)
  // Fetch weather from API





  async function getForecast() {
    let cityName=city.value
    let stateName=state.value
    const response1 = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${cityName},${stateName}&units=metric&appid=${apiKey}`);
    const responseData1 = await response1.json();
    wind = document.getElementById("w-wind-one");
    wind.textContent = `Wind: ${responseData1.list[8].wind.speed} km/hr`;
    date = document.getElementById("w-datetime-one");
    date.textContent = `Date: ${responseData1.list[8].dt_txt}`;
    humidity = document.getElementById("w-humidity-one");
    humidity.textContent = `Humidity: ${responseData1.list[8].main.humidity} %`;
    temp = document.getElementById("w-temp-one");
    temp.textContent = `Temperature: ${responseData1.list[8].main.temp} C`;

    wind2 = document.getElementById("w-wind-two");
    wind2.textContent = `Wind: ${responseData1.list[16].wind.speed} km/hr`;
    date2 = document.getElementById("w-datetime-two");
    date2.textContent = `Date: ${responseData1.list[16].dt_txt} `;
    humidity2 = document.getElementById("w-humidity-two");
    humidity2.textContent = `Humidity: ${responseData1.list[16].main.humidity} %`;
    temp2 = document.getElementById("w-temp-two");
    temp2.textContent = `Temperature: ${responseData1.list[16].main.temp} C`;

    wind3 = document.getElementById("w-wind-three");
    wind3.textContent = `Wind: ${responseData1.list[24].wind.speed} km/hr`;
    date3 = document.getElementById("w-datetime-three");
    date3.textContent = `Date: ${responseData1.list[24].dt_txt} `;
    humidity3 = document.getElementById("w-humidity-three");
    humidity3.textContent = `Humidity: ${responseData1.list[24].main.humidity} %`;
    temp3 = document.getElementById("w-temp-three");
    temp3.textContent = `Temperature: ${responseData1.list[24].main.temp} C`;



    return responseData1;
  }
