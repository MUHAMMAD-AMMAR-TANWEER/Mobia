 //Map Initialization
 var startPoint = [51.5, -0.09];
 var map = L.map("map", {editable: true}).setView(startPoint, 13);
 var markers = [];
 var polygon = [];
var counter = 0
 var greenIcon = L.icon({
  iconUrl: 'SCI.png',
  shadowUrl: '',

  iconSize:     [38, 95], // size of the icon
  shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
 
 // osm Layer
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 // leaflet search
 L.Control.geocoder().addTo(map);
 
 //Marker
 var circle = L.circle([51.501, -0.11], {

   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.5,
   radius: 500
 }).addTo(map);
 
// ------------------------------------------

function addPolygon() {
  var line = L.polygon([
    [51.5, -0.09],
    [51.503, -0.06],
    [51.52 , -0.047],
  ], {
    color: "red",
    fillColor: "red"
  }).addTo(map).bindPopup("Here is Polygon!");
  line.enableEdit();
  
  map.on('editable:vertex:ctrlclick editable:vertex:metakeyclick', function (e) {
    e.vertex.continue();
  });
  polygon.push(line)
}

var popup = L.popup()
.setLatLng([51.513, -0.09])
.setContent("London.")
.openOn(map);

// greenIcon.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

map.on('click', onMapClick);




function onMapClick(e) {
  counter+=1
  console.log(e)
  var marker = new L.Marker(e.latlng, {draggable:true}).bindPopup(`Marker is ${counter}`);
  // counter+=1
  map.addLayer(marker);
  markers[marker._leaflet_id] = marker;
  console.log(markers);
  $('#overlay > ul').append('<li>Marker ' + String(counter) +' - <a href="#" class="remove" id="' + marker._leaflet_id + '">remove</a></li>');
// Remove a marker
$('.remove').on("click", function() {
  // Remove the marker
  map.removeLayer(markers[$(this).attr('id')]);
  
  // Remove the link
  $(this).parent('li').remove();
  
  // Remove the marker from the array
  delete markers[$(this).attr('id')]; 
  
});

};


// function addmarker() {

//   var newMarker = new L.marker(["51.5", "-0.09"],{
//     draggable: true,
//     autoPan: true,
//     icon: greenIcon
//   }).bindPopup("Delete this marker </br> <button>delete</button>");
//   console.log("sssssssssssssssssss",newMarker);
//   marker.push(newMarker);
//   console.log("latitude ==>",newMarker["_leaflet_id"]
//   );
//   console.log(marker);
//   map.addLayer(newMarker)
// }


// function removeMarker() {
//   console.log(marker[marker.length-1]["_leaflet_id"])
//   map.removeLayer(marker[marker.length-1]);
//   marker.pop()
// }
// map.removeLayer(marker)

function deletePolygon() {
  console.log(polygon[polygon.length-1]["_leaflet_id"])
  map.removeLayer(polygon[polygon.length-1]);
  polygon.pop()
}

