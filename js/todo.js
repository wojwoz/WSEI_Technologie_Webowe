function addNewItem(list, intemText) {
    var listItem = document.createElement("li");
    listItem.innerText = intemText;
    list.appendChild(listItem);
};

var btnNew = document.getElementById("btnAdd");
btnNew.onclick = function() {
    var itemText = prompt("new item?");
    if(!intemText || intemText == "")
    {
        return false;
    }

    addNewItem(document.getElementById("todolist"));
}; 