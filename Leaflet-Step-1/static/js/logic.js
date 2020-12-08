var myMap = L.map("map", {
    center: [44.53155795563836, -102.61109623371827],
    zoom: 4
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "streets-v11",
    accessToken: API_KEY
}).addTo(myMap);

var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


//Use D3 to get a response from the geojson layer
d3.json(link, function (data) {
    console.log(data.features);
    // Once we get a response, create a geoJSON layer containing the features array and add a popup for each marker
    // then, send the layer to the createMap() function.
    var earthquakes = L.geoJSON(data.features, {
        onEachFeature: addPopup
    });


});


