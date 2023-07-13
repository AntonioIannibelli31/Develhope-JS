class Person {
  #firstName;
  #lastName;
  #age;
  constructor(firstName, lastName, age) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  set firstName(newName) {
    if (typeof newName == "string") {
      this.#firstName = newName;
    } else {
      console.log("Invalid First Name");
    }
  }

  get firstName() {
    return this.#firstName;
  }
  set lastName(newLastName) {
    if (typeof newLastName == "string") {
      this.#lastName = newLastName;
    } else {
      console.log("Invalid Last Name");
    }
  }
  get lastName() {
    return this.#lastName;
  }
  set age(newAge) {
    if (newAge < 1) {
      this.#age = 1;
    } else if (newAge > 120) {
      this.#age = 120;
    } else {
      console.log("Invalid Age");
    }
  }

  get age() {
    return this.#age;
  }

  get fullName() {
    return this.#firstName + " " + this.#lastName;
  }
}

const person = new Person("Mario", "Rossi", 25);
console.log(person.fullName);

person.firstName = "Maria";
person.lastName = "Verdi";
console.log(person.fullName);
