fetch("https://jsonplaceholder.typicode.com/todos/4")
  .then((val) => val.json())
  .then((val) => control(val))
  .catch((err) => console.error(err));

async function control(obj) {
  let checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  if (obj.completed == true) {
    checkbox.checked = true;
  } else {
    checkbox.checked = false;
  }

  let div = document.getElementById("container");
  let h2 = document.createElement("h2");
  let content = document.createTextNode(obj.title);
  h2.appendChild(content);
  div.appendChild(h2);
  div.appendChild(checkbox);
}
