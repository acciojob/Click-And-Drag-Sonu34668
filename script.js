function handleClick(event) {
  // Get the current mouse position.
  var mousePosition = event.clientX + event.clientY;

  // Get the element that was clicked.
  var clickedElement = event.target;

  // Set the element's draggable property to true.
  clickedElement.draggable = true;

  // Set the element's data-x and data-y attributes to the mouse position.
  clickedElement.setAttribute('data-x', mousePosition.x);
  clickedElement.setAttribute('data-y', mousePosition.y);
}

function handleDrag(event) {
  // Get the current mouse position.
  var mousePosition = event.clientX + event.clientY;

  // Get the element that is being dragged.
  var draggedElement = event.target;

  // Set the element's position to the mouse position.
  draggedElement.style.left = mousePosition.x - draggedElement.getAttribute('data-x');
  draggedElement.style.top = mousePosition.y - draggedElement.getAttribute('data-y');
}

var cubes = document.querySelectorAll('.cube');

for (var i = 0; i < cubes.length; i++) {
  cubes[i].addEventListener('mousedown', handleClick);
  cubes[i].addEventListener('drag', handleDrag);
}