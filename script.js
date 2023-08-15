const draggableListItems = document.querySelectorAll('.draggable-list li');
const endMessage = document.getElementById('endMessage');

let selectedId;

let dropTargetId;

let matchingCounter = 0;
let count = 0;

addEventListeners();

function dragStart() {
  selectedId = this.id;
}

function dragEnter() {
  this.classList.add('over');
}

function dragLeave() {
  this.classList.remove('over');
}

function dragOver(ev) {
  ev.preventDefault();
}

function dragDrop() {
  dropTargetId = this.id;

  if (checkForMatch(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.backgroundColor = 'green';
    document.getElementById(dropTargetId).style.backgroundColor = 'green';
    matchingCounter++;
  } else if (checkForMatch2(selectedId, dropTargetId)) {
    document.getElementById(selectedId).style.backgroundColor = 'green';
    document.getElementById(dropTargetId).style.backgroundColor = 'green';
    matchingCounter++;
  } else {
    document.getElementById(selectedId).style.backgroundColor = 'red';
    document.getElementById(dropTargetId).style.backgroundColor = 'red';
    count++;
    matchingCounter++;
  }

  if (matchingCounter === 4) {
    document.getElementById("demo").innerHTML = 4-count;
    endMessage.style.display = 'block';
    draggableListItems.forEach(item => {
    document.getElementById(item.id).style.display = 'none';
  })
  }

  this.classList.remove('over');
}

function checkForMatch(selected, dropTarget) {
  switch (selected) {
    case 'e1':
      return dropTarget === 's1' ? true : false;

    case 'e2':
      return dropTarget === 's2' ? true : false;

    case 'e3':
      return dropTarget === 's3' ? true : false;

    case 'e4':
      return dropTarget === 's4' ? true : false;

    default:
      return false;
  }
}

function checkForMatch2(selected, dropTarget) {
  switch (selected) {
    case 's1':
      return dropTarget === 'e1' ? true : false;

    case 's2':
      return dropTarget === 'e2' ? true : false;

    case 's3':
      return dropTarget === 'e3' ? true : false;

    case 's4':
      return dropTarget === 'e4' ? true : false;

    default:
      return false;
  }
}

function playAgain() {
  matchingCounter = 0;
  count = 0;
  endMessage.style.display = 'none';
  draggableListItems.forEach(item => {
    document.getElementById(item.id).style.backgroundColor = 'white';
    document.getElementById(item.id).style.display = 'block';
  })
}

function addEventListeners() {
  draggableListItems.forEach (item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('drop', dragDrop);
    item.addEventListener('dragover', dragOver);
    item.addEventListener('dragleave', dragLeave);
  })
}