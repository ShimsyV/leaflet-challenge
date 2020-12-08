var myMap = L.map("map", {
    center: [44.53155795563836, -102.61109623371827],
    zoom: 5
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
d3.json(link, function (response) {
    var features = response.features

    console.log(features)

    //Create foreach function response, create the popup
    features.forEach(function (data) {
        //create variable for geometry
        var geometry = data.geometry;
        //create variable for properties
        var properties = data.properties;

        console.log("Geometry", geometry)
        console.log("Properties", properties.mag)

        var magnitude = properties.mag
        var depth = geometry.coordinates[2];

        //Reading the depth

        console.log("Depth ", depth)

        //creating circle marker
        var myCircle = L.circle([geometry.coordinates[1], geometry.coordinates[0]], {
            radius: magnitude * 7500,
            color: 'black',
            fillColor: getColor(geometry.coordinates[2]),
            fillOpacity: .85,
            weight: 1
        }).bindPopup(`<h3>${properties.title}</h3><hr>
        <p>Magnitude:${magnitude}<br>
        Depth:${depth}</p>`).addTo(myMap);

    });

    //Add a legend to the marker
    var legend = L.control({ position: 'bottomright' });
    legend.onAdd = function (myMap) {

        var div = L.DomUtil.create('div', 'info legend'),
            depthArray = [-10, 10, 30, 50, 70, 90],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < depthArray.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(depthArray[i] + 1) + '  "></i> ' + '&nbsp&nbsp&nbsp' +
                depthArray[i] + (depthArray[i + 1] ? '&ndash;' + depthArray[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(myMap)

});

function getColor(depth) {
    return depth > 90 ? '#f03535' :
        depth > 70 ? '#f27227' :
            depth > 50 ? '#f6ac17' :
                depth > 30 ? '#f0de33' :
                    depth > 10 ? '#a1f64c' :
                        '#dcfcbc';

}





