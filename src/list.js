import axios from 'axios';

let undoneTaskList;
let undoneTasks; 
let doneTaskList;
let doneTasks;

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
        
        
        return html + `<form>
        <input type="checkbox" name="task" id="${task.id}" class="${task.done}">
        <label for="${task.id}">${task.task}
            <button type="button" name="delete" style="display: none;"></button>
        </label>   
      </form>`
    },'');
}


const getListUndoneHTML = (tasks) => {
    undoneTasks = tasks.filter((task) => {
        return task.done === false;
    })
     return undoneTasks.reduce((html, task) => {
        
        
        return html + `<form>
        <input type="checkbox" name="task" id="${task.id}" class="${task.done}">
        <label for="${task.id}">${task.task}
            <button type="button" name="delete" style="display: none;"></button>
        </label>   
      </form>`
    },'');
}


export const initList = () => {
    undoneTaskList = document.querySelector('.undone-list');
    doneTaskList = document.querySelector('.done-list');
    renderList();
}

export const renderList = () => {
    fetchList()
    .then((tasks) => {
        undoneTaskList.innerHTML = getListUndoneHTML(tasks);
        doneTaskList.innerHTML = getListDoneHTML(tasks)
    });
}
