// Set up initial map center and zoom level
var map = L.map('map', {
    center: [50.0, -95.42], // EDIT latitude, longitude to re-center map
    zoom: 4,  // EDIT from 1 to 18 -- decrease to zoom out, increase to zoom in
    scrollWheelZoom: true,
    tap: true
});

/* Control panel to display map layers */
var controlLayers = L.control.layers(null, null, {
    position: "topright",
    collapsed: false,
}).addTo(map);

// display Carto basemap tiles with light features and labels
var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>',
}); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
controlLayers.addBaseLayer(light, 'Light basemap');

/* Stamen colored terrain basemap tiles with labels */
var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
    attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.',
}).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
controlLayers.addBaseLayer(terrain, 'Terrain basemap');

let csvString;
let markers = [];
// includePredicate is a function that takes in 1 argument formated as a data row from the csv and returns true or false. True indicates that row is displayed, false gets ignored.
function setupMap(includePredicate) {
    function useCsv() {

        // Use PapaParse to convert string to array of objects
        var data = Papa.parse(csvString, { header: true, dynamicTyping: true }).data;

        for (let i = markers.length - 1; i >= 0; i--) {
            map.removeLayer(markers[i]);
        }
        markers = [];

        // For each row in data, create a marker and add it to the map
        // For each row, columns `Lat`, `Lng`, and `Title` are required
        for (var i in data) {
            var row = data[i];

            // IF ROW ... =XXX () 
            console.log(row);
            if (includePredicate(row)) {
                var marker = L.marker([row.Lat, row.Lng], {
                    opacity: 1,
                }).bindPopup(`<h3>${row.name}</h3> <hr> <h7>Alltrails Link: <a href="${row.trail_url}" target="_blank">${row.trail_url}</a></h7>`, {
                    maxWidth: "auto"
                });

                marker.addTo(map);
                markers.push(marker);
                var group = L.featureGroup(markers);
                map.fitBounds(group.getBounds());
            }
        }

    }

    // Read markers data from data.csv
    if(csvString) {
        useCsv();
    } else {
        $.get('./webpage_summary_copy.csv', (csv) => {
            csvString = csv;
            useCsv();
        });
    }
}
