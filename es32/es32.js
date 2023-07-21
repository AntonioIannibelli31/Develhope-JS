const person = {
  id: 1,
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const json = JSON.stringify(person, (key, value) => {
  if (typeof value === "string") {
    return undefined;
  } else return value;
});

const parse = JSON.parse(json);
console.log(parse); // Should return: { id: 1, age: 25 }
