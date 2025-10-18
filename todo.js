let todoList=[
    {
        item:'buy milk',
        duedate:'4/4/2025'
    },
    {
        item:'go to college',
        duedate:'4/4/2025'
    }
    ];
displayItems(); 

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
displayItems(); ">Delete</button>
`;
}
containerElement.innerHTML=newHtml;
    
}