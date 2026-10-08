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
        error.classList.remove("todo-error");
        void error.offsetWidth;
        error.classList.add("todo-error");
    } else {
        const listItem = document.createElement("li");
        listItem.classList.add("new-item");
        list.appendChild(listItem);
        const todoObj = {
            uppgift: value,
            "Uppgift klar?": "Ej klar"
        };
        todoArr.push(todoObj);
        listItem.textContent = value;
        input.value = "";
        listItem.addEventListener("click", () => {
            if (!listItem.classList.contains("todo-done")) {
                listItem.classList.remove("new-item");
                listItem.classList.add("todo-done");
                listItem.classList.add("todo-done-anim");
                total++;
                todoObj["Uppgift klar?"] = "Klar!";
                listItem.addEventListener(
                    "animationend",
                    () => {
                        listItem.classList.remove("todo-done-anim");
                    },
                    { once: true }
                );
            } else {
                listItem.classList.remove("todo-done");
                total--;
                todoObj["Uppgift klar?"] = "Ej klar";
            }
            finished.textContent = total;
            console.log(todoArr);
        });
        const trashcan = document.createElement("span");
        listItem.appendChild(trashcan);
        trashcan.innerHTML = "&#128465;&#65039;" + "<br>";
        trashcan.addEventListener("click", (event) => {
            event.stopPropagation();
            listItem.remove();
            trashcan.remove();
            const index = todoArr.indexOf(todoObj);
            todoArr.splice(index, 1);
        });
        error.textContent = "";
        error.className = "";
    }
}

btn.addEventListener("click", addToList);