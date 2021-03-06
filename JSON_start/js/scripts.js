//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3617763&appid=97ca00bd5ff0eeaaef7178e88735af19&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    document.getElementById('place').innerHTML = weatherInfo.name;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
    
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "https://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;
    
 }); //end of "then" fat arrow function

 const d = new Date();

 const todayDayNumber = d.getDay();
 
 let forecastDayNumber = todayDayNumber;
 console.log(forecastDayNumber);

const weekday = new Array(7);

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

 const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3617763&appid=97ca00bd5ff0eeaaef7178e88735af19&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastInfo) => {

  console.log(forecastInfo);

  for (i = 0; i < 40; i++) {
    var time = forecastInfo.list[i].dt_txt;
    if (time.includes('21:00:00')) {
      
      forecastDayNumber += 1;
      
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }

      let theDayName = document.createElement("span");
      theDayName.textContent = weekday[forecastDayNumber];
      console.log(">"+weekday[forecastDayNumber]);
      
      let temp = document.createElement("p");
      temp.textContent = forecastInfo.list[i].main.temp;
      console.log(forecastInfo.list[i].main.temp);

      let iconFile = forecastInfo.list[i].weather[0].icon;
      let iconPath = "https://openweathermap.org/img/w/" + iconFile + ".png";
      let icon = document.createElement("img");
      icon.src = iconPath;

      let theDay = document.createElement("div");
      theDay.appendChild(theDayName);
      theDay.appendChild(temp);
      theDay.appendChild(icon);

      document.getElementById('weatherforecast').appendChild(theDay);
  

  
    }
  }
});





