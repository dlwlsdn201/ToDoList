const FORM = document.querySelector('#js-UserForm'),
nameInput = FORM.querySelector("input"),
GREETING = document.querySelector('#js-Greeting'),
WRAPPER = document.querySelector('#wrapper'),
LINE = document.querySelector(".underline");


const userKey = 'currentUser',
SHOWING = 'showing',
EMPTY = 'empty';

existName = (VALUE) => {
    drawGreeting(VALUE);
    saveName(VALUE);
}

emptyName = () => {
    alert('사용자의 이름을 입력해주세요 :)'); 
    nameInput.focus();
}


// INPUT에 입력된 값 로드 & 사용자 이름 저장 & 환영인사말 표시
handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = nameInput.value;
    (currentValue === '' ? emptyName() : existName(currentValue));
}


// 사용자 이름을 로컬 스토리지에 key값과 함께 저장
saveName = (value) => {
    localStorage.setItem(userKey, value);
}

//userForm class에 'showing'을 추가
//userForm submit 이벤트 발생 시 hnadleSubmit 호출
askForName = () => {
    FORM.classList.add(EMPTY);
    FORM.addEventListener("submit", handleSubmit);
}

//userForm의 showing class 삭제
// 인사말 요소에 텍스트 삽입
drawGreeting = (text) => {
    FORM.classList.remove(SHOWING);
    WRAPPER.removeChild(FORM);
    GREETING.classList.add(SHOWING);
    GREETING.classList.add('fadein');
    LINE.classList.remove('Off');
    LINE.classList.add('On');
    GREETING.style.display="block";
    GREETING.innerText = `어서오세요. ${text} 님!`;
}

//로컬스토리지에서 userName value 로드하여 drawGreeting 함수에 전달
loadName = () => {
    const currentUser = localStorage.getItem(userKey);
    if(currentUser === null)
        askForName();
    else
        drawGreeting(currentUser);
}

function init(){
    loadName();
};

init();