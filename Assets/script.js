// api key
var apiKey = "b8a08577d72601154a70e51eaca823e0";

// variables being set for city etc
let search = document.querySelector("#search");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let CurrentLocation = document.querySelector("#Current-Location");
let currentimage = document.querySelector("#current-image");
let citysaved = JSON.parse(localStorage.getItem("city"))
let city = "";
let cityArray = []
let today = moment().format('MM/DD/YYYY');


// forecast days
// day1
let day1 = document.querySelector("#day1");
let image1 = document.querySelector("#image1");
let temp1 = document.querySelector("#temp1");
let wind1 = document.querySelector("#wind1");
let humidity1 = document.querySelector("#humidity1");

// day2
let day2 = document.querySelector("#day2");
let image2 = document.querySelector("#image2");
let temp2 = document.querySelector("#temp2");
let wind2 = document.querySelector("#wind2");
let humidity2 = document.querySelector("#humidity2");

// day3
let day3 = document.querySelector("#day3");
let image3 = document.querySelector("#image3");
let temp3 = document.querySelector("#temp3");
let wind3 = document.querySelector("#wind3");
let humidity3 = document.querySelector("#humidity3");

// day4
let day4 = document.querySelector("#day4");
let image4 = document.querySelector("#image4");
let temp4 = document.querySelector("#temp4");
let wind4 = document.querySelector("#wind4");
let humidity4 = document.querySelector("#humidity4");

// day5
let day5 = document.querySelector("#day5");
let image5 = document.querySelector("#image5");
let temp5 = document.querySelector("#temp5");
let wind5 = document.querySelector("#wind5");
let humidity5 = document.querySelector("#humidity5");

let PCSButtons = document.querySelector("#previous-city-searched");
let prevButtons = document.querySelector("#btn-block");

function getData(event) {
    storeData();

    let location = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + apiKey;
    let lat;
    let lon;

    // new search
    CurrentLocation.textContent = "";
    currentimage.textContent= "";
    temp.textContent = "";
    wind.textContent = "";
    humidity.textContent = "";

    fetch(location)
        .then((response) => response.json())
        .then(function (data) {
            // console.log(data)
            lat = data.coord.lat;
            lon = data.coord.lon;
            let apiCurrent = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + apiKey;

            fetch(apiCurrent)
                .then((response2) => response2.json())
                .then(function (data2) {
                    // console.log(data2)
                    postData(data, data2);
                    return (data2);
                });
        });
}

