function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="actions">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">Delete</button>
                <button onclick="toggleComplete(this)">Complete</button>
            </div>
        `;
        
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }
}

function editTask(button) {
    const taskItem = button.closest('li');
    const taskTextElement = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Edit Task', taskTextElement.textContent);
    
    if (newTaskText !== null) {
        taskTextElement.textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.remove();
}

function toggleComplete(button) {
    const taskItem = button.closest('li');
    taskItem.classList.toggle('completed');
}