function makemyIterator(start, end, stepSize) {
    for (let i = start; i <= end; i += stepSize) {
        yield i;
    }
}


const btn= document.getElementById("next-btn");
let one= makemyIterator(1,100,2);

btn.addEventListener("click",()=>{
    btn.innerText=one.next().value;
});













