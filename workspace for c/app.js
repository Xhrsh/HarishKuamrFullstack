function addItem() {
  const newItemText = document.getElementById("newItem").value.trim();
  
  if (newItemText !== "") {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox" onclick="markDone(this)">${newItemText} <button
  onclick="removeItem(this)">Remove</button>`;
  document.getElementById("todoList").appendChild(listItem);
  document.getElementById("newItem").value = "";
  }
  }
  
  // Function to mark an item as done
  function markDone(checkbox) {
  const listItem = checkbox.parentNode;
  listItem.classList.toggle("done");
  }
  
  // Function to remove an item from the list
  function removeItem(button) {
  const listItem = button.parentNode;
  listItem.remove();
  }