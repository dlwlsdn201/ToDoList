const resetBtn = document.querySelector('#resetBtn'); 

const User_LocalStorage = "currentUser";

resetData = () => {
    const Choice = confirm('정보를 초기화 하시겠습니까?');
    if(Choice){
        localStorage.removeItem(ToDo_LocalStorage);
        localStorage.removeItem(User_LocalStorage);
        window.location.reload();
    }else
        return false;
}


init = () =>{
    resetBtn.addEventListener("click",resetData);
}

init();
