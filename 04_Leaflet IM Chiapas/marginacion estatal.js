// Mandar llamar la petición de mapa de openstreetmap
var map = L.map('map').setView([16.652539, -92.587429],8);
L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: 'Map Data © OpenStreetMap contributors'
}).addTo(map);


function getColor(b) {
      return b == 'Muy alto' ? '#f03b20' :
             b == 'Alto' ? '#feb24c' :
             b == 'Medio' ? '#ffeda0' :
             b == 'Bajo' ? '#addd8e' :
             b == 'Muy bajo' ? '#31a354' :
                          'black';
    }
    function style(feature) {
      return {
          fillColor: getColor(feature.properties.GM),
          weight: 0.5,
          opacity: 1.5,
          color: 'black',
          fillOpacity: 1
      };
    }
L.geoJson(GM, {style: style}).addTo(map);

// Agregando POPUPS a la capa GeoJSON //
function popUpInfo(feature, layer) { 
    if (feature.properties && feature.properties.GM){
        layer.bindPopup(feature.properties.GM);  
    }
  }
   
  L.geoJson(GM, { 
    style: style, onEachFeature: popUpInfo 
    }).addTo(map);