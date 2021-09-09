console.log(navigator.appCodeName);
console.log(navigator.appName);
console.log(navigator.cookieEnabled);
console.log(navigator.appVersion);
console.log(navigator.platform);
console.log(navigator.onLine);
console.log(navigator.product);
console.log(navigator.language);
let x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

console.log(`The width of the screen is : ${screen.width}`);
console.log(`The height of the screen is : ${screen.height}`);
console.log(`The available width of the screen is : ${screen.availWidth}`);
console.log(`The available height of the screen is : ${screen.availHeight}`);
console.log(`The Color or Pixel Depth of the screen is : ${screen.colorDepth}`);
document.cookie = ("favColor = RED; expires = oct 22 2032 12:30:00 GMT+0200; path = /");
console.log(document.cookie);

