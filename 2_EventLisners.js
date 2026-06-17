// What is event handling
// Any action that happend in the browser that will raise an event

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
// let para = document.querySelector(".event")
// function dblclick(){
//     para.style.color = "red"
// }
// para.addEventListener ("dblclick",dblclick)
// para.removeEventListener("dblclick", dblclick) // This is how to remove Events

// ! input event
// let inputText = document.querySelector(".inp")
// inputText.addEventListener("input", function(evt){
//     console.log(evt.data)
// }) // .data is a inbuild function in which the input value get stores

// let inputText = document.querySelector(".inp")
// inputText.addEventListener("input", function(evt){
//     if (evt.data !== null){
//         console.log(evt.data)
//     }
// })

// ! Change Event
// let sel = document.querySelector(".select")

// let heading3 = document.querySelector(".h3")

// sel.addEventListener("change", function(evt){
//     console.log(evt.target.value)
//     heading3.textContent = `Devices Selected is ${evt.target.value}`
// })

// ! keydown event

// let h2 = document.querySelector(".heading2")
// window.addEventListener("keydown", function(evt){
//     if (evt.key === " "){
//         h2.textContent = "SPC"
//     }
//     else{
//         h2.textContent = evt.key
//     }
// })

// ! This is how to make your own file button (Deep level)

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

// let evtmouse = document.querySelector(".mouse")

// evtmouse.addEventListener("mouseover", function(){
//     evtmouse.style.backgroundColor = "yellow"
// })

// evtmouse.addEventListener("mouseout", function(){
//     evtmouse.style.backgroundColor = "red"
// })

// ! Event Bubbling : Event Bubble in the process in which if the element does not get an evt it will search the evt in his parents

// let ul = document.querySelector("ul")
// ul.addEventListener("click",function(evt){
//     evt.target.classList.toggle("lt")
// })

// ! Event bubbling example

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
