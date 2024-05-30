// logic.js

// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 5); // Centered on San Francisco

// Add a tile layer (the background map image) from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to determine the color of the marker based on the magnitude of the earthquake
function getColor(magnitude) {
  return magnitude > 5 ? '#f06b6b' :
         magnitude > 4 ? '#f0a76b' :
         magnitude > 3 ? '#f3ba4d' :
         magnitude > 2 ? '#f3db4d' :
         magnitude > 1 ? '#e1f34d' :
                          '#b7f34d';
}

// Function to create a marker with custom styling
function createMarker(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: feature.properties.mag * 3, // Radius proportional to magnitude
    fillColor: getColor(feature.properties.mag),
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  });
}

// Function to fetch earthquake data and plot on the map
function fetchEarthquakeData() {
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  d3.json(url).then(function(data) {
    // Create a GeoJSON layer with the data
    L.geoJson(data, {
      pointToLayer: createMarker, // Use custom marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
          "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
          "<p>Magnitude: " + feature.properties.mag + "</p>");
      }
    }).addTo(map);
  }).catch(function(error) {
    console.error("Error fetching earthquake data: ", error);
  });
}

// Fetch and display the earthquake data
fetchEarthquakeData();

project/
├── index.html
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── logic.js


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Leaflet Earthquake Visualization</title>

  <!-- Leaflet CSS -->
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />

  <!-- Custom CSS -->
  <link rel="stylesheet" type="text/css" href="static/css/style.css">
</head>

<body>

  <!-- The div that holds our map -->
  <div id="map"></div>

  <!-- Leaflet JS -->
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
  <!-- D3 JavaScript -->
  <script src="https://d3js.org/d3.v7.min.js"></script>
  <!-- Custom JavaScript -->
  <script type="text/javascript" src="static/js/logic.js"></script>
</body>

</html>


/* style.css */
body {
  padding: 0;
  margin: 0;
}

#map,
body,
html {
  height: 100%;
}

// logic.js

// Initialize the map
var map = L.map('map').setView([37.7749, -122.4194], 5); // Centered on San Francisco

// Add a tile layer (the background map image) from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to determine the color of the marker based on the magnitude of the earthquake
function getColor(magnitude) {
  return magnitude > 5 ? '#f06b6b' :
         magnitude > 4 ? '#f0a76b' :
         magnitude > 3 ? '#f3ba4d' :
         magnitude > 2 ? '#f3db4d' :
         magnitude > 1 ? '#e1f34d' :
                          '#b7f34d';
}

// Function to create a marker with custom styling
function createMarker(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: feature.properties.mag * 3, // Radius proportional to magnitude
    fillColor: getColor(feature.properties.mag),
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  });
}

// Function to fetch earthquake data and plot on the map
function fetchEarthquakeData() {
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  d3.json(url).then(function(data) {
    // Create a GeoJSON layer with the data
    L.geoJson(data, {
      pointToLayer: createMarker, // Use custom marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
          "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
          "<p>Magnitude: " + feature.properties.mag + "</p>");
      }
    }).addTo(map);
  }).catch(function(error) {
    console.error("Error fetching earthquake data: ", error);
  });
}

// Fetch and display the earthquake data
fetchEarthquakeData();

// logic.js

// Initialize the map
var map = L.map('map').setView([20, 0], 2); // Centered on the world with a broader view

// Add a tile layer (the background map image) from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Function to determine the color of the marker based on the depth of the earthquake
function getColor(depth) {
  return depth > 90 ? '#ea2c2c' :
         depth > 70 ? '#ea822c' :
         depth > 50 ? '#ee9c00' :
         depth > 30 ? '#eecc00' :
         depth > 10 ? '#d4ee00' :
                      '#98ee00';
}

// Function to create a marker with custom styling
function createMarker(feature, latlng) {
  return L.circleMarker(latlng, {
    radius: feature.properties.mag * 4, // Radius proportional to magnitude
    fillColor: getColor(feature.geometry.coordinates[2]), // Color based on depth
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
  });
}

// Function to fetch earthquake data and plot on the map
function fetchEarthquakeData() {
  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

  d3.json(url).then(function(data) {
    // Create a GeoJSON layer with the data
    L.geoJson(data, {
      pointToLayer: createMarker, // Use custom marker
      onEachFeature: function(feature, layer) {
        layer.bindPopup("<h3>" + feature.properties.place +
          "</h3><hr><p>" + new Date(feature.properties.time) + "</p>" +
          "<p>Magnitude: " + feature.properties.mag + "</p>" +
          "<p>Depth: " + feature.geometry.coordinates[2] + " km</p>");
      }
    }).addTo(map);
  }).catch(function(error) {
    console.error("Error fetching earthquake data: ", error);
  });
}

// Function to create a legend for the map
function createLegend() {
  var legend = L.control({ position: 'bottomright' });

  legend.onAdd = function(map) {
    var div = L.DomUtil.create('div', 'info legend'),
      depthGrades = [0, 10, 30, 50, 70, 90],
      labels = [];

    // Loop through our depth intervals and generate a label with a colored square for each interval
    for (var i = 0; i < depthGrades.length; i++) {
      div.innerHTML +=
        '<i style="background:' + getColor(depthGrades[i] + 1) + '"></i> ' +
        depthGrades[i] + (depthGrades[i + 1] ? '&ndash;' + depthGrades[i + 1] + '<br>' : '+');
    }

    return div;
  };

  legend.addTo(map);
}

// Fetch and display the earthquake data
fetchEarthquakeData();

// Create and add the legend to the map
createLegend();
