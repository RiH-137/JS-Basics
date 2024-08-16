// normal function

function add(a,b,c){
    return a+b+c;
}
console.log(add(1,2,3));


// currying function --> function that returns another function

/*
suppose we have three variables and we want to add them and all variables are comming from different sources
like a from an api; b from the user input and so on and if any of the variable is not available then we can't add them
so we can use currying function to add them
*/


function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
};
console.log(add(1)(2));                 // NaN, as one of the variable is missing
console.log(add(1)(2)(3));              // 6, as all the variables are available

const add = a => b => c => a+b+c;
console.log(add(1)(2)(3));              // 6, as all the variables are available

// practical usecase of CURRYING

/* lets us suppose we need to craete an automated email server */

function sendAutomatedEmail(from){
    return function(to){
        return function(subject){
            return function(body){
                console.log(`From: ${from}, To: ${to}, Subject: ${subject}, Body: ${body}`);
            };
        };
    };
};

let step1 = sendAutomatedEmail("101rishidsr@gmail.com");
let step2 = step1("100bytehacker@gmail.com");
let step3 = step2("Greetings");



// Optimized the above code.

const sendAutomatedEmail = from => to => subject => body => console.log(`From: ${from}, To: ${to}, Subject: ${subject}, Body: ${body}`);






