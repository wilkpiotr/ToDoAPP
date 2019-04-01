import  './css/index.css';
import  './css/other.css';
import { initList } from './list';
import { sendTask } from './form';
import { bindClickFunctions, bindEditButtons } from './patch';

console.log('JavaScript was attached to the page!');

document.addEventListener('DOMContentLoaded', () => {
    initList();
    sendTask();
    bindClickFunctions();
    bindEditButtons();
  });