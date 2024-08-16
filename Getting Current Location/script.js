// for getting location we use navigator function which is a built-in func and provide various methods too



const button = document.getElementById('get-location');

 

function gotLocation(position) {
    console.log(position);
}

function failedToGet() {
    console.log("There was some issue");
}

button.addEventListener("click", async () => {

    // const result=navigator.geolocation.getCurrentPosition((position)=>{},()=>{});
    //()=>{} success callback function, ()=>{} error callback function


    navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});




// using weather api

const btn_api = document.getElementById('get-location-api');

async function getData(lat, long) {
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=b2c9073996874b97a98194448241408&q=${lat}, ${long} &aqi=yes`);
  return await promise.json();
}

async function getLocationThroughAPI() {
  try {
    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

    const output = await getData(position.coords.latitude, position.coords.longitude);

    console.log(output);

    // Example: Update an element with the city name
    const cityNameElement = document.getElementById('city-name');
    cityNameElement.innerText = output.location.name;

  } catch (error) {
    console.error('Error getting location or weather data:', error);
  }
}

btn_api.addEventListener('click', getLocationThroughAPI);











