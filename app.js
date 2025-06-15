const todoList = document.getElementById("todoList");
const newTodoInput = document.getElementById("newTodo");

function addTodo() {
  const text = newTodoInput.value.trim();
  if (text === "") return;

  const li = document.createElement("li");
  li.className = "todo-item";

  li.innerHTML = `
    <input type="checkbox" onclick="toggleComplete(this)">
    <input type="text" value="${text}" readonly />
    <div class="todo-actions">
      <button onclick="editTodo(this)">Edit</button>
      <button onclick="deleteTodo(this)">Delete</button>
    </div>
  `;

  todoList.appendChild(li);
  newTodoInput.value = "";
}

function toggleComplete(checkbox) {
  const input = checkbox.nextElementSibling;
  if (checkbox.checked) {
    input.style.textDecoration = "line-through";
    input.style.color = "gray";
  } else {
    input.style.textDecoration = "none";
    input.style.color = "black";
  }
}

function editTodo(button) {
  const input = button.parentElement.previousElementSibling;
  if (button.textContent === "Edit") {
    input.removeAttribute("readonly");
    input.focus();
    button.textContent = "Save";
  } else {
    input.setAttribute("readonly", true);
    button.textContent = "Edit";
  }
}

function deleteTodo(button) {
  const li = button.closest("li");
  todoList.removeChild(li);
}