import axios from 'axios';
import { bindButtonDelete } from './delete';


let undoneTaskList;
let undoneTasks; 
let doneTaskList;
let doneTasks;

export const initList = () => {
    undoneTaskList = document.querySelector('.undone-list');
    doneTaskList = document.querySelector('.done-list');
    renderList();
}

export const renderList = () => {
    fetchList()
    .then((tasks) => {
        undoneTaskList.innerHTML = getListUndoneHTML(tasks);
        doneTaskList.innerHTML = getListDoneHTML(tasks);
    })
    .then(bindButtonDelete)
}

const fetchList = () => {
return axios
.get('http://localhost:3000/todo')
.then((result) => { return result.data; })
}

const getListDoneHTML = (tasks) => {
    doneTasks = tasks.filter((task) => {
        return task.done === true;
    })
     return doneTasks.reduce((html, task) => {  
        return html + `<div class="task"><input type="checkbox" name="task" id="${task.id}" class="${task.done}" checked disabled>
        <label for="${task.id}" class="${task.done} task-label">${task.task}</label><button class="btnDelete" id="${task.id}" type="button" name="delete" style="display: none;">Delete Task</button></div>`
    },'');
}

const getListUndoneHTML = (tasks) => {
    undoneTasks = tasks.filter((task) => {
        return task.done === false;
    })
     return undoneTasks.reduce((html, task) => {   
        return html + `<div class="task"><input type="checkbox" name="task" id="${task.id}" class="${task.done}" disabled>
        <label for="${task.id}" class="${task.done} task-label">${task.task}</label><button class="btnDelete" id="${task.id}" type="button" name="delete" style="display: none;">Delete Task</button></div>`
    },'');
}