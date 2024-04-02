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
  addSave();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      addSave();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove(); // Means li tag going to removed.
      addSave();
    }
  },
  false
);

function addSave() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTask();
