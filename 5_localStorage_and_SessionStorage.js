// ! What is LocalStorage: LocalStorage is like a database that stores data into browers and when we close your brower it will not deleted. it's basicly brower's database - Around 5Mb

// In localStorage their are mainly 4 things we have to study
// store, data fetch, remove data, update

// ? store

// localStorage.setItem("name","Ayush Singh") // ? This is how to store data

// ? data fetch

// let val = localStorage.getItem("name")
// console.log(val)

// ? remove data: if we one's delete it. it will get deleted permentally

// localStorage.removeItem("name")

// localStorage.setItem("Name", "Ayush Singh");
// localStorage.setItem("Age", "21");
// localStorage.setItem("Gender", "Male");

// let name = localStorage.getItem("Name")
// console.log(name)

// let age = localStorage.getItem("Age")
// console.log(age)

// let gender = localStorage.getItem("Gender")
// console.log(gender)

// ! What is sessionStorage: sessionstoarage storages the data into the browers temporarily store and when we close the tab the sessiondata get's deleted

// In sessionStorage everything is same just like localStorage same property and one's the tab get closed it will lose all the data

// ? Data storage-setItem()

// sessionStorage.setItem("Name","Ayush Singh")

// sessionStorage.getItem("Name")

// sessionStorage.removeItem("Name")

// sessionStorage.clear() // ? .clear is used to clear all the data is stored in the session


// ! cookies: This is like storing light or small amount of data into brower's cookies property and the data which we store in cookies will automatically goes to server when we reload  - Around 4kb

// let cookie = document.cookie = "name = Ayush Singh"
// console.log(cookie)

// ? To see this cookie we have to go to "editthiscookie by chrome" and add it to the extension. and like this we can store small info

// let email = document.cookie = "Email = ayuvraj929@test.com"
// console.log(email)