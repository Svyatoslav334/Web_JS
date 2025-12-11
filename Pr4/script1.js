let map;
let myMarker;

document.addEventListener('DOMContentLoaded', () => {
    initMap();
});

function initMap() {
    map = L.map('map').setView([48.9226, 24.7111], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    startTracking();
}

function startTracking() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(updateLocation, handleError);
    } else {
        alert("Ваш браузер не підтримує геолокацію!");
    }
}

function updateLocation(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const accuracy = position.coords.accuracy;
    if (myMarker) {
        myMarker.setLatLng([lat, lng]);
        myMarker.setPopupContent(`<b>Я тут!</b><br>Точність: ${accuracy} м`)
                .openPopup();
    } else {
        myMarker = L.marker([lat, lng]).addTo(map);
        myMarker.bindPopup(`<b>Я тут!</b><br>Точність: ${accuracy} м`).openPopup();
        map.setView([lat, lng], 15);
    }
}

function goToDestination() {
    let latInput = parseFloat(document.getElementById("destLat").value);
    let lngInput = parseFloat(document.getElementById("destLng").value);

    if (!isNaN(latInput) && !isNaN(lngInput)) {
        map.flyTo([latInput, lngInput], 14);

        let destMarker = L.marker([latInput, lngInput]).addTo(map);
        destMarker.bindPopup("<b>Пункт призначення</b>").openPopup();
    } else {
        alert("Введіть правильні числа координат!");
    }
}

function handleError(error) {
    console.warn(`ERROR(${error.code}): ${error.message}`);
    if (error.code === 1) {
        alert("Будь ласка, дозвольте доступ до геолокації, щоб бачити себе на карті.");
    }
}