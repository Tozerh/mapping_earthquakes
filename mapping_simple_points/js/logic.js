// checks to see if our code is working.
console.log("working");

// creates map object
// set lat long and starting zoom
// var myMap = L.map"map",{
//     center: [45.52,-122.67],
//     zoom: 13
// };


let map = L.map('mapid').setView([40.7, -94.5], 4);

// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets=v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'your.mapbox.access.token'
// }).addTo(map);

//  Add a circle marker to the map for Los Angeles, California.
let marker = L.circle([34.0522, -118.2437],{
    radius: 100,
    color:"black",
    fillColor:"yellow" 
}).addTo(map);

// adds a circle marker to the map using circleMarker function for LA, CA.

L.circleMarker([34.0522, -1182437],{
    radius: 300,
    color: "black",
    filLColor: '#ffffa1'
}).addTo(map);

// //  creates the tile layer that will be the background of our map.
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//  creates a DARK tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// adds our 'graymap' tile layer to the map.
streets.addTo(map);