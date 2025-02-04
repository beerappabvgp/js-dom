// // I wanted to access the h1 tag using js

// // DOM apis

// let h1 = document.getElementById("h1");
// console.log("h1 is: ", h1);
// console.log(h1.innerText);

// h1.innerText = "This is an introduction to DOM";
// console.log(h1);
// h1.innerHTML = "This is modified by innerHtml ... ";

// let inner = document.getElementsByClassName("inner");
// console.log(inner);

// inner[0].innerHTML = "This is modified by js .... ";
// inner[1].innerHTML = "Second div is modified ... ";
// // inner

// // getElementsByTagName

// const text = document.getElementsByTagName("p");
// text[0].innerHTML = "This para is modified using tag name ... ";
// console.log(text);

// // document.querySelector

// const firstPara = document.querySelector(".inner");
// console.log(firstPara);

// const allParas = document.querySelectorAll("p");
// console.log(allParas);

// // modifying attributes

// const image = document.getElementsByTagName("img");
// console.log(image);
// // image[0].attributes[0].nodeValue = "./image.jpg";
// // image[0].attributes[1].nodeValue = "./image.jpg";
// setTimeout(() => {
//     image[0].src = "./image.jpg";
// }, 4000);
// console.log(image);

// // const body = document.getElementsByTagName("body");
// // console.log(body);

// // setTimeout(() => {
// //     body[0].style.backgroundColor = "white";
// // }, 3000);

// const section = document.getElementById("section");

// const newDiv = document.createElement("div");
// const dummyP = document.createElement("p");
// dummyP.innerText = "this is dummy para ... ";
// const link = document.createElement("a");
// link.href = "https://www.amazon.com/";
// link.style.color = "blue";
// link.innerText = "amazon";
// newDiv.appendChild(link);
// newDiv.appendChild(dummyP);
// console.log("newDiv", newDiv);
// section.appendChild(newDiv);
// console.log("section: ", section);

// setTimeout(() => {dummyP.remove();}, 3000);

// // selcting the button

// const button = document.getElementById("button");
// console.log(button);
// // button.onclick = (event) => {
//     console.log(event);
//     alert("You clicked on purchase button");
// }

// section.onclick = () => {
//     console.log("clicked on section");
//     alert("clicked on section tag");
// }

// const add = (num1, num2) => {
//     return num1 + num2;
// }

// const greet = () => {
//     console.log("Welcome user!");
// }

// addEventListeners
// const clickHandler = (event) => {
//     console.log(event);
//     console.log("Double clicked on the button ... ");
//     alert("double clicked on the button ... ");
// };
// button.addEventListener("dblclick", clickHandler);

// button.removeEventListener("dblclick", clickHandler);

// setTimeout(() => {
//     button.removeEventListener("dblclick", clickHandler);
// }, 5000);

// const container = document.getElementById("container");
// const parent = container.parentElement;

// const children = container.childNodes;
// console.log("children ... ", children);
// console.log("next sibling...", container.nextElementSibling);
// console.log("next sibling2 ...", container.nextElementSibling.nextElementSibling);
// console.log(parent);

// const para = document.querySelectorAll(".para");
// console.log(para);

// const clickHandler = () => {
//   for (const node of para) {
//     console.log(node);
//     node.classList.add("class2");
//   }
// };

// const button = document.getElementsByTagName("button");
// button[0].addEventListener("click", clickHandler);

// setTimeout(() => {
//     const user = {
//         name: "ganesh",
//         age: 23,
//         address: "AP"
//     };

//     for (const key in user) {
//         console.log(key);
//         console.log(user[key]);
//     }
// }, 0);

// If it is array you can use "of" but you cant use it for objects
// If it is object you can use "in"

// const main = () => {
//   const nums = [1, 2, 3, 4];
//   const user = {
//     name: "ganesh",
//     age: 23,
//     address: "AP",
//   };
//   console.log(nums);
//   for (const num in nums) {
//     console.log(num);
//     console.log(nums[num]);
//   }
//   console.log("===============");
//   for (const num of nums) {
//     console.log(num);
//   }
//   console.log("================");
//   for (const prop in user) {
//     console.log(prop);
//   }
// };

// main();



// const div3 = document.getElementById("div3");
// const div2 = document.getElementById("div2");
// const div1 = document.getElementById("div1");
// const section = document.getElementById("section");

// const divThreeHandler = () => {
//     console.log("div3 has been clicked ... ");
// }
// const divTwoHandler = () => {
//     console.log("div2 has been clicked ... ");
// }
// const divOneHandler = () => {
//     console.log("div1 has been clicked ... ");
// }
// const sectionHandler = () => {
//     console.log("section has been clicked ... ");
// }

// // div1.onclick = () => {
// //   console.log("div1 clicked ... ");
// // }

// div3.addEventListener("click", divThreeHandler);
// div2.addEventListener("click", divTwoHandler);
// div1.addEventListener("click", divOneHandler);
// section.addEventListener("click", sectionHandler);



// document.getElementById("parent").addEventListener("click", function() {
//   console.log("Parent Div Clicked!");
// });
// document.getElementById("child").addEventListener("click", function() {
//   console.log("Button Clicked!");
// });




// const output = document.querySelector("#output");
// function handleClick(e) {
//   output.textContent += `You clicked on a ${e.currentTarget.tagName} element\n`;
// }

// const container = document.querySelector("#container");
// const button = document.querySelector("button");

// document.body.addEventListener("click", handleClick);
// container.addEventListener("click", handleClick);
// button.addEventListener("click", handleClick);

const buttonHandler = () => {
    console.log("button has been clicked ... ");
}
const sectionHandler = () => {
    console.log("section has been clicked ... ");
}
const section = document.getElementById("section");
const button = document.getElementById("button");
section.addEventListener("click", sectionHandler);
button.addEventListener("click", buttonHandler);
const body = document.getElementsByTagName("body");
body[0].addEventListener("click", () => {console.log("body clicked")});