'use strict';
let taskForm = document.forms["task"];

let nameRules = {
    elem: taskForm.elements["name-task"],
    minLength: 1,
    maxLength: 20,
    errorField: document.getElementById("name-error")
};
let dateRules = {
    elem: taskForm.elements["date-task"],
  
    errorField: document.getElementById("date-error")
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
    },
    isBefore(rule){
        let taskDate = new Date(rule.elem.value);
        let currentDate = new Date();
        if (taskDate.getDate()< currentDate.getDate()){
             rule.errorField.innerText = "Дата не может быть меньше" + currentDate;
             return false;
            }
            rule.errorField.innerText = "";
            return true;

    }
}
taskForm.elements.name-task
    .addEventListener("keyup", validator.checkMinLen.bind(null, nameRules));
 taskForm.elements.date-task
    .addEventListener("keyup", validator.isBefore.bind(null, dateRules));

    taskForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        if (!validator.checkMinLen(nameRules) || !validator.isBefore(dateRules)) {
            document.getElementById('no').innerText = 'Данные введены некорректно';
            }else {
                document.getElementById('no').innerText = '';
                 document.getElementById('add').innerText = 'Задача была успешно отправлена';
             addTask();   
           
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
 
        let taskDate = new Date(date);
        let usersArr = [];
        let inputs = document.getElementsByName("users");
        for (let inp of inputs) {
            usersArr.push(inp.value)
        }
        
        let taskObj = {};
        taskObj["title"] = title;
        taskObj["description"] = description;
        taskObj["date"] = taskDate;
        taskObj["inputs"] = usersArr;
        let storage = localStorage;
        let tasks = JSON.parse(storage.getItem("tasks"));
        if (!tasks) tasks = [];
        tasks.push(taskObj);
        let arrToJson = JSON.stringify(tasks);
        console.log(arrToJson);
        storage.setItem("tasks", arrToJson);
        }



        