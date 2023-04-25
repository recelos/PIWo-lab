"use strict";

const notUrgentList = [];
const urgentList = [];
const criticalList = [];

let lastDeletedTask = null;

const createTaskElement = (task, list) => {
    const div = document.createElement("div");
    div.classList.add("task");
  
    const p = document.createElement("p");
    p.textContent = task.name;
  
    if (task.isFinished) {
        const s = document.createElement("s");
        s.textContent = task.name;
        p.innerHTML = "";
        p.appendChild(s);
  
        const dateP = document.createElement("p");
        dateP.textContent = "Done! on " + task.finishedDate;
  
        div.appendChild(dateP);
        div.classList.add("done");
    }
  
    div.appendChild(p);
  
    const finishButton = document.createElement("button");
    finishButton.innerHTML = "✅";

    // check if handler has already been assigned
    finishButton.onclick = finishButton.onclick ? finishButton.onclick : () => handleFinishButtonClick(task);
    
    div.appendChild(finishButton);
  
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "🗑️";

    // check if handler has already been assigned
    deleteButton.onclick = deleteButton.onclick ? deleteButton.onclick : () => handleDeleteTask(task, list);

    const btnDiv = document.createElement("div");
    btnDiv.append(finishButton, deleteButton)

    div.appendChild(btnDiv);
    return div;
}
  
const handleFinishButtonClick = (task) => {
    task.isFinished = !task.isFinished;
    task.finishedDate = task.isFinished
        ? new Date(Date.now()).toLocaleDateString()
        : null;
    renderTasks();
}

const handleAddTask = (input, list) => {
    const taskName = input.value;
    if(!taskName){
        alert("Task cannot be empty!");
        return;
    }

    const newTask = {
        name: taskName,
        isFinished: false,
        finishedDate: null
    }

    list.push(newTask);
    renderTasks();
}

const addHandlers = () => {
    const notUrgentInput = document.getElementById("not-urgent-input");
    const notUrgentAddButton = document.getElementById("not-urgent-add-button");
    notUrgentAddButton.onclick = () => handleAddTask(notUrgentInput, notUrgentList);

    const urgentInput = document.getElementById("urgent-input");
    const urgentAddButton = document.getElementById("urgent-add-button");
    urgentAddButton.onclick = () => handleAddTask(urgentInput, urgentList);
    
    const criticalInput = document.getElementById("critical-input");
    const criticalAddButton = document.getElementById("critical-add-button");
    criticalAddButton.onclick = () => handleAddTask(criticalInput, criticalList);
}

const handleDeleteTask = (task, list) => {
    const modal = $("<div>", {
        class: "modal"
      }).appendTo("body");
      
    const modalContent = $("<div>", {
        class: "modal-content"
      }).appendTo(modal);

    $("<p>", {
        text: "Are you sure you want to delete this items?"
    }).appendTo(modalContent);
      
    const confirmButton = $("<button>", {
        text: "Yes",
    }).appendTo(modalContent);
      
    const cancelButton = $("<button>", {
        text: "Cancel",
      }).appendTo(modalContent);
      
    confirmButton.off("click").on("click", () => {
        removeAndArchiveTask(task, list)
        modal.remove();
      });
      
    cancelButton.off("click").on("click", () => {
        modal.remove();
    });
      
    modal.show();
}

const removeAndArchiveTask = (task, list) => {
    const index = list.indexOf(task);
        
    list.splice(index, 1);
    lastDeletedTask = 
    {
        deletedTask: task,
        fromList: list
    };

    enableRestoreButton();
    renderTasks();
}

const renderTasks = () => {
    const notUrgentTaskContainer = document.getElementById("not-urgent-tasks");
    const notUrgentTasks = notUrgentList.map(task => createTaskElement(task, notUrgentList));
    notUrgentTaskContainer.replaceChildren(...notUrgentTasks);

    const urgentTaskContainer = document.getElementById("urgent-tasks");
    const urgentTasks = urgentList.map(task => createTaskElement(task, urgentList));
    urgentTaskContainer.replaceChildren(...urgentTasks);

    const criticalTaskContainer = document.getElementById("critical-tasks");
    const criticalTasks = criticalList.map(task => createTaskElement(task, criticalList));
    criticalTaskContainer.replaceChildren(...criticalTasks);
}

const enableRestoreButton = () => {
    const restoreButton = $("#restore"); 

    if(lastDeletedTask === null){
        restoreButton.prop("disabled", true);
        return;
    }
    restoreButton.prop("disabled", false);
}

const handleRestoreButton = () => {
    if(lastDeletedTask === null)
        return;
    
    lastDeletedTask.fromList.push(lastDeletedTask.deletedTask);
    lastDeletedTask = null;
    renderTasks();
    enableRestoreButton();
}