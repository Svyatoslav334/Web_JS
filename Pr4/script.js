const ourCoords = {
    latitude: 48.94321,
    longitude: 24.73380
};

let watchId = null;

document.addEventListener('DOMContentLoaded', getMyLocation);

function getMyLocation() {
    if (navigator.geolocation) {
        document.getElementById("watch").onclick = watchLocation;
        document.getElementById("clearWatch").onclick = clearWatch;
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let accuracy = position.coords.accuracy;

    let div = document.getElementById("location");
    div.innerHTML = `Ви знаходитесь: Широта ${latitude}, Довгота ${longitude} <br> (Точність: ${accuracy} м)`;

    let km = computeDistance(position.coords, ourCoords);
    let distanceDiv = document.getElementById("distance");
    distanceDiv.innerHTML = `Ви знаходитесь на відстані ${km.toFixed(3)} км від Коледжу`;
}

// Функція для відображення помилок [cite: 71]
function displayError(error) {
    const errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is not available",
        3: "Request timed out"
    };
    let errorMessage = errorTypes[error.code];
    if (error.code === 0 || error.code === 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    let div = document.getElementById("location");
    div.innerHTML = errorMessage;
}

function computeDistance(startCoords, destCoords) {
    let startLatRads = degreesToRadians(startCoords.latitude);
    let startLongRads = degreesToRadians(startCoords.longitude);
    let destLatRads = degreesToRadians(destCoords.latitude);
    let destLongRads = degreesToRadians(destCoords.longitude);
    let Radius = 6371;

    let distance = Math.acos(Math.sin(startLatRads) * Math.sin(destLatRads) +
                   Math.cos(startLatRads) * Math.cos(destLatRads) *
                   Math.cos(startLongRads - destLongRads)) * Radius;
    return distance;
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI) / 180;
}

// Частина 2: Функції стеження [cite: 224, 227]
function watchLocation() {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError);
}

function clearWatch() {
    if (watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
        document.getElementById("location").innerHTML += "<br><b>Стеження зупинено.</b>";
    }
}