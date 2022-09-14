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