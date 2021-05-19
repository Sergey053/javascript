'use strict';
let taskForm = document.forms["task"];

let nameRules = {
    elem: taskForm.elements["name-task"],
    minLength: 1,
    maxLength: 20,
    errorField: document.getElementById("name-error")
};

let validator = {
    // checkMinLen: function (rule) {}
    checkMinLen(rule){
        if (rule.elem.value.length < rule.minLength || rule.elem.value.length > rule.maxLength ){
            rule.errorField.innerText =
                "Минимальное количество символов от "+ rule.minLength + " до " + rule.maxLength;
            return false;
        }
        rule.errorField.innerText = "";
        return true;
    }
}
taskForm.elements.name-task
    .addEventListener("keyup", validator.checkMinLen.bind(null, nameRules));

    taskForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        if (!validator.checkMinLen(nameRules)){
            console.log("Данные нельзя отправлять на сервер");
        } else {
            console.log("Данные можно отправлять на сервер");
             addTask();   
            // let task = {};
            // task.title = taskForm.elements["name-task"].value;
            // task.description = taskForm.elements["description-task"].value;
            // task.date = taskForm.elements["date-task"].value;

            
            // 1. loginForm.submit(); - отправка данных с перезагрузкой страницы
            // 2. отправка данных аякс запросом без перезагрузки страницы
        }
    })
    let addmember = document.getElementById('submitTask');
    let members = document.getElementById('members');
    submitTask.addEventListener('click', () => {
        let id = Math.random().toString(20);
        let div = document.createElement('div');
        let input = document.createElement('input');
        input.setAttribute( "name", "users" );
        let btn = document.createElement('button');
        btn.innerHTML = 'x';
        div.setAttribute('id', id);
        div.appendChild(input);
        div.appendChild(btn);
        members.appendChild(div);
        btn.addEventListener('click', (event) =>{
            div.remove();
        })
    })
    function addTask() {
        let title = taskForm.elements["name-task"].value;
        let description = taskForm.elements["description-task"].value;
        let date = taskForm.elements["date-task"].value;
        let currentDate = new Date;
        let nowDate = String(currentDate.getFullYear, currentDate.getMonth, currentDate.getDate);
        console.log(nowDate);
        let usersArr = [];
        let inputs = taskForm.elements.users;
        for (let inp in inputs) {
            usersArr.push(inp.value)
        }
        
        let taskObj = {};
        taskObj["title"] = title;
        taskObj["description"] = description;
        taskObj["date"] = date;
        taskObj["inputs"] = usersArr;
        let storage = localStorage;
        let tasks = JSON.parse(storage.getItem("tasks"));
        if (!tasks) tasks = [];
        tasks.push(taskObj);
        let arrToJson = JSON.stringify(tasks);
        console.log(arrToJson);
        storage.setItem("tasks", arrToJson);
        }
    