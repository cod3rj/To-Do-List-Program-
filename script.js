const inputTask = document.querySelector('#input-task');
const addTaskBtn = document.querySelector('#add-task-btn');
const taskList = document.querySelector('#task-list');

function addTask() {
	const taskText = inputTask.value.trim();

	if (taskText !== '') {
		const taskLi = document.createElement('li');
		taskLi.innerHTML = `
			<input type="checkbox" class="task-checkbox">
			<a href="#" class="task-text">${taskText}</a>
			<button class="delete-task-btn">Delete</button>
		`;
		taskList.appendChild(taskLi);
		inputTask.value = '';
	}
}

function completeTask(event) {
	const taskText = event.target.nextElementSibling;

	if (event.target.checked) {
		taskText.classList.add('completed');
	} else {
		taskText.classList.remove('completed');
	}
}

function deleteTask(event) {
	if (event.target.classList.contains('delete-task-btn')) {
		event.target.parentNode.remove();
	}
}

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', completeTask);
taskList.addEventListener('click', deleteTask);
