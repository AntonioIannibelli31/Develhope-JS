fetch("https://jsonplaceholder.typicode.com/todos")
  .then((val) => val.json())
  .then((val) => li(val))
  .catch((err) => console.error(err));

async function li(arr) {
  let ul = document.getElementById("list-to-dos");
  arr.forEach((element) => {
    let li = document.createElement("li");
    let title = document.createTextNode(element.title);
    li.appendChild(title);
    ul.appendChild(li);
  });
}
