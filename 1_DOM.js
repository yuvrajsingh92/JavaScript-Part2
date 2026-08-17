// ! What is DOM : DOM stand for "Document Object Model" is used for changing or manipulating HTML

import { createElement } from 'https://esm.sh/react';

// ! Selectors : getElementById, getElementByClassName, querySelector, querySelectorAll 

// to Select a Element by using id is getElementById(id name)

// let heading = document.getElementById("heading1")
// console.log(heading) // ? This is how we select id and this will retunr whole h1 tag as shown below
// <h1 id="heading1">Hey heyy kaise ho</h1> 

// ? for class

// let box = document.getElementsByClassName("box")
// console.dir(box) // ? This will return a array like structure in which there can be multiple tag with same class name

// ? querySelector

// let div = document.querySelector('div')
// console.dir(div) // ? this will select only the div in the html file

// let divAll = document.querySelectorAll('div')
// console.dir(divAll) // ? This will return all the element of the class in the array like strucuture

// let h2 = document.querySelector("h2")
// h2.textContent = "Hello Ayush"

// ! DOM Manipulation

// let heading = document.querySelector("h2");
// console.log(heading.textContent = "Hello Ayush");

// let heading = document.querySelector("h2");
// console.dir(heading.innerText = "Hello Ayush"); // ? This will also change the text

// let heading = document.querySelector ('h2')
// heading.innerHTML = "<h1>Hello, Ayush</h1>"

// ! Attribute manipulations : getAttribute, setAttribute, removeAttribute

// ? setattribute

// let anchor = document.querySelector("a");
// anchor.setAttribute("href","http://www.google.com") // ? In setAttribute we have to pass 2 parameter first is the attribute name and the second is what to put

// ? getattribute

// let a = document.querySelector("a")
// console.log(a.getAttribute("href")) // ? This is how we can get href value

// ? removeAttribute

// let anchor = document.querySelector('a')
// console.log(anchor.removeAttribute("href")) // ? This is how to remove attribute of any element

// ! Dynamic DOM manipulation: createElement, appendChild, removeChild, prepend 

// let h2 =document.createElement("h2")
// h2.textContent = "Ayush bhai Jai shree ram. Kesa ho"
// console.log(document.querySelector("body").prepend(h2))

// ? Creating an image

// let img = document.createElement("img")
// img.setAttribute("src", "https://images.unsplash.com/photo-1786739416839-ecaa6e884dbe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
// img.setAttribute("alt","Indian flag")
// document.body.append(img)

// let a = document.createElement("a")
// a.textContent = "Google"
// a.setAttribute("href","http://www.google.com")
// document.body.append(a)


// ! Js se css change karna 

// let h2 = document.createElement("h2")
// h2.textContent = "Hello Bhai log"
// h2.style.color = "White"
// h2.style.backgroundColor = "Black"
// document.body.append(h2)
// h2.style.height = "100px"
// h2.style.textAlign = "center"

// ! Practices and theory Questions

// What is DOM? How does it represent the HTML sturcture
// DOM Stands for Document Object Model. it is use for maniplating HTML and CSS using Javascript

// select the heading of the page by ID and change it's text to "Ayush Singh"
// let ChangeHeading = document.getElementById("heading")
// ChangeHeading.textContent = "Hello Ayush"

// Select all <li> element and print all of them using loop

// ? Select ul and print the li inner text 

// let text = document.querySelectorAll("ul")
// text.forEach((n)=>{
//     console.log(n.textContent)
// })

// ? Another way to do the same thing using for loop

// let li = document.querySelectorAll("li")
// for (let i = 0; i < li.length;i++){
//     console.log(li[i].textContent)
// }

// let paragraph = document.querySelector(".para")
// paragraph.innerHTML = "<b> Updated </b> by Javascript"

// let GetImageSrc = document.querySelector(".img")
// console.log(GetImageSrc.getAttribute("src"));

// let anchor = document.querySelector(".anchorTag")
// anchor.setAttribute ("href", "https://unsplash.com/") 

// ? Create a div and add title to it

// let div = document.createElement("div")
// div.textContent = "This is div "
// div.title ="Div" // This is how to add title for any element  
// console.log(document.querySelector("body").prepend(div))

// ? create li and add at the end ul

// let ul = document.querySelector("ul")
// let li = document.createElement("li")
// li.textContent = "New Task"
// ul.appendChild(li)

// ? Creata a new image element with placeholder source and add it at the top of a div

// let img = document.createElement("img")
// img.setAttribute("src","https://images.unsplash.com/photo-1786784968337-4fdd449f8cb7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8")
// img.setAttribute("placeholder","source")
// document.body.prepend(img)

// ? delete the first element from the ul

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")

// ul.removeChild(li)

// ? Remove Disable Attribute form the button

// let btn = document.querySelector(".btn")
// btn.removeAttribute("disabled")

// let ul = document.querySelector("ul")
// let li = document.querySelector("li")
// li.textContent = "New Task"
// ul.appendChild(li)

// let ul = document.querySelectorAll("ul li")
// ul.forEach(function(element,index){
//     if ((index+1) % 2 === 0){
//         element.classList.add("highlight")
//     }
// })