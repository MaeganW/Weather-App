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
        url: "http://api.wunderground.com/api/657659e007fc1bed/conditions/q/CA/San_Francisco.json",
        success: function (obj) {
            console.log(obj.current_observation.temp_f);

        }
    });
}


