const toDoForm = document.querySelector('#js-toDoForm'), 
toDoInput = toDoForm.querySelector('input'),
toDoList = document.querySelector('#toDoList'),
toDoBtn = toDoForm.querySelector("#inputBtn")

const ToDo_LocalStorage = "toDos";
let toDos = [];
let id = 1;


//입력값 존재할 경우
existToDo = (VALUE) => {
    paintToDo(VALUE);
    toDoInput.focus();
    toDoInput.value = "";
}

//입력값 공백일 경우
emptyToDo = () => {
    alert('할 일이 입력되지 않았습니다. :('); 
    toDoInput.focus();
}

handleSubmit = (event) => {
    event.preventDefault();
    const currentValue = toDoInput.value;
    (currentValue === ''? emptyToDo() : existToDo(currentValue))
}

deleteToDo = (event) => {
    console.log('remove ',event.target)
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    //filter 함수를 사용하여 삭제 li 요소 외 나머지 li들로 새로운 배열을 생성.
    const cleanToDos = toDos.filter((toDo)=>{
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    id -= 1;

    scrollToggle(toDos);
    console.log(`Delete scrollToggle: ${scrollToggle(toDos)}`);
    console.log(`toDos.length >2 : ${toDos.length > 2}`);
    console.log(`toDoList.style.overflowY: ${toDoList.style.overflowY}`);
    saveToDos();
    

}

//로컬 스토리지에 string 형태로 배열을 저장.
saveToDos = () => {
    localStorage.setItem(ToDo_LocalStorage, JSON.stringify(toDos));
}

scrollToggle = (TODOS) => {
    TODOS.length > 2 ? toDoList.style.overflowY = "scroll" : toDoList.style.overflowY = "auto";
}

paintToDo = (text) => {
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    delBtn.innerHTML = "X";
    delBtn.classList.add('removeBtn');
    delBtn.addEventListener('click',deleteToDo);
    const span = document.createElement('span');
    const newId = toDos.length + 1;

    // ul 태그에 toDo li 태그를 추가
    span.innerText = id + '.  '+ ' ' +  text;
    id += 1;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);
    li.scrollIntoView();

    scrollToggle(toDos);
    
    // toDo 각각을 객체로 만들어서 로컬스토리지에 저장할 배열에 삽입
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
}

loadToDos = () => {
    const loadedToDos = localStorage.getItem(ToDo_LocalStorage);

    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach((toDo)=>{
            paintToDo(toDo.text);
        })
    }
}

init = () => {
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
    toDoBtn.addEventListener("submit", handleSubmit);
}

init();