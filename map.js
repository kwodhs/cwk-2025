function myMap() {
    var grandProp= {
        center:new google.maps.LatLng(36.0997795,-112.1228058),
        zoom:10,
    };
    var glenProp= {
        center:new google.maps.LatLng(36.8644483,-111.5982593),
        zoom:10,
    };
    var sylakProp= {
        center:new google.maps.LatLng(43.0101947,46.8157642),
        zoom:10,
    };
    var colcaProp= {
        center:new google.maps.LatLng(-15.6574411,-72.1797266),
        zoom:10,
    };
    var uvacProp= {
        center:new google.maps.LatLng(43.3564319,19.9577047),
        zoom:10,
    };
    var grand = new google.maps.Map(document.getElementById("grandMap"),grandProp);
    var glen = new google.maps.Map(document.getElementById("glenMap"),glenProp);
    var sylak = new google.maps.Map(document.getElementById("sylakMap"),sylakProp);
    var colca = new google.maps.Map(document.getElementById("colcaMap"),colcaProp);
    var uvac = new google.maps.Map(document.getElementById("uvacMap"),uvacProp);
}