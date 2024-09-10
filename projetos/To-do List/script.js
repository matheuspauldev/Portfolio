const form = document.getElementById('task-form');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

form.addEventListener('submit', addTask);
taskList.addEventListener('click', removeTask);

function addTask(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskText));

    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    deleteBtn.className = 'delete';
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = '';
  }
}

function removeTask(e) {
  if (e.target.classList.contains('delete')) {
    if (confirm('Tem certeza que deseja remover esta tarefa?')) {
      const li = e.target.parentElement;
      taskList.removeChild(li);
    }
  }
}
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Tema Claro';
    } else {
        themeToggleButton.textContent = 'Tema Escuro';
    }
});