// Iterators in JS --> Iterators(built-in) are objects that know how to access items from a collection one at a time,
//  while keeping track of its current position within that sequence.


for (const  char of 'RiH') {
    console.log(char);
}

//similary
for(const val of [1,2,3,4,5]){
    console.log(val);
}



// building custom iterators

function makeIterator(start=0, end=Infinity, step=1){
    let nextIndex=start;                                                  
    //nextIndex is the current position of the iterator

    let iterationCount=0;
    return {
        next(){
            let result;
            if(nextIndex<end){
                result={value:nextIndex, done:false};
                nextIndex+=step;
                iterationCount++;
                return result;
            }
            return {value:iterationCount, done:true};

        }
    };
}

const myIterator=makeIterator(0,10,2);

let result=myIterator.next();
while(!result.done){
    console.log(result.value);
    result=myIterator.next();                                          //increamenting the result
}

// the main function of next() is to return the next value in the sequence and 
// done as false if there are more values to iterate over. If there are no more values to iterate over,
//  it should return done as true. The value property is used to return the current value in the sequence.





// Generators in JS --> Generators are functions that can be paused and resumed.
//  They are created using function* keyword. When called, generator functions do not execute their code.
//   Instead, they return a special type of iterator called a Generator.

function* generatorFunction(){
    console.log('This will be executed first');
    yield 'Hello,';
    console.log('I will be printed after the first next() call');
    yield 'World!';
}




// example

function* count(){
    yield 1;    
    yield 2;
    yield 3;
}
const even=count();
for(const i of even){
    console.log(i);
}




// Generators with return statement

function* generatorFunction(){
    yield 'Hello,';
    yield 'World!';
    return 'Goodbye!';
}
const generator=generatorFunction();
console.log(generator.next());



// Generator with custom iterator

function* makemyIterator(){

    for(let i=start ;i<=end;i+=stepSize){
        yield i;
    }

}
const myIterator1=makemyIterator(0,10,2);
let result1=myIterator.next();
console.log(result1.value);








