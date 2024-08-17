// connect bluetooth using javascript

// this api only with chrome browser and secure context (https)

// first step is to paste "about://flags" in the browser and search for "Experimental Web Platform 
// features" and enable it


// follow official docs for this.



//try this in browser console
const task1=navigator.bluetooth.requestDevice({acceptAllDevices: true})
console.log(task);

const task2=navigator.bluetooth.requestDevice({acceptAllDevices: true, optionalServices: ['battery_service']})
console.log(task);







