 //Map Initialization
 var startPoint = [51.5, -0.09];
 var map = L.map("map", {editable: true}).setView(startPoint, 13);
 var marker = [];

 

 //Marker Initialize
//  var marker = L.marker([51.5, -0.09]).addTo(map);
// var marker = new L.marker([51.5, -0.09],{
//   draggable: true,
//   autoPan: true
// }).addTo(map);
 
 // osm Layer
 L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
     maxZoom: 19,
     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
 }).addTo(map);
 // leaflet search
 L.Control.geocoder().addTo(map);
 
 //Marker
 var circle = L.circle([51.501, -0.11], {
  // draggable: true,
  // autoPan: true,
   color: 'blue',
   fillColor: 'blue',
   fillOpacity: 0.5,
   radius: 500
 }).addTo(map);
 
// ------------------------------------------

var line = L.polygon([
  [51.508, -0.08],
  [51.503, -0.06],
  [51.52 , -0.047],
]).addTo(map);
line.enableEdit();
// var line2 = L.polygon([
// [
//   [43.1239, 1.244],
//   [43.123, 1.253],
//   [43.1252, 1.255],
//   [43.1250, 1.251],
// ],
// [
//   [43.1251, 1.249],
//   [43.1252, 1.246],
// ]
// ]).addTo(map);
// line2.enableEdit();
map.on('editable:vertex:ctrlclick editable:vertex:metakeyclick', function (e) {
  e.vertex.continue();
});


//  var polygon = L.polygon([
//    [51.508, -0.08],
//    [51.503, -0.06],
//    [51.52 , -0.047]
//  ]).addTo(map);
 
// polygon.enableEdit();

// polygon.on('click', function (e) {
//   if ((e.originalEvent.ctrlKey || e.originalEvent.metaKey) && this.editEnabled()) {
//     this.editor.newHole(e.latlng);
//   }
// });

 marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
 circle.bindPopup("I am a circle.");
 polygon.bindPopup("I am a polygon.");
 
 var popup = L.popup()
     .setLatLng([51.513, -0.09])
     .setContent("I am a standalone popup.")
     .openOn(map);

// function AddHomeWorker() {
//   alert("hello")
//   const homemarker = L.marker([25.3791924, 55.4765436])
//   marker.bindPopup("This is our home marker", {
//   })
//   L.circle([51.501, -0.11], {
//     color: 'blue',
//     fillColor: 'blue',
//     fillOpacity: 0.5,
//     radius: 500
//   }).addTo(map);
//   homemarker.addTo(map)
// }
// var marker = new Array();


function addmarker() {

  var newMarker = new L.marker(["51.5", "-0.09"],{
    draggable: true,
    autoPan: true
  });
  console.log("sssssssssssssssssss",newMarker);
  // console.log("marker",marker)
  marker.push(newMarker);
  console.log("latitude ==>",newMarker["_leaflet_id"]
  );
  console.log(marker);
  map.addLayer(newMarker)
}


function removeMarker() {
  
  // var marker = new L.marker([51.5, -0.09],{
  //   draggable: true,
  //   autoPan: true
  // }).addTo();
  // arrId.push(marker[0]["_leaflet_id"])
  console.log(marker[marker.length-1]["_leaflet_id"])
  // console.log(marker[1]["_leaflet_id"])
  
  map.removeLayer(marker[marker.length-1]);
  marker.pop()
//  marker.bindPopup('Hello World<br><button >delete marker</button>.').openPopup();

  // alert("marker is deleted!")
  // var marker = L.marker([51.5, -0.09],{
  //   draggable: true,
  //   autoPan: true
  // }).addTo(map);
  // marker.remove()
  // removeMarker()
}

map.removeLayer(marker)
