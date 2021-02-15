const BODY = document.querySelector("body");

const IMG_NUMBER = 5;

handleImgLoad = () => {
    console.log('finished backgruond loading!');
}


function paintImage(imgNumber){
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
    paintImage(randomNumber);
}

init();