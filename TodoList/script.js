const inputBox = document.getElementById("input-box");
const listContainer = document.querySelector(".list-container");
const addbtn = document.querySelector(".addbtn");

addbtn.addEventListener("click", addTask);

function addTask() {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
}
