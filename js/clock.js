const clockContainer = document.querySelector("#js-clock");
const clockContent = document.querySelector("#js-clock-content");

getTime=()=>{
    const DATE = new Date();
    const MINUTES = DATE.getMinutes();
    const HOURS = DATE.getHours();
    const SECOUNDS = DATE.getSeconds();

    clockContent.innerText = `${HOURS < 10 ? `0${HOURS}` : HOURS}:${MINUTES < 10 ? `0${MINUTES}` : MINUTES}:${SECOUNDS < 10 ? `0${SECOUNDS}` : SECOUNDS}`;
};

init = () => {
    getTime();
    setInterval(getTime, 1000);
}

init();