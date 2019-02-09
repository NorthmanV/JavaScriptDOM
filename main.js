var form = document.getElementById("addForm")
var itemList = document.getElementById("items")
var filter = document.getElementById("filter")

// Add item
form.addEventListener("submit", addItem)

function addItem(event) {
    event.preventDefault()
    var newItem = document.getElementById("item").value
    var li = document.createElement("li")
    li.className = "list-group-item"
    li.appendChild(document.createTextNode(newItem))

    var deleteButton = document.createElement("button")
    deleteButton.className = "btn btn-danger btn-sm float-right delete"
    deleteButton.appendChild(document.createTextNode("X"))
    li.appendChild(deleteButton)

    itemList.appendChild(li)
}

// Remove item
itemList.addEventListener("click", removeItem)

function removeItem(event) {
    if(event.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
            console.log(event.target)
            var li = event.target.parentElement
            itemList.removeChild(li)
        }
    }
}

// Filter items
filter.addEventListener("keyup", filterItems)
function filterItems(event) {
    var text = event.target.value.toLowerCase()
    var items = itemList.getElementsByTagName("li")
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent
        if(itemName.toLowerCase().includes(text)) {
            item.style.display = "block"
        } else {
            item.style.display = "none"
        }
    })
}

