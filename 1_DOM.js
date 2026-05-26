// What is DOM : DOM stand for "Document Object Model" is used for changing or manipulating HTML
import { createElement } from 'https://esm.sh/react';
// Selectors : getElementById, getElementByClassName, querySelector, querySelectorAll 

// to Select a Element by using id is getElementById(id name)

// let heading = document.getElementById("heading1")
// console.log(heading) // This is how we select id 

// for class

// let box = document.getElementsByClassName("box")
// console.dir(box) // This will return a array like structure in which there can be multiple 
// tag with same class name

// querySelector

// let div = document.querySelector('div')
// console.dir(div) // this will select only the div in the html file

// let divAll = document.querySelectorAll('div')
// console.dir(divAll) // This will return all the element of the class in the array like strucuture

// DOM Manipulation

// let heading = document.querySelector("h2");
// console.dir(heading.textContent = "Hello Ayush");

// let heading = document.querySelector("h2");
// console.dir(heading.innerText = "Hello Ayush"); // This will also change the text

// let heading = document.querySelector ('h2')
// heading.innerHTML = "<h1>Hello, Ayush</h1>"

// Attribute manipulations : getAttribute, setAttribute, removeAttribute
// setattribute
// let anchor = document.querySelector("a");
// anchor.setAttribute("href","http://www.google.com") // This is how we can setattribute for any attribute

// getattribute

// let anchor = document.querySelector("a")
// console.log(anchor.getAttribute("href")) // This how to get the attribute of the tag

// removeAttribute

// let anchor = document.querySelector('a')
// console.log(anchor.removeAttribute("href")) // This is how to remove attribute of any element

// Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend 

// let h2 =document.createElement("h1")
// h2.textContent = "Ayush bhai Jai shree ram. Kesa ho"
// console.log(document.querySelector("body").prepend(h2))

// Js se css change karna 

// let h2 = document.createElement("h2")
// h2.textContent="Hello"
// document.querySelector("body").prepend(h2)
// h2 = document.querySelector('h2')
// h2.style.color = "red"  // Created the element with js and change the color 

// Practices and theory Questions

// What is DOM? How does it represent the HTML sturcture
// DOM Stands for Document Object Model. it is use for maniplating HTML and CSS using Javascript

// select the heading of the page by ID and change it's text to "Ayush Singh"
// let ChangeHeading = document.getElementById("heading")
// ChangeHeading.textContent = "Hello Ayush"

// Select all <li> element aand print all of them using loop

// let Getfruits = document.querySelectorAll("li") // querySelectorAll gives element in form of array
// Getfruits.forEach(function(n){
//     console.log(n.textContent)//.textContent will provide us with content of the element
// })

// let paragraph = document.querySelector(".para")
// paragraph.innerHTML = "<b> Updated </b> by Javascript"

// let GetImageSrc = document.querySelector(".img")
// console.log(GetImageSrc.getAttribute("src"));

// let anchor = document.querySelector(".anchorTag")
// anchor.setAttribute ("href", "https://unsplash.com/") 



// let div = document.createElement("div")
// div.textContent = "This is div "
// div.title ="Div" // This is how to add title for any element  
// console.log(document.querySelector("body").prepend(div))

// Remove Disable Attribute form the button

// let btn = document.querySelector(".btn")
// btn.removeAttribute("disabled")

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// li.textContent = "New Task"
// ul.appendChild(li)

// let img = document.createElement("img")
// img.setAttribute("src","data:image/png;base64,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")
// document.querySelector("body").prepend(img)

// let ul = document.querySelectorAll("ul li")
// ul.forEach(function(element,index){
//     if ((index+1) % 2 === 0){
//         element.classList.add("highlight")
//     }
// })
