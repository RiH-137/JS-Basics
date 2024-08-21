// integer input from the user
function getIntegerInput(promptMessage) {
    let inputValue;
    do {
      inputValue = prompt(promptMessage);
      inputValue = parseInt(inputValue);
    } while (isNaN(inputValue)); // Keep asking until a valid integer is entered
    return inputValue;
  }
  
  // Example usage:
  const number = getIntegerInput("Enter an integer:");
  console.log("You entered:", number);



// string input from the user

const name = prompt("Enter your name:");
console.log("Hello, " + name + "!");


// confirm

let result = confirm("Are you sure you want to continue?");
if (result) {
  console.log("User clicked OK");
} else {
  console.log("User clicked Cancel");
}



// alert

alert("This is an alert message!");


//conform + alert

let deleteItem = confirm("Are you sure you want to delete this item?");

if (deleteItem) {
  // Code to delete the item
  alert("Item deleted successfully!");
} else {
  alert("Deletion cancelled.");
}


