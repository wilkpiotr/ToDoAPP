import axios from "axios";
import { renderList } from "./list";


export const bindButtonDelete = () => {
    showBtnDelete();
    hideBtnDelete();
    deleteTask();
}

const showBtnDelete = () => {
    const allTasks = Array.from(document.querySelectorAll('label'));
    allTasks.forEach(el => {
        el.addEventListener('mouseenter', (e) => {
            const buttonDelete = e.target.nextElementSibling;
            buttonDelete.style.display = "inline";
        })
    })
}
 const hideBtnDelete = () => {
    const allTasks = Array.from(document.querySelectorAll('.task'));
    allTasks.forEach(el => {
        el.addEventListener('mouseleave', (e) => {
            const buttonDelete = e.target.lastElementChild;
            buttonDelete.style.display = "none";
        })
    })
}

const deleteTask = () => {
    const btnDelete = Array.from(document.querySelectorAll('.btnDelete'));
    btnDelete.forEach(btn => {
        btn.addEventListener('click', (e) => {
            return axios
            .delete('http://localhost:3000/todo/' + e.target.id)
            .then(renderList)
        })
    })
}