// Access to elements on the page
console.dir(document) // print available objects
console.dir(document.URL)
document.title = "Some Lister" // change title
document.all[10].textContent = "Amaizing Lister" // change heading text
console.log(document.images)

// Access to elements by ID
var headerTitle = document.getElementById("header-title")
console.log(headerTitle)
headerTitle.innerHTML = "<h3>Hello</h3>" // puts h3 inside headerTitle
var header = document.getElementById("main-header")
header.style.borderBottom = "solid 3px gray" // add bottom border

// Access to elements by Class
var items = document.getElementsByClassName("list-group-item")
items[0].textContent = "First Item"
items[0].style.fontWeight = "bold"
items[0].style.backgroundColor = "#E6E6FA"
for(var i = 0; i < items.length; i++) { // change all items 
    items[i].style.backgroundColor = "#E0FFFF"
}

// Access to elements by Tag
// do same as a code above
var li = document.getElementsByTagName("li")
li[0].textContent = "First Item"
li[0].style.fontWeight = "bold"
li[0].style.backgroundColor = "#E6E6FA"
for(var i = 0; i < li.length; i++) { // change all items 
    li[i].style.backgroundColor = "#FFEFD5"
}

// Query selector
var input = document.querySelector("input") // grabs first coincidence, can be applied to class and id with css syntex
input.placeholder = "Enter something"
var submit = document.querySelector("input[type=submit]")
submit.value = "Send"
var lastItem = document.querySelector(".list-group-item:last-child")
lastItem.style.color = "#7B68EE"

// Query selector all
var titles = document.querySelectorAll(".title")
titles[0].style.fontStyle = "italic"
var oddItems = document.querySelectorAll("li:nth-child(odd)")
for(var i = 0; i < oddItems.length; i++){
    oddItems[i].style.backgroundColor = "#48D1CC"
}

// Parent node and parent element
var itemsList = document.querySelector("#items")
itemsList.parentNode.style.backgroundColor = "#F0F8FF"
itemsList.parentElement.style.backgroundColor = "#F0FFF0"

// Child nodes
console.log(itemsList.childNodes) // takes elements with spaces between them ""
itemsList.children[2].style.color = "#FF6347" // children do not include spaces

// First child and first element child (same for the last)
console.log(itemsList.firstChild) // take space
console.log(itemsList.firstElementChild) // take first element (not space)

// Next sibling and next elemtent sibling - elements on same level (same for the previous)
console.log(itemsList.nextSibling) // take space
console.log(itemsList.nextElementSibling) // take next element if any

// Create new element
var newDiv = document.createElement("div")
newDiv.className = "someDiv"
newDiv.setAttribute("title", "It is Div")
newDiv.style.fontSize = "22px"
var newText = document.createTextNode("It is begin")
newDiv.appendChild(newText)
var container = document.querySelector("header .container")
var h1 = document.querySelector("header h1")
container.insertBefore(newDiv, h1)