//function inside a function is called CLOSURE

/*
A closure is the combination of a function bundled together (enclosed) with references to its surrounding
 state (the lexical environment).
 In other words, a closure gives you access to an outer function’s scope from an inner function. 
In JavaScript, closures are created every time a function is created, at function creation time.

*/







// example 1

function main1(){
    const name1="RiH";

    function displayName1(){
        console.log(name1);
    }
    displayName1();
}
main1();



//example 2

function main2(){
    const name2="RiH";

    function displayName2(){
        console.log(name2);
    }
    return displayName2;
}
let fn = main2();
fn();
fn();


//example 3

function main3(name){
    function displayName3(){
        console.log(name);
    }
    return displayName3;
}
let fn1 = main3("RiH");
fn1();
fn1();
console.log(fn1);



//example 4

function adder(num){
    function add(b){
        console.log(num+b);
        
    }
    return add;
}

let addTo5 = adder(5);
addTo5(2);                       //7
addTo5(3);                       //8

const addTo10 = adder(10);
addTo10(2);                      //12



// practical implementation of closure using index.html and script.js
// we are craeting a text sizer using closure


const myName = document.getElementById("my-name");

const button12 = document.getElementById("button1");
const button20 = document.getElementById("button2");
const button30 = document.getElementById("button3");
const button40 = document.getElementById("button4");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }
  return changeSize; // Return the changeSize function
}

const size12 = makeTextSizer(12); // Call makeTextSizer and store the returned function
const size20 = makeTextSizer(20);
const size30 = makeTextSizer(30);
const size40 = makeTextSizer(40);

button12.addEventListener("click", size12); // Pass the function reference to the event listener
button20.addEventListener("click", size20);
button30.addEventListener("click", size30);
button40.addEventListener("click", size40);




// example 5

// make a counter using closure

function makeCounter(){
    let count = 0;
    function counter(){
        count++;
        console.log(count);
    }
    return counter;
}

const counter1 = makeCounter();
counter1();                        //1
counter1();                       //2
counter1();                       //3   






