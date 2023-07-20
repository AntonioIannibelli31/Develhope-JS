const person1 = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
  address: {
    state: "Italy",
    city: "Rome",
    street: "Via Romano, 12",
  },
};
let json = JSON.stringify(person1);
let parse = JSON.parse(json);
const person2 = { ...parse };
parse.address.city = "Milan";

console.log(person1);
console.log(person2);
