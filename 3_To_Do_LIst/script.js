// InjamTanvir

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ""){
        alert("You must write something!");
    } 
    else{
        let newTask = document.createElement("li");
        
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        newTask.appendChild(checkbox);
        
        let taskText = document.createElement("span");
        taskText.className = "task-text";
        taskText.textContent = inputBox.value;
        newTask.appendChild(taskText);
        
        let deleteBtn = document.createElement("span");
        deleteBtn.textContent = "×";
        deleteBtn.className = "delete-btn";
        deleteBtn.title = "Delete task";
        newTask.appendChild(deleteBtn);
        
        listContainer.appendChild(newTask);
        
        inputBox.value = "";
        
        saveData();
    }
}

inputBox.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        addTask();
    }
});

listContainer.addEventListener("click", function(e){
    if (e.target.className === "task-checkbox"){
        if(e.target.checked) {
            e.target.parentElement.classList.add("checked");
        } 
        else{
            e.target.parentElement.classList.remove("checked");
        }

        saveData();
    }

    else if (e.target.className === "delete-btn"){
        e.target.parentElement.remove();
        saveData();
    }
});


function saveData(){
    localStorage.setItem("todoData", listContainer.innerHTML);
}

function showTask() 
{
    listContainer.innerHTML = localStorage.getItem("todoData") || "";
    const checkboxes = document.querySelectorAll(".task-checkbox");
    checkboxes.forEach(checkbox => {
        if (checkbox.parentElement.classList.contains("checked")){
            checkbox.checked = true;
        }
    });
}
showTask();
