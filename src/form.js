import axios from "axios";
import {renderList} from './list';
import { patchUndone } from "./patch";


export const sendTask = () => {
    const taskInput = document.querySelector('#addTask');
    const button = document.querySelector('.btnAddTask');
    button.addEventListener('click', (e) => {
        if (taskInput.value.trim() !== "") {
        return axios
        .post('http://localhost:3000/todo', {task: taskInput.value})
        .then(renderList)
        .then(clearForm)
        } else return
    })
}

const clearForm = () => {
    const taskInput = document.querySelector('#addTask');
    taskInput.value = "";
}