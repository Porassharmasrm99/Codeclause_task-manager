document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('taskList');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskModal = document.getElementById('taskModal');
    const closeModal = document.querySelector('.close');
    const taskForm = document.getElementById('taskForm');
    let tasks = [];

    addTaskBtn.addEventListener('click', () => {
        taskModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    window.onclick = (event) => {
        if (event.target == taskModal) {
            taskModal.style.display = 'none';
        }
    };

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskTitle = document.getElementById('taskTitle').value;
        const taskDescription = document.getElementById('taskDescription').value;

        const task = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription,
        };

        tasks.push(task);
        renderTasks();
        taskModal.style.display = 'none';
        taskForm.reset();
    });

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach((task) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description}</p>
            `;
            taskList.appendChild(li);
        });
    }
});