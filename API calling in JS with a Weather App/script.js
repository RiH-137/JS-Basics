const button = document.getElementById('search-button');
const input=document.getElementById('city-input');
const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');

async function getData(cityName){
   const promise= await fetch(`http://api.weatherapi.com/v1/current.json?key=b2c9073996874b97a98194448241408&q=${input.value}&aqi=yes`)
   return await promise.json();

}

//original api-->//http://api.weatherapi.com/v1/current.json?key=b2c9073996874b97a98194448241408&q=London&aqi=yes




button.addEventListener("click", async () => {
    try {
      const value = input.value;
      const result = await getData(value);
      cityName.innerText = `${result.location.name},${result.location.country}`;
      cityTime.innerText = result.location.localtime;
      cityTemp.innerText = result.current.temp_c;
    } 
    catch (error) {
      console.error('Error fetching weather data:', error);
      // You can display an error message to the user here
      cityTemp.innerText = 'Error: Unable to find weather data.';
    }
  });
  











