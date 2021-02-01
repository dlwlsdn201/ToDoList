const WEHATER = document.querySelector("#js-weather");
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
            
            WEHATER.innerText = `${temperature}℃ ${place}`
            console.log(json);
        }
        );
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