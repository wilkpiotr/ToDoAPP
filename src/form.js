import axios from "axios";
import {renderList} from './list';

export const sendTask = () => {
    const taskInput = document.querySelector('#addTask');
    const button = document.querySelector('.btnAddTask');
    handleAddButton(button, taskInput);
    handleAddInput(taskInput);
};

const handleAddButton = (button, task) => {
    button.addEventListener('click', (e) => {
        if (task.value.trim() !== "") {
            return axios
            .post('http://localhost:3000/todo', {task: task.value})
            .then(renderList)
            .then(clearForm)
        } else return
    })
};

const handleAddInput = (task) => {
    task.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && e.target.value.trim() !== "") {
            return axios
            .post('http://localhost:3000/todo', {task: e.target.value})
            .then(renderList)
            .then(clearForm)
        } else return
    })
};

const clearForm = () => {
    const taskInput = document.querySelector('#addTask');
    taskInput.value = "";
};