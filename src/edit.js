import axios from "axios"; 

export const editTask = () => {
    const toEdit = document.querySelectorAll('label');
    const arrEdit = Array.from(toEdit);
    arrEdit.forEach(el => {
        el.addEventListener('dblclick', (e) => {
            let editedTask = prompt("edir Your Task:", e.target.innerText)
        })
    })
}