'use strict';
// function sortTask(){
    let storage = localStorage;
    let tasksFromStorage = JSON.parse(storage.getItem("tasks"));
    console.log(tasksFromStorage);
    if(!tasksFromStorage || tasksFromStorage.length === 0){
        
        document.getElementById('noTask').innerHTML = `<h3>Нет запланированных задач</h3>`;
       
        };

    let sort = tasksFromStorage.sort(function(a, b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
    });
    storage.setItem('tasks', JSON.stringify(sort));
 
// }
function getDate(someDate) {
    let currentDate = new Date(someDate);
    return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
}

   
let list = document.createElement("h1");
list.innerText = "Список задач";
section.append(list);
for (let tasks of tasksFromStorage){
    let divList = document.createElement("div");
    divList.classList.add('task');
    let h2List = document.createElement("h2");
    h2List.innerText = `название: ${tasks.title}`;
    let pList = document.createElement("p");
    pList.innerText = `описание: ${tasks.description}`;
    let spanChar = document.createElement("span");
    spanChar.innerText = `участники: ${tasks.inputs}`;
    let spanList = document.createElement("span");
    spanList.innerHTML = `<p>Выполнить к: </p>${getDate(tasks.date)}</b>`;
    let section = document.getElementById("section");
    
        
    section.append(divList);
    divList.append(h2List,  pList, spanChar, spanList);

    divList.addEventListener('click', function(){
        if(this.classList.contains('active')){
            this.classList.remove('active')
        }else{
            this.classList.add('active')
        }
        
     let btn = document.getElementById('delite')
    btn.addEventListener('click', del.bind(this));
        function del(event){
        event.preventDefault();
        this.remove(this);
        
        sort.splice(tasks, 1);
        localStorage.setItem('tasks', JSON.stringify(sort));
        
        }
    });
         
}










