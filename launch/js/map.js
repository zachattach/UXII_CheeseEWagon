$(document).ready(function(){
  var philadelphia = new google.maps.LatLng(39.956549, -75.197101);
  createMap(philadelphia);

});


function createMap(city) {
  var mapOptions = {
    center: city,
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
    // other options are here:
    // http://www.w3schools.com/googleAPI/ref_mapoptions.asp
  };

  var map = new google.maps.Map(document.getElementById("map"),mapOptions);

  var icon = 'images/icon-cheese.png';

  var marker = new google.maps.Marker({
    position: city,
    map: map,
    title: 'Cheese E. Wagon',
    animation: google.maps.Animation.DROP,
    icon: icon
  });

}
