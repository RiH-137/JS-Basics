function showTime(){
    const currentTime= new Date();
    console.log(currentTime);    

    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    console.log(time);

    //to display on the screen
    document.getElementById('time').innerText=time;
    
    
}

showTime();

/*
`setTimeout(finction, delay)` is a JavaScript function used to schedule a function to be executed after a specified delay. It takes two arguments:

1. `function`: The function to be executed.
2. `delay`: The time to wait before executing the function (in milliseconds).
3. `setTimeout() is use for only single time whereas 'setInterval()' is used for multiple times.

*/

// setTimeout()

// setInterval((function_name)=>,1000)
//clearinterval is a inbuilt function to stop the setInterval function

let interval=setInterval(showTime,1000); //1000ms=1s
const button=document.getElementById('button');
button.addEventListener("click",()=>{
    clearInterval(interval);




    const txt = document.getElementById('txt').innerText
    console.log("Clock is stopped");

});

















