const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = Object.assign({}, person1);

person2.firstName = "Simon";
// Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);

// Write a comment explaining why, by modifying the object `person2`,
// also the object `person1` would be modified.

// Perchè essendo una copia by value sovrascriverebbe anche l'ogetto da cui è stato copiato
