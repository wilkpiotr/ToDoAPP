import axios from "axios";
import { renderList } from "./list";

let prevent = false;
let timer = 0;

export const bindClickFunctions = () => {
    const modal = document.querySelector('#modal');
    const editInput = document.querySelector('#edit-input');
    document.querySelector('div.main').addEventListener('click', (e) => {
        timer = setTimeout(() => {
            if (!prevent) {
                if (e.target.tagName === 'LABEL'  && e.target.classList.contains('false')) {
                    patchUndone(e.target.previousElementSibling.id)
                } if (e.target.tagName === 'LABEL'  && e.target.classList.contains('true')) {
                    patchDone(e.target.previousElementSibling.id)
                }
            };
        }, 200)    
    })
    document.querySelector('div.main').addEventListener('dblclick', (e) => {
        if (e.target.tagName === 'LABEL'  && e.target.parentElement.classList.contains('task')){
            clearTimeout(timer);
            prevent = true;
            modal.style.display = 'block';
            editInput.value = e.target.textContent;
            editInput.dataset.id = e.target.getAttribute('for')
        }
    })
};

const patchUndone = (id) => {
    return axios
    .patch('http://localhost:3000/todo/done/' + id)
    .then(renderList)
};

const patchDone = (id) => {
    return axios
    .patch('http://localhost:3000/todo/undone/' + id)
    .then(renderList);
};

export const bindEditButtons = () => {
    handleConfirmButton();
    handleCancelButton();
};

const handleConfirmButton = () => {
    const button = document.querySelector('#edit-accept');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('#modal').style.display = 'none';
        prevent = false;
        return axios
        .put('http://localhost:3000/todo/' + e.target.previousElementSibling.dataset.id,  {task: e.target.previousElementSibling.value})
        .then(renderList)
    }) 
};

const handleCancelButton = () => {
    const button = document.querySelector('#edit-cancel');
    button.addEventListener('click', (e) => {
        e.preventDefault();
        prevent = false;
        document.querySelector('#modal').style.display = 'none';
    }) 
};