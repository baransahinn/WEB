const form = document.querySelectorAll(".card-body")[0].children[0];
const addInput = document.querySelector("#todoName");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearButton = document.querySelector("#todoClearButton");
const filterInput = document.querySelector("#todoListForm").children[0];
let todos = [];
console.log(filterInput);
runEvents();
function runEvents() {
  form.addEventListener("submit", addTodo);
  document.addEventListener("DOMContentLoaded", pageLoeded);
  secondCardBody.addEventListener("click", removeTodoToUI);
  clearButton.addEventListener("click", allTodosEverywhere);
  filterInput.addEventListener("keyup", filter);
}
// Tüm todoları temizleme
function allTodosEverywhere() {
  const todoListesi = document.querySelectorAll(".list-group-item");
  if (todoListesi.length > 0) {
    todoListesi.forEach(function (todo) {
      todo.remove();
    });
    todos = [];
    localStorage.setItem("todos", JSON.stringify(todos));
    showAlert("success", "başarılı bir şekilde silindi");
  } else {
    showAlert("warning", "silmek için en az bir todo olmadılır");
  }
}

// Ekrandan Todo Silme
function removeTodoToUI(e) {
  if (e.target.className === "fa fa-remove") {
    const todo = e.target.parentElement.parentElement;
    todo.remove();
    //strogeden değer silme
    removeTodoToStroge(todo.textContent);
  }
}
// listeden Todo'yu kaldırmak için kullanılır.
function removeTodoToStroge(removeTodo) {
  addTodoStrage();
  todos.forEach(function (todo, index) {
    if (removeTodo === todo) {
      todos.splice(index, 1);
    }
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}
//sayfa yüklendiğinde localStorage'dan Todo'ları çeker ve ekrana gösterir.
function pageLoeded() {
  addTodoStrage();
  todos.forEach(function (todo) {
    addTodoToUI(todo);
  });
}
function filter(e) {
  const filterValue = e.target.value.toLowerCase().trim();
  const todoListesi = document.querySelectorAll(".list-group-item");

  if (todoListesi.length > 0) {
    todoListesi.forEach(function (todo) {
      if (todo.textContent.toLowerCase().trim().includes(filterValue)) {
        todo.setAtiribute("style", "display :block");
      } else {
        todo.setAtiribute("style", "display : none !important");
      }
    });
  } else {
    showAlert("warning", "filtreleme yapmak için en az bir todo olmalıdır");
  }
}
//  form submit olayını dinleyerek yeni Todo'yu ekler.
function addTodo(e) {
  const inputText = addInput.value.trim();
  if (inputText == null || inputText == "") {
    showAlert("danger", "Lütfen boş bırakmayınız!");
  } else {
    addTodoToUI(inputText);
    // storage ekleme
    addTodoStrage(inputText);
    showAlert("success", "Todo eklendi :))");
  }
  e.preventDefault();
}
// UI'ye yeni bir Todo ekler.
function addTodoToUI(newTodo) {
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between";
  li.textContent = newTodo;

  const a = document.createElement("a");
  a.href = "#";
  a.className = "delete-item";

  const i = document.createElement("i");
  i.className = "fa fa-remove";

  a.appendChild(i);
  li.appendChild(a);
  todoList.appendChild(li);
  addInput.value = "";
}
// localStorage'a Todo'ları ekler veya mevcut Todo listesini günceller.
function addTodoStrage(newTodo) {
  if (newTodo && newTodo.trim() !== "") {
    if (localStorage.getItem("todos") === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
}

// Uyarı mesajı
function showAlert(type, massage) {
  const div = document.createElement("div");
  div.className = "alert alert-" + type;
  div.textContent = massage;
  firstCardBody.appendChild(div);
  setTimeout(function () {
    div.remove();
  }, 2500);
}
