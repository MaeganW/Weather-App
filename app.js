var latitude;
var longitude;

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
    console.log("latitude: " + latitude + " longitude: " + longitude);
    
    $.ajax({
        url: "https://api.darksky.net/forecast/1c80bf92aadd3db44c05ce1c48912649/" + latitude + "," + longitude,
        success: function (obj) {
            console.log("success");
//            var temp = obj.currently.temperature;
//            console.log(temp);
        }
    });
}


$(document).ready(function () {

    
});



