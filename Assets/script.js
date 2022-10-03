// variables being set for city etc


let search = document.querySelector("#search");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let uvindex = document.querySelector("#uv-index");
let currentlocation = document.querySelector("#Current-Location");
let currenticon = document.querySelector("#current-icon");

let city;
let cityArray = [];
let today = moment().format('MM/DD/YYYY');


// forecast days

// day1
let dateOne = document.querySelector("#date-one");
let iconOne = document.querySelector("#icon-one");
let tempOne = document.querySelector("#temp-one");
let windOne = document.querySelector("#wind-one");
let humidityOne = document.querySelector("#humidity-one");

// day2
let dateTwo = document.querySelector("#date-two");
let iconTwo = document.querySelector("#icon-two");
let tempTwo = document.querySelector("#temp-two");
let windTwo = document.querySelector("#wind-two");
let humidityTwo = document.querySelector("#humidity-two");

// day3
let dateThree = document.querySelector("#date-three");
let iconThree = document.querySelector("#icon-three");
let tempThree = document.querySelector("#temp-three");
let windThree = document.querySelector("#wind-three");
let humidityThree = document.querySelector("#humidity-three");

// day4
let dateFour = document.querySelector("#date-four");
let iconFour = document.querySelector("#icon-four");
let tempFour = document.querySelector("#temp-four");
let windFour = document.querySelector("#wind-four");
let humidityFour = document.querySelector("#humidity-four");

// day5
let dateFive = document.querySelector("#date-five");
let iconFive = document.querySelector("#icon-five");
let tempFive = document.querySelector("#temp-five");
let windFive = document.querySelector("#wind-five");
let humidityFive = document.querySelector("#humidity-five");

let prevCityButtons = document.querySelector("#prev-city");
let prevButtons = document.querySelector("#.btn-block");

function getData(event) {
    storeData();

    let location = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=1e64d4984f9bd49dd45881e4e3f332ca";
    let lat;
    let lon;

    // new search
    currentlocation.textContent = "";
    currenticon.textContent= "";
    temp.textContent = "";
    wind.textContent = "";
    humid.textContent = "";
    uvindex.textContent = "";

    fetch(location)
        .then((response) => response.json())
        .then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon;
            let apiCurrent = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=1e64d4984f9bd49dd45881e4e3f332ca";

            fetch(apiCurrent)
                .then((response) => response.json())
                .then(function (data) {
                    postData(data);
                    return (data);
                });
        });



}

function postData(data) {
    let currentTemp = data.current.temp;
    let currentWind = data.current.wind_speed;
    let currentHumid = data.current.humidity;
    let currentUv = data.current.uvi;
    let weathIcon = data.current.weather[0].icon;
    let weathIconLink = "https://openweathermap.org/img/w/" + weathIcon + ".png";
    let cityUpper = city.toUpperCase();
    currentCity.textcontent += " " + cityUpper + " " + today;
    currentIcon.src = weathIconLink;
    currentIcon.setAttribute("style", "display: inline");
    temp.textContent = "Temp: " + currentTemp + "°F";
    wind.textContent = "Wind: " + currentWind + "MPH";
    humid.textContent = "Humidity: " + currentHumid + "%";
    uvindex.textContent = "UV Index: " + currentUv;
    if(currentUv < 2){
        uvindex.setAttribute("style", "background-color: green")
    } else if (currentUv < 6){
        uvindex.setAttribute("style", "background-color: yellow")
    } else {
        uvindex.setAttribute("style", "background-color: red")
    }

    let day1Temp = data.daily[1].temp.max;
    let day1Wind = data.daily[1].wind_speed;
    let day1Humid = data.daily[1].humidity;
    let day1weathIcon = data.daily[1].weather[0].icon;
    let day1weathIconLink = "https://openweathermap.org/img/w/" + day1weathIcon + ".png";
    dateOne.textContent = moment().add(1,'days').format('MM/DD/YYYY')
    tempOne.textContent = "Temp: " + day1Temp + "°F";
    windOne.textContent = "Wind: " + day1Wind + "MPH";
    humidOne.textContent = "Humidity: " + day1Humid + "%";
    IconOne.src = day1weathIconLink;
    IconOne.setAttribute("style", "display: inline");

    let day2Temp = data.daily[2].temp.max;
    let day2Wind = data.daily[2].wind_speed;
    let day2Humid = data.daily[2].humidity;
    let day2weathIcon = data.daily[2].weather[0].icon;
    let day2weathIconLink = "https://openweathermap.org/img/w/" + day2weathIcon + ".png";
    dateTwo.textContent = moment().add(2,'days').format('MM/DD/YYYY')
    tempTwo.textContent = "Temp: " + day2Temp + "°F";
    windTwo.textContent = "Wind: " + day2Wind + "MPH";
    humidTwo.textContent = "Humidity: " + day2Humid + "%";
    IconTwo.src = day2weathIconLink;
    IconTwo.setAttribute("style", "display: inline");

    let day3Temp = data.daily[3].temp.max;
    let day3Wind = data.daily[3].wind_speed;
    let day3Humid = data.daily[3].humidity;
    let day3weathIcon = data.daily[3].weather[0].icon;
    let day3weathIconLink = "https://openweathermap.org/img/w/" + day3weathIcon + ".png";
    dateThree.textContent = moment().add(3,'days').format('MM/DD/YYYY')
    tempThree.textContent = "Temp: " + day3Temp + "°F";
    windThree.textContent = "Wind: " + day3Wind + "MPH";
    humidThree.textContent = "Humidity: " + day3Humid + "%";
    IconThree.src = day3weathIconLink;
    IconThree.setAttribute("style", "display: inline");

    let day4Temp = data.daily[4].temp.max;
    let day4Wind = data.daily[4].wind_speed;
    let day4Humid = data.daily[4].humidity;
    let day4weathIcon = data.daily[4].weather[0].icon;
    let day4weathIconLink = "https://openweathermap.org/img/w/" + day4weathIcon + ".png";
    dateFour.textContent = moment().add(4,'days').format('MM/DD/YYYY')
    tempFour.textContent = "Temp: " + day4Temp + "°F";
    windFour.textContent = "Wind: " + day4Wind + "MPH";
    humidFour.textContent = "Humidity: " + day4Humid + "%";
    IconFour.src = day4weathIconLink;
    IconFour.setAttribute("style", "display: inline");
}