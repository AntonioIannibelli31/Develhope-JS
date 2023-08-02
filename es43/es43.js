const user = {
  id: 1,
  name: "John",
  age: 25,
};

function getObj() {
  let val1 = JSON.stringify(user);

  let val = localStorage.setItem("val1", val1);

  let final = localStorage.getItem("val1", val);
  console.log(JSON.parse(final));
}

getObj();
