//Variables

const addTask = document.querySelector('#add-task');
const taskContainer = document.querySelector('.task-container');
const inputTask = document.querySelector('#input-task');

//Event Listeners
addTask.addEventListener('click', function() {
    //Create a new div for the task
    let task = document.createElement('div');
    task.classList.add('task');
    //Add a list item
    let li = document.createElement('li');
    li.innerText = inputTask.value;
    task.appendChild(li);
    //Add a check button item
    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('check-task');
    task.appendChild(checkBtn);
    //Add a remove button
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('delete-task');
    task.appendChild(deleteBtn);

    //Check if user has entered text and append task to the task container
    if (inputTask.value === "") {
        alert("Please Enter a Task");
    } else if ( document.querySelectorAll('.task').length <= 10 ) {
        taskContainer.append(task);
    } else {
        alert('Maximum of 10 tasks at once');
    }

    inputTask.value = "";

    //Event Listeners for check and delete
    checkBtn.addEventListener('click', function() {
        checkBtn.parentElement.style.textDecoration = "line-through";
    });

    deleteBtn.addEventListener('click', function() {
        deleteBtn.parentElement.remove();
    });

});


