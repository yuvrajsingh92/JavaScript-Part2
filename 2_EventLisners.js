// ! What is event handling
// ? Any action which occurce when we click,double click, hover, Etc is called event

// let h1 = document.createElement("h1")
// h1.textContent = "Hello"
// document.body.prepend(h1)

// h1.addEventListener("click",()=>{
//     h1.textContent = "Hello Ayush"
//     h1.style.backgroundColor = "black"
//     h1.style.color = "White"
// })

// ! example of event : Single click
// let event = document.querySelector(".event")
// event.addEventListener("click",function(){
//     event.style.color = "red" // This is how to handle events in js
// })

// ! Double Click
// let para = document.querySelector(".event")
// para.addEventListener("dblclick",function(){
//     para.style.color = "red"
// })

// ! This is how to remove EventLisner

// let p = document.createElement("p")
// p.textContent = "Ahahhhhhhhhhhh"
// document.body.prepend(p) // ? Created p tag and add in the body

// function makeRed (){
//     p.style.color = "red" // ? We have to create function spetatliy
// }

// p.addEventListener("dblclick",makeRed); // ? Add event lisnter
// p.removeEventListener("dblclick",makeRed); // ? Removed Event lisner

// ! input event

// let input = document.createElement("input");
// input.placeholder = "Enter Your Name: ";
// document.body.prepend(input);

// input.addEventListener("input",(e)=>{
//     if (e.data !== " " && e.data !== null){
//         console.log(e.data)
//     }
// })

// ! Change Event

// let select = document.querySelector("select")
// let h3 = document.querySelector("h3")

// select.addEventListener("change",(e)=>{
//     console.log(e.target.value)
//     h3.textContent = `Device Selected is ${e.target.value}`
//     h3.style.textTransform = "capitalize"
// })

// ! keydown event

// let h2 = document.querySelector("h2");
// window.addEventListener("keydown", (e) => {
//     if (e.key !== " " && e.key !== "Backspace"){
//         h2.textContent = e.key
//     }
// });

// ! This is how to make your own file button (Deep level)

// let input = document.querySelector("#input");
// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   input.click();
// });

// input.addEventListener("change",(e)=>{
//     btn.textContent = e.target.files[0].name
// })

// let Onclick = document.querySelector(".btn");
// let Inputfile = document.querySelector("#inputFile");

// Onclick.addEventListener("click", function () {
//   Inputfile.click(); // click() function is a inbuilt function
// });

// Inputfile.addEventListener("change", function(evt){
//     const file = evt.target.files[0]
//     if (file){
//         Onclick.textContent = file.name
//     }
// })

// ! Submit Event

// let inputs = document.querySelectorAll("input");
// let form = document.querySelector("form");
// let main = document.querySelector(".main");

// form.addEventListener("submit", function (evt) {
//   evt.preventDefault();

//   let imageUrlValue = inputs[0].value;
//   let nameValue = inputs[1].value;
//   let emailValue = inputs[2].value;
//   let ageValue = inputs[3].value;

//   let card = document.createElement("div");
//   card.classList.add("card");

//   let profile = document.createElement("div");
//   profile.classList.add("profile");

//   let img = document.createElement("img");
//   img.setAttribute("src", imageUrlValue);
//   img.setAttribute("alt", `${nameValue}'s profile`);

//   let h3 = document.createElement("h3");
//   h3.textContent = nameValue;

//   let h5 = document.createElement("h5");
//   h5.textContent = emailValue;

//   let p = document.createElement("p");
//   p.textContent = `Age: ${ageValue}`;

//   profile.appendChild(img);
//   card.appendChild(profile);
//   card.appendChild(h3);
//   card.appendChild(h5);
//   card.appendChild(p);

//   main.appendChild(card);

//   form.reset();
// });

// ! Mouseover and mouseout Event

// let main = document.querySelector(".main");

// main.addEventListener("mouseover", () => {
//   main.style.backgroundColor = "yellow";
// });

// main.addEventListener("mouseout", () => {
//   main.style.backgroundColor = "red"; 
// });

// ! Event Bubbling : Event Bubble in the process in which if the element does not get an evt it will search the evt in his parents

// let ul = document.querySelector("ul")
// ul.addEventListener("click",function(evt){
//     evt.target.classList.toggle("lt")
// })

// ! Event Capturing example

// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let button = document.querySelector("button");

// button.addEventListener("click", function () {
//   console.log("Button Was Clicked");
// });

// a.addEventListener(
//   "click",
//   function () {
//     console.log("A Was Clicked");
//   },
//   true,
// );
// b.addEventListener("click", function () {
//   console.log("B Was Clicked");
// });
// c.addEventListener("click", function () {
//   console.log("C Was Clicked");
// },true);

// ! Character Counter

// let inputs = document.querySelector("input");
// let span = document.querySelector("span");

// inputs.addEventListener("input", function () {
//   let left = inputs.value.length;
//   span.textContent = left;
//   if (left > 20) {
//     span.style.color = "red";
//   } else {
//     span.style.color = "black";
//   }
// });
