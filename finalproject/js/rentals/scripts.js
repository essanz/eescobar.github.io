let modified = document.lastModified;
document.getElementById("lastmodified").textContent = modified;

function toggleMenu () {
    let menuStr = '\u2630';    
    document.getElementById("primaryNav").classList.toggle("hide");
    if (document.getElementById("menuButton").innerHTML == menuStr) {
        document.getElementById("menuButton").innerHTML = "X";
    } else {
        document.getElementById("menuButton").innerHTML = menuStr;
    }
}


const constURL = new Request('../../data/data.json', {
    });

fetch(constURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    const dataInfo = jsonObject['rentals'];
    console.log(dataInfo);

  for (i = 0; i < 24; i++) {
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
