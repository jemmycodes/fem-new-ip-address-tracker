"use strict";

const search = document.querySelector("#search-icon");
const input = document.querySelector("#ip-value");
let ipAddress = document.querySelector("#ip-address");
let userLocation = document.querySelector("#location");
let timeZone = document.querySelector("#time-zone");
let ISP = document.querySelector("#isp");
let mapContainer = document.querySelector("#map-container");

const getLocationOnLoad = async () => {
  const response = await fetch(
    ` https://geo.ipify.org/api/v2/country,city?apiKey=at_AvGniyM6zeeYwQuYqR84vMpz4NvRH&ipAddress`
  );
  const data = await response.json();

  getMap(data.location.lat, data.location.lng);
  renderInfo(data);
};

const displaySearch = async () => {
  try {
    if (!input.value) {
      alert("Input your IP Address");
    }
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_AvGniyM6zeeYwQuYqR84vMpz4NvRH&ipAddress=${input.value}`
    );
    const data = await response.json();

    getMap(data.location.lat, data.location.lng);
    renderInfo(data);
  } catch (error) {
    alert("Pls input a correct IP Address");
  }
};

function initializingMap() {
  // call this method before you initialize your map.
  const container = L.DomUtil.get("map");
  if (container != null) {
    container._leaflet_id = null;
  }
}

const getMap = (lat, long) => {
  initializingMap();
  const map = L.map("map").setView([lat, long], 13);

  const locationIcon = L.icon({
    iconUrl: "../images/icon-location.svg",
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker([lat, long], { icon: locationIcon })
    .addTo(map)
    .bindPopup("You are here")
    .openPopup();
};

const renderInfo = (data) => {
  ipAddress.textContent = data.ip;
  timeZone.textContent = data.location.timezone;
  ISP.textContent = data.isp;
  userLocation.textContent = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
};

search.addEventListener("click", displaySearch);
window.addEventListener("load", getLocationOnLoad);
