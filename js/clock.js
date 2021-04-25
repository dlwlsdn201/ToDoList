const dateContainer = document.querySelector("#date");
const clockContainer = document.querySelector("#clock");
const dateContent = document.querySelector("#js-date-content");
const clockContent = document.querySelector("#js-clock-content");

getTime=()=>{
    const DATE = new Date();
    const MINUTES = DATE.getMinutes();
    const HOURS = DATE.getHours();
    const SECOUNDS = DATE.getSeconds();
    clockContent.innerText = `${HOURS < 10 ? `0${HOURS}` : HOURS}:${MINUTES < 10 ? `0${MINUTES}` : MINUTES}:${SECOUNDS < 10 ? `0${SECOUNDS}` : SECOUNDS}`;
};

getDate=()=>{
    const Week = ['일','월','화','수','목','금','토','일'];
    const DATE = new Date();
    const MONTH = DATE.getMonth() + 1;
    const DAY = DATE.getDate();
    const YEAR = DATE.getFullYear();
    const DayOfTheWeek = DATE.getDay();
    console.log(DATE);
    dateContent.innerText = `${YEAR}년 ${MONTH}월 ${DAY}일 (${Week[DayOfTheWeek]})`;
};




init = () => {
    getTime();
    getDate();
    setInterval(getTime, 1000);
}

init();