function getVal() {
  let val = document.querySelectorAll(".form-input[type=text]");
  val.forEach((el) => console.log(el.value));
}

getVal();
