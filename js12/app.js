// // DOM
// // let value;

// // // value = document.location.href;
// // value = document.contentType;
// // console.log(value);
// //  Selectors

// // const button = document.getElementById("todoAddButton");
// // console.log(button);

// // let classListesi = button.classList;
// // classListesi.forEach(function (yazdir) {
// //   console.log(yazdir);
// // });
// // let buttonText = button.innerHTML;
// // consol.log(buttonText);
// // button.innerHTML = "<b>Todo Ekleyin</b>";

// // consol.log(button.getAttribute("id"));
// // const todoList = Array.from(document.getElementsByClassName("list-group-item"));
// // todoList.forEach(function (todo) {
// //   console.log(todo);
// // });
// // const clearButoon = document.querySelector("#clearButton");
// // const clearButoon1 = Array.from(
// //   document.querySelectorAll("li:nth-child(even)")
// // );
// // clearButoon1.forEach(function (todo) {
// //   todo.style.backgroundColor = "lightgrey";
// // });
// // console.log(clearButoon1);
// // const todo = document.querySelectorAll(".list-group-item")[0];
// // // console.log(todo);
// // todo.style.color = "red";
// const todoList = document.querySelector(".list-group");
// // let value;
// // value = todoList.children[todoList.children.length - 1];
// // value = todoList.children[3].textContent = "değişti";
// // value = Array.from(todoList.children);

// // value.forEach(function (todo) {
// //   console.log(todo.textContent);
// // });
// // console.log(value);
// const todo = document.querySelectorAll(".list-group-item")[0];
// let value;
// // value = todo.parentElement;
// console.log(todo.nextElementSibling);
// const todoList = document.querySelector(".list-group");
// const todos = document.querySelectorAll(".list-group-item");
// // console.log(todos);
// // // todos[0].remove();
// // // todos[2].remove();
// todoList.removeChild(todoList.children[1]);
// const cardBody = document.querySelectorAll(".card-body")[1];

// const newTitle = document.createElement("h2");
// newTitle.className = "card-tittle";
// newTitle.textContent = "Todo listesi-yeni";

// cardBody.replaceChild(newTitle, cardBody.childNodes[1]);
////////////// EVENTS ///////////////////////////////

// const clearButoon = document.querySelector("#ö");
// clearButoon.addEventListener("click", changeTitle);

// function changeTitle(e) {
//   //document.querySelectorAll(".card-body")[1].children[0].textContent = "asdasd";
//   console.log(e.target);
// }
// window.addEventListener("load", run);

// function run() {
//   alert("sayffam yüklendi");
// }
const cardTitle = document.querySelectorAll(".card-body")[1].children[0];
const cardBody = document.querySelectorAll(".card-body")[1];
cardBody.addEventListener("mouseenter", run);
//cardBody.addEventListener("mousenter", run);
//cardTitle.addEventListener("dblclick", run);
function run(e) {
  console.log(e.type);
}
