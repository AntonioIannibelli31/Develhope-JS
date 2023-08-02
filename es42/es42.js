let button = document.getElementById("submit-todo");
button.addEventListener("click", control());

async function control() {
  let title = document.getElementById("todo-title");
  let todo = document.getElementById("todo-completed");
  let url = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: {
      title: title.value,
      todo: todo.value,
    },
  });
  console.log(url);
}

control();
