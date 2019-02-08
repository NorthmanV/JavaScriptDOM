var form = document.getElementById("addForm")
var itemList = document.getElementById("items")

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