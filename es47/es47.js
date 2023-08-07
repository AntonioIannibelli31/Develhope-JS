function getVal() {
  let lab1 =
    document.getElementById("firstName").previousElementSibling.textContent;
  let inp1 = document.getElementById("firstName");
  console.log(lab1 + ": " + inp1.value);
  let lab2 =
    document.getElementById("lastName").previousElementSibling.textContent;
  let inp2 = document.getElementById("lastName");
  console.log(lab2 + ": " + inp2.value);
  let lab3 = document.getElementById("age").previousElementSibling.textContent;
  let inp3 = document.getElementById("age");
  console.log(lab3 + ": " + inp3.value);
}

getVal();
