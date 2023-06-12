import './style.css';
import List from './modules/todo-list.js';
import Task from './modules/task.js';

const list = new List();
list.tasks = JSON.parse(localStorage.getItem('tasks')) || [];

const add = document.getElementById('input');
add.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && add.value !== '') {
    const newTask = new Task(add.value, list.tasks.length + 1);
    list.add(newTask);
    add.value = '';
  }
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
  list.reset();
});
