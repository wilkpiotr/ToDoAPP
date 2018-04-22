import Axios from "axios";
import {renderList} from './list';


export const sendTask = () => {
    const taskInput = document.querySelector('#addTask');
    const button = document.querySelector('.addTask');
    button.addEventListener('click', (e) => {
        return Axios
        .post('http://localhost:3000/todo', {task: taskInput.value})
        .then(renderList)
        .then(clearForm)
    })
}

const clearForm = () => {
    const taskInput = document.querySelector('#addTask');
    taskInput.value = "";
}