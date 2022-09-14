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