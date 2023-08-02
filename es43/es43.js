// const user = {
//   id: 1,
//   name: "John",
//   age: 25,
// };
// let val1 = JSON.stringify(user);

// let val2 = JSON.parse(val1);
// let val = localStorage.setItem(val2);

// let final = localStorage.getItem(val);
// localStorage.getItem(final);

function check() {
  if (typeof window == "undefined") {
    console.log("You are on the browser");

    localStorage.setItem("myCat", "Tom");
    const cat = localStorage.getItem("myCat");
    console.log(cat);
  } else console.log("error");
}

check();
