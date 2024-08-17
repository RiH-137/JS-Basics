// IIFE :- Immediately Invoked Function Expression
// IIFE is a function that is executed right after it is created.
// IIFE is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts:
// The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
// This prevents accessing variables within the IIFE idiom as well as polluting the global scope.
// The second part creates the immediately invoked function expression () through which the JavaScript
// engine will directly interpret the function.



(function add (a, b)
{
    console.log(a+b);
})(10, 20);                 // 30

// Here, the function add is defined and invoked immediately with the arguments 10 and 20.


// Example 2: IIFE with Arrow Function (ES6)
// In ES6, the arrow function is used to define the IIFE.
// The arrow function is a shorter syntax for writing function expressions.

(() => {
    console.log('IIFE');
})();                        // IIFE


// Example 3: IIFE with Arrow Function and Parameters (ES6)
// In this example, the arrow function is used to define the IIFE with parameters.

((a, b) => {
    console.log(a + b);
})(10, 20);                 // 30


// Example 4: IIFE with async/await

//generally

let data1='............url............';
async function fetchData() {
    data = await fetch(data);
    console.log(data);
}

fetchData();



// but using IIFE we can do this

const data2=(async () => await fetch('....url....'))();



// Example 5: global variable inside IIFE

//generally for the ATM mechanism
const atm= function(initialBalance){
    let balance=initialBalance;
    
    function withdraw(amt){
        if(amt>balance){
            console.log('Insufficient Balance');
        }
        else{
            balance-=amt;
            console.log('Remaining Balance:', balance);
        }
    }; return withdraw;
};

const RiH= atm(1000);
console.log(RiH(500)); // Remaining Balance: 500
console.log(RiH(700)); // Insufficient Balance


//basically, without withdrawing the amount, we can't access the balance so, we can 
// use IIFE to access the balance without withdrawing the amount