function postData(dataForToday, dataForFiveDay) {
    console.log(dataForToday)
    console.log(dataForFiveDay)
    let currentTemp = dataForToday.main.temp;
    let currentWind = dataForToday.main.wind;
    let currentHumid = dataForToday.main.humidity;
    let weatherimage = dataForToday.weather[0].icon;
    let weatherimageLink = "https://openweathermap.org/img/w/" + weatherimage + ".png";
    let cityUpper = city.toUpperCase();
    CurrentLocation.textcontent += " " + cityUpper + " " + today;
    currentimage.src = weatherimageLink;
    currentimage.setAttribute("style", "display: inline");
    temp.textContent = "Temp: " + currentTemp + "°F";
    wind.textContent = "Wind: " + currentWind + "MPH";
    humidity.textContent = "Humidity: " + currentHumid + "%";
   

//     let day1Temp = dataForFiveDay.main[0].temp_max;
//     let day1Wind = dataForFiveDay.main[0].wind_speed;
//     let day1Humid = dataForFiveDay.main[0].humidity;
//     let day1weatherimage = dataForFiveDay.main[0].weather[0].icon;
//     let day1weatherimageLink = "https://openweathermap.org/img/w/" + day1weatherimage + ".png";
//     dateOne.textContent = moment().add(1,'days').format('MM/DD/YYYY')
//     tempOne.textContent = "Temp: " + day1Temp + "°F";
//     windOne.textContent = "Wind: " + day1Wind + "MPH";
//     humidOne.textContent = "Humidity: " + day1Humid + "%";
//     imageOne.src = day1weatherimageLink;
//     imageOne.setAttribute("style", "display: inline");

//     let day2Temp = dataForFiveDay.daily[8].temp.max;
//     let day2Wind = dataForFiveDay.daily[2].wind_speed;
//     let day2Humid = dataForFiveDay.daily[2].humidity;
//     let day2weatherimage = dataForFiveDay.daily[2].weather[0].icon;
//     let day2weatherimageLink = "https://openweathermap.org/img/w/" + day2weatherimage + ".png";
//     dateTwo.textContent = moment().add(2,'days').format('MM/DD/YYYY')
//     tempTwo.textContent = "Temp: " + day2Temp + "°F";
//     windTwo.textContent = "Wind: " + day2Wind + "MPH";
//     humidTwo.textContent = "Humidity: " + day2Humid + "%";
//     imageTwo.src = day2weatherimageLink;
//     imageTwo.setAttribute("style", "display: inline");

//     let day3Temp = dataForFiveDay.daily[16].temp.max;
//     let day3Wind = dataForFiveDay.daily[3].wind_speed;
//     let day3Humid = dataForFiveDay.daily[3].humidity;
//     let day3weatherimage = dataForFiveDay.daily[3].weather[0].icon;
//     let day3weatherimageLink = "https://openweathermap.org/img/w/" + day3weatherimage + ".png";
//     dateThree.textContent = moment().add(3,'days').format('MM/DD/YYYY')
//     tempThree.textContent = "Temp: " + day3Temp + "°F";
//     windThree.textContent = "Wind: " + day3Wind + "MPH";
//     humidThree.textContent = "Humidity: " + day3Humid + "%";
//     imageThree.src = day3weatherimageLink;
//     imageThree.setAttribute("style", "display: inline");

//     let day4Temp = dataForFiveDay.daily[24].temp.max;
//     let day4Wind = dataForFiveDay.daily[4].wind_speed;
//     let day4Humid = dataForFiveDay.daily[4].humidity;
//     let day4weatherimage = dataForFiveDay.daily[4].weather[0].icon;
//     let day4weatherimageLink = "https://openweathermap.org/img/w/" + day4weatherimage + ".png";
//     dateFour.textContent = moment().add(4,'days').format('MM/DD/YYYY')
//     tempFour.textContent = "Temp: " + day4Temp + "°F";
//     windFour.textContent = "Wind: " + day4Wind + "MPH";
//     humidFour.textContent = "Humidity: " + day4Humid + "%";
//     imageFour.src = day4weatherimageLink;
//     imageFour.setAttribute("style", "display: inline");

//     let day5Temp = dataForFiveDay.daily[32].temp.max;
//     let day5Wind = dataForFiveDay.daily[5].wind_speed;
//     let day5Humid = dataForFiveDay.daily[5].humidity;
//     let day5weatherimage = dataForFiveDay.daily[5].weather[0].icon;
//     let day5weatherimageLink = "https://openweathermap.org/img/w/" + day5weatherimage + ".png";
//     dateFive.textContent = moment().add(5,'days').format('MM/DD/YYYY')
//     tempFive.textContent = "Temp: " + day5Temp + "°F";
//     windFive.textContent = "Wind: " + day5Wind + "MPH";
//     humidFive.textContent = "Humidity: " + day5Humid + "%";
//     imageFive.src = day5weatherimageLink;
//     imageFive.setAttribute("style", "display: inline");
};

function storeData(){
    let prevCity = JSON.parse(localStorage.getItem("cities"));
    if (prevCity === null){
        cityArray.push(city);
    
    } else {
        cityArray = prevCity;
        cityArray.unshift(city);
    }
    // cityArray.splice(5);
    localStorage.setItem("cities", JSON.stringify(cityArray));

    // cityArray = [];
    preCities();
}

function preCities() {
    PCSButtons.innerHTML = "";

    let preCity = JSON.parse(localStorage.getItem("cities"));
    if(preCity !== null){
        for (let i = 0; i < preCity.length; i++) {
            let button = document.createElement("button");
            button.innerHTML = preCity[i];
            button.classList.add("btn", "btn-info", "btn-lg", "btn-block");
            PCSButtons.appendChild(button);
        }
    }
}

preCities();
search.addEventListener("click", function(event) {
    event.preventDefault()
    city = document.querySelector("#search-city").value;
    getData();
});

// prevCityButtons.addEventListener("click", function(event){
//     city = event.target.innerText;
//     getData();
// });