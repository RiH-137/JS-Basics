// Get the input field
const input = document.querySelector('.number-input');

// Function to handle button clicks
function handleClickButton(el) {
    const buttonText = el.innerText;
    
    // Check if the button clicked is "Clear"
    if (buttonText === 'Clear') {
        input.value = ''; // Clear the input field
    } 
    // Check if the button clicked is "Delete"
    else if (buttonText === 'Delete') {
        input.value = input.value.slice(0, -1); // Remove the last character from the input field
    } 
    // Check if the button clicked is "="
    else if (buttonText === '=') {
        try {
            input.value = eval(input.value); // Evaluate the expression in the input field
        } catch (error) {
            input.value = 'Error'; // Display an error if the expression is invalid
        }
    } 
    // For all other buttons, append their text to the input field
    else {
        input.value += buttonText;
    }
}                                                          