import axios from "axios";
import { renderList } from "./list";


export const bindPatch = () => {
    patchUndone();
    patchDone();
}

const patchUndone = () => {
    const tasksUndone = document.querySelectorAll('input.false');
    const arrayUndone = Array.from(tasksUndone);
    arrayUndone.forEach(el => {
        el.addEventListener('click', (e) => {
            return axios
            .patch('http://localhost:3000/todo/done/' + e.target.id)
            .then(renderList)
        })
    })
}

const patchDone = () => {
    const tasksDone = document.querySelectorAll('input.true');
    const arrayDone = Array.from(tasksDone);
    arrayDone.forEach(el => {
        el.addEventListener('click', (e) => {
            return axios
            .patch('http://localhost:3000/todo/undone/' + e.target.id)
            .then(renderList)
        })
    })
}