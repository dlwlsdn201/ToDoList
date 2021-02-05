const WEATHER = document.querySelector("#js-weather");
const tempBLOCK = WEATHER.querySelector('.temp');
const placeBLOCK = WEATHER.querySelector('.place');
const API_KEY = 'b8dbfe24ff72d50050db7e51e0dd5b77';
const COORDS = 'coords';
function getWeather(lat, lng){
// fetch를 이용하여 데이터 가져오기
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(
        function(response){
            return response.json();
        }).then(function(json){
            const temperature = (json.main.temp).toFixed(1);
            const place = json.name;
            const temperatureSPAN = document.createElement('span');
            const temperatureICON = document.createElement('i');
            const placeSPAN = document.createElement('span');
            const PlaceICON = document.createElement('i');
            
            temperatureSPAN.innerText = `${temperature}℃`
            
            placeSPAN.innerText = `${place}`;
            
            temperatureSPAN.classList.add('temp');
            temperatureICON.classList.add('fas', getWeatherIcon(temperature));
            placeSPAN.classList.add('place');
            PlaceICON.classList.add('fas','fa-map-marker-alt');
            placeBLOCK.appendChild(PlaceICON);
            placeBLOCK.appendChild(placeSPAN);
            tempBLOCK.appendChild(temperatureICON);
            tempBLOCK.appendChild(temperatureSPAN);
            setColorWeatherIcon(temperatureICON, temperature);
        }
        );
}

function setColorWeatherIcon(TempIcon, temp){
    if(temp < 10){
            return TempIcon.style.color = '#0f45f8';
        }else if(10 <= temp && temp < 17){
            return TempIcon.style.color = '#1975dd';
        }else if(17 <= temp && temp < 22){
            return TempIcon.style.color = '#d9db3b';
        }else if(22 <= temp && temp <26){
            return TempIcon.style.color = '#e69d31';
        }else{
            return TempIcon.style.color = '#d82a2a';
    }
}

function getWeatherIcon(temp){
    if(temp < 10){
        return 'fa-temperature-low';
    }else if(10 <= temp && temp < 17){
        return 'fa-temperature-quarter';
    }else if(17 <= temp && temp < 22){
        return 'fa-temperature-half';
    }else if(22 <= temp && temp <26){
        return 'fa-temperature-three-quaters';
    }else{
        return 'fa-temperature-high';
    }
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    // getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log('Error!');
}

function askForCoord(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoord();
    }else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


init=()=>{
    loadCoords();
}

init();