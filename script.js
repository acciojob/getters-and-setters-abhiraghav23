class Person {
  constructor(name, age) {
    this._name = name; // Using a private field to hold the name
    this._age = age; // Using a private field to hold the age
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(age) {
    this._age = age;
  }

  // Getter for age (optional, in case age needs to be accessed)
  get age() {
    return this._age;
  }
}

class Student extends Person {
  // Method to log that the student is studying
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  // Method to log that the teacher is teaching
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

