const mainbutton =document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector("span");

function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red},${green},${blue})`
    return randomColor;
}
mainbutton.addEventListener("click",()=>{
    const randomColor = randomColorGenerator();
     body.style.backgroundColor =randomColor;
     currentColor.textContent = randomColor;
})
console.log("hello");