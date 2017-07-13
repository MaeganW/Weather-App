var latitude;
var longitude;
var state;
var city;
var temp;

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
        url: "http://api.wunderground.com/api/657659e007fc1bed/geolookup/q/" + latitude + "," + longitude + ".json",
        success: function (obj) {
            $(".location-display").html(obj.location.city + " , " + obj.location.state);

            state = obj.location.state;
            var unformattedCity = obj.location.city;
            city = unformattedCity.replace("/ /g,_");
        }
    });
}

function getWeather() {
    $.ajax({
        url: "http://api.wunderground.com/api/657659e007fc1bed/conditions/q/" + state + "/" + city + ".json", success: function(cityObj){
            console.log(cityObj);
            console.log(cityObj.current_observation.temp_f);
            
            temp = cityObj.current_observation.temp_f;
            $(".temp-display").html(temp + " F");
        }
    });
}
