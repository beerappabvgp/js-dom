// I wanted to access the h1 tag using js

// DOM apis

let h1 = document.getElementById("h1");
console.log("h1 is: ", h1);
console.log(h1.innerText);

h1.innerText = "This is an introduction to DOM";
console.log(h1);
h1.innerHTML = "This is modified by innerHtml ... ";


let inner = document.getElementsByClassName("inner");
console.log(inner);

inner[0].innerHTML = "This is modified by js .... ";
inner[1].innerHTML = "Second div is modified ... ";
// inner


// getElementsByTagName

const text = document.getElementsByTagName("p");
text[0].innerHTML = "This para is modified using tag name ... ";
console.log(text);


// document.querySelector

const firstPara = document.querySelector(".inner");
console.log(firstPara);

const allParas = document.querySelectorAll("p");
console.log(allParas);


// modifying attributes

const image = document.getElementsByTagName("img");
console.log(image);
// image[0].attributes[0].nodeValue = "./image.jpg"; 
// image[0].attributes[1].nodeValue = "./image.jpg"; 
setTimeout(() => {
    image[0].src = "./image.jpg"; 
}, 4000);
console.log(image);

// const body = document.getElementsByTagName("body");
// console.log(body);

// setTimeout(() => {
//     body[0].style.backgroundColor = "white";
// }, 3000);


const section = document.getElementById("section");

const newDiv = document.createElement("div");
const dummyP = document.createElement("p");
dummyP.innerText = "this is dummy para ... ";
const link = document.createElement("a");
link.href = "https://www.amazon.com/";
link.style.color = "blue";
link.innerText = "amazon";
newDiv.appendChild(link);
newDiv.appendChild(dummyP);
console.log("newDiv", newDiv);
section.appendChild(newDiv);
console.log("section: ", section);

setTimeout(() => {dummyP.remove();}, 3000);


// selcting the button

const button = document.getElementById("button");
console.log(button);
// button.onclick = (event) => {
//     console.log(event);
//     alert("You clicked on purchase button");
// }


// section.onclick = () => {
//     console.log("clicked on section");
//     alert("clicked on section tag");
// }


// addEventListeners

button.addEventListener("dblclick", (event) => {
    console.log(event);
    console.log("Double clicked on the button ... ");
});