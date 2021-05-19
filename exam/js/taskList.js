'use strict';
let storage = localStorage;
let tasksFromStorage = JSON.parse(storage.getItem("tasks"));

    let fromStorage = document.getElementById('list');

    let sort = tasksFromStorage.sort(function(a, b) {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return 0;
    });
    storage.setItem('tasks', JSON.stringify(sort));
 
function addTasks(where, tasksFromStorage) {
    
    for(let task of tasksFromStorage) {
        let div = document.createElement('div');
            div.classList.add('flex-column');
            div.innerHTML =
                `<article >
                <span>${task.title}</span>
                <span>${task.description}</span>
                <span>${task.date}</span>
                <span>${task.inputs}</span>
            </article>`;

            where.append(div);
    }
}
addTasks( fromStorage, tasksFromStorage);

let delBtn = document.createElement('div');
delBtn.style.marginTop = '2rem';
let btn = document.createElement('Button');
btn.innerText = 'удалить задачи';
btn.classList.add('button_del');
delBtn.append(btn);


let taskAct =document.getElementsByTagName("div");
taskAct.addEventListener("click", taskActive);
function taskActive(event) {
    if (this.classList.contains("active")){
        this.classList.remove("active")
    }else{
        this.classList.add("active")
    }
    btn.addEventListener("click", delTask.bind(this));
    function delTask(event){
        event.preventDefault();
        this.remove();
        sort.splice(tasks, 1);
        localStorage.setItem("tasks", JSON.stringify(sort));
    }
}


// function sortedMyList(){
//         return this.tasksFromStorage.sort((b1, b2)=>b2.date.getTime()-b1.date.getTime());
// }
       // section.append(delBtn);