const resetBtn = document.querySelector('#resetBtn'); 

const User_LocalStorage = "currentUser";
resetData = () => {
    const Choice = confirm('정보를 초기화 하시겠습니까?');
    if(Choice){
        localStorage.removeItem(ToDo_LocalStorage); //to do 리스트 삭제
        localStorage.removeItem(User_LocalStorage); //사용자 이름 삭제
        localStorage.removeItem(COORDS);  //사용자 위치 정보 삭제
        window.location.reload();
    }else
        return false;
}


init = () =>{
    resetBtn.addEventListener("mouseup",resetData);
    resetBtn.addEventListener("keypress",resetData);
}

init();
