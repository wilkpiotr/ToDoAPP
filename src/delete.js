import axios from "axios";
import { renderList } from "./list";


export const bindButtonDelete = () => {
    showBtnDelete();
    hideBtnDelete();
    deleteTask();
}

const showBtnDelete = () => {
    const allTasks = document.querySelectorAll('label');
    const arrayAllTasks = Array.from(allTasks);
    arrayAllTasks.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const buttonDelete = e.target.nextElementSibling;
            buttonDelete.style.display = "inline";
        })
    })
}
 const hideBtnDelete = () => {
    const allTasks = document.querySelectorAll('.task');
    const arrayAllTasks = Array.from(allTasks);
    arrayAllTasks.forEach(el => {
        el.addEventListener('mouseleave', (e) => {
            const buttonDelete = e.target.lastElementChild;
            buttonDelete.style.display = "none";
        })
    })
}

const deleteTask = () => {
    const btnDelete = document.querySelectorAll('.btnDelete');
    const arrBtnDel = Array.from(btnDelete)
    arrBtnDel.forEach(btn => {
        btn.addEventListener('click', (e) => {
            return axios
            .delete('http://localhost:3000/todo/' + e.target.id)
            .then(renderList)
        })
    })
}