let options = {
  weekday: "long", 
  day: "numeric",
  month: "long",
  year: "numeric"
};
document.getElementById("date").textContent = new Date().toLocaleDateString("en-DE", options);

const today = new Date();

const dayNumber = today.getDay();

const element = document.getElementById("message");

if (dayNumber == 5) {
  element.classList.add("showme");   
} else {
  element.classList.add("hideme");
}

function toggleMenu () {
  let menuStr = '\u2630';    
  document.getElementById("primaryNav").classList.toggle("hide");
  if (document.getElementById("menuButton").innerHTML == menuStr) {
      document.getElementById("menuButton").innerHTML = "X";
  } else {
      document.getElementById("menuButton").innerHTML = menuStr;
  }
}

//ADD the key and change units to imperial
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=97ca00bd5ff0eeaaef7178e88735af19&units=imperial";

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherInfo);
    document.getElementById('highTemp').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowTemp').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('temp').innerHTML = weatherInfo.main.temp;
    document.getElementById('windSpeed').innerHTML = weatherInfo.wind.speed;
    document.getElementById('humidity').innerHTML = weatherInfo.main.humidity;
    
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

 const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=97ca00bd5ff0eeaaef7178e88735af19&units=imperial";

fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastInfo) => {

  console.log(forecastInfo);

  for (i = 0; i < 40; i++) {
    var time = forecastInfo.list[i].dt_txt;
    if (time.includes('18:00:00')) {
      
      forecastDayNumber += 1;
      
      if (forecastDayNumber === 7) {
        forecastDayNumber = 0;
      }

      let theDayName = document.createElement("div");
      theDayName.textContent = weekday[forecastDayNumber];
      console.log(">"+weekday[forecastDayNumber]);
      
      let temp = document.createElement("p");
      temp.textContent = forecastInfo.list[i].main.temp + ' \u00B0F';
      console.log(forecastInfo.list[i].main.temp);

      let iconFile = forecastInfo.list[i].weather[0].icon;
      let iconPath = "https://openweathermap.org/img/w/" + iconFile + ".png";
      let icon = document.createElement("img");
      icon.src = iconPath;
      let iconDesc = forecastInfo.list[i].weather[0].description;
      icon.alt = iconDesc;

      let theDay = document.createElement("section");
      theDay.appendChild(theDayName);
      theDay.appendChild(temp);
      theDay.appendChild(icon);

      document.getElementById('forecast').appendChild(theDay);
  

  
    }
  }
});





