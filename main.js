const input = document.querySelector("#todo-input");
const btn = document.querySelector("#todo-btn");
const list = document.querySelector("#todo-list");
const error = document.querySelector("#todo-error");
const finished = document.querySelector("#todo-total-done");

let total = 0;
finished.textContent = total;

const todoArr = [];

function addToList() {
    const value = input.value.trim();
    if (!value) {
        error.textContent = "Input must not be empty";
    } else {
        const listItem = document.createElement("li");
        list.appendChild(listItem);
        listItem.textContent = value;
        listItem.addEventListener("click", () => {
            if (listItem.className !== "todo-done") {
                listItem.className = "todo-done";
                total++;
                finished.textContent = total;
            }
        })
        error.textContent = "";
        todoArr.push({uppgift: listItem.textContent});
    }
}

btn.addEventListener("click", addToList);