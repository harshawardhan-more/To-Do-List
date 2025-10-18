let todoList;
todoList=JSON.parse(localStorage.getItem('todoList')) ||[];
displayItems();

function saveToLocalStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addToDo() {
    let inputElement=document.querySelector('#todo-input');
    let dateElement=document.querySelector('#todo-date');

    //console.log(inputElement);
    let todoItem= inputElement.value;
    let todoDate= dateElement.value;

    //console.log(todoItem);
    todoList.push({item:todoItem,duedate:todoDate});
    inputElement.value='';
    dateElement.value='';
    saveToLocalStorage();

    displayItems();
}
function displayItems() {
let containerElement=document.querySelector('.todo-container');
let newHtml='';
containerElement.innerText='';
for(let i=0;i<todoList.length;i++){
    let {item, duedate}=todoList[i];
newHtml+=`
<span>${item}</span>
<span>${duedate}</span>
<button class="btn-delete" onclick="todoList.splice(${i},1);
displayItems();
saveToLocalStorage();
">Delete</button>
`;
}
containerElement.innerHTML=newHtml;
    
}
