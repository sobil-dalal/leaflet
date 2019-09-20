// Creating Base Icon variabe
var LeafIcon = L.Icon.extend({
  options: {
    iconSize: [33, 45],
    iconAnchor: [16.25, 45],
    popupAnchor: [-1.5, -25]
  }
});

// Creating custom Icons 
var hqIcon = new LeafIcon({
    iconUrl: 'images\\\Icons\\\HQ-marker-100.png'
  }),
  currentLocationIcon = new LeafIcon({
    iconUrl: 'images\\\Icons\\\currentLocation-marker-100.png'
  }),
  itHeadOfficeIcon = new LeafIcon({
    iconUrl: 'images\\\Icons\\\Dehaat_IT_100.png'
  });