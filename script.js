// Get references to DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');

  // Task text
  const span = document.createElement('span');
  span.textContent = taskText;
  li.appendChild(span);

  // Mark as complete
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });
  li.appendChild(removeBtn);

  // Add the task to the list
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Add event listener for the Add button
addTaskBtn.addEventListener('click', addTask);

// Allow pressing Enter to add a task
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
