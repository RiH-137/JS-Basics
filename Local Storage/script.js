<<<<<<< HEAD
const button= document.getElementById('clickButton');
const input= document.getElementById('input');
const username= document.getElementById('username');


button.addEventListener('click',() =>{

    const value=input.value;
    console.log(value);

    localStorage.setItem('Entered input',value);  //key,value
    
    location.reload();

});


window.addEventListener("load",() =>{

    const value=localStorage.getItem('Entered input');
    username.innerHTML=value;
});
























=======
const button= document.getElementById('clickButton');
const input= document.getElementById('input');
const username= document.getElementById('username');


button.addEventListener('click',() =>{

    const value=input.value;
    console.log(value);

    localStorage.setItem('Entered input',value);  //key,value
    
    location.reload();

});


window.addEventListener("load",() =>{

    const value=localStorage.getItem('Entered input');
    username.innerHTML=value;
});
























>>>>>>> 6a30639f4ddb790640cac53dcbb0890321370f31
