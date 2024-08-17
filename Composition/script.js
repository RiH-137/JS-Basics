// Composition in JavaScript is the act of combining multiple functions to create a new function.

//generally
//if we want to add two numbers and later on squared them, then we can do it in two steps
function add(a, b) {
    return square(add(a, b));                //currying function is used here
}
console.log(add(2, 3)); // 25










//using composition
//we can do it in one step
function compose(fn1, fn2){
    return function(a, b){
        return fn2(fn1(a, b));
    };
};

function subtract(a, b){
    return a-b;
};

const task= compose(subtract, square);
console.log(task(2, 3)); // 1






// compose two function using modern JavaScript

function compose(fn1, fn2){
    return function(a,b){
        return fn2(fn1(a,b));
    };
};
const c2f= (fn1, fn2) => (a,b) => fn2(fn1(a,b));
console.log(c2f(subtract, square)(2,3)); // 1










//compose multiple functions

function multiply(...args){
    return args.reduce((a, b) => a*b, 1);         //1 is the initial value

};

// or we can use the below code
function multiply(args){
    return args[0]*args[1];

};

function compose(...fns){
    return function(...values){

        //iterate over the functions
        return fns.reduce((a,b) => b(a), values);                          //values is the initial value
    };
};

const composeAll = (...fns) => (...values) => fns.reduce((a,b) => b(a), values);
const task1= composeAll(add, subtract, multiply, square);
console.log(task(2, 3)); // 25


const task2= composeAll(add, subtract, multiply, square, (val) =>  a/b);
console.log(task(2, 3)); // 25


//from the above code, we can see that we can compose multiple functions in one go
// we can add unlimited function function by adding them in the composeAll function















