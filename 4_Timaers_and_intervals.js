// ! Settimeout and setinterval

// ? settimeout is the function that accept another function and it take time in mileseconds and in 1s their are 1000ms

// setTimeout(() => {
//     console.log("Hello Ayush Singh")
// }, 1000);

// ? setinterval is like a infinte loop that run again and again

// setInterval(() => {
//     console.log("Hello ")
// }, 2000);

// ? cleartimeout is used to stop the settimeout

// let tm = setTimeout(()=>{
//     console.log("Ayush Singh")
// },3000)

// clearTimeout(tm)

// ? clearInterval is used to stop the setinterval

// let si = setInterval(() => {
//     console.log("Kya bolte public bole to taklif")
// }, 2000);

// clearInterval(si)

// ? Create a counter.The counter starts form 10 and end's at 0

// let count = 10;

// let stop = setInterval(() => {
//   if (count > 0) {
//     console.log(count);
//     count--;
//   } else {
//     clearTimeout(stop);
//   }
// }, 1000);

// ? Create a auto-hide alert banner after 3s

// let main = document.querySelector(".main")

// let intervalStop = setTimeout(() => {
//     main.style.display = "none"
// }, 3000);

// clearTimeout(intervalStop)