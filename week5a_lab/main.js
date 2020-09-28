function addListItem() {
    const list = document.getElementById('grocery-list');
    const itemInput = document.getElementById('newListItem');
    const newItem = document.createElement('li');
    newItem.appendChild(document.createTextNode(itemInput.value));
    list.appendChild(newItem);
}

