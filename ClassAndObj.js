class Person {
    constructor(name, age) {
      // The constructor method is called when you create a new instance of the class
      this.name = name; // 'this' refers to the current instance of the class
      this.age = age;
    }
  
    // Method to display the person's details
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  

  // object
const person1 = new Person('Alice', 25);

// Calling the displayInfo method on the object
person1.displayInfo(); // Output: Name: Alice, Age: 25


const person2 = new Person('Bob', 30);
const person3 = new Person('Charlie', 22);

person2.displayInfo(); // Output: Name: Bob, Age: 30
person3.displayInfo(); // Output: Name: Charlie, Age: 22

  