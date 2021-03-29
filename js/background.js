const BODY = document.querySelector("body");

const IMG_NUMBER = 5;

handleImgLoad = () => {
    console.log('finished backgruond loading!');
}


paintImageMobile = (imgNumber) => {
    const image = new Image();
    image.src = `./images/mobile/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    BODY.appendChild(image);
}

paintImage = (imgNumber) => {
    const image = new Image();
    image.src = `./images/bg/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    BODY.appendChild(image);
}

setRandomNumber = () =>{
    const number = Math.floor(Math.random() * IMG_NUMBER); 

    return number;
}


function init(){
    const randomNumber = setRandomNumber();
    const deviceWidth = window.screen.width;

    //디바이스 스크린 크기에 따른 배경화면 적용
    (deviceWidth > 500? paintImage(randomNumber) : paintImageMobile(randomNumber));
}

init();