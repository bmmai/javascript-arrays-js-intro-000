var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  return [element, ....array];
}

function destructivelyAddElementToBeginningOfArray(array2, element2) {
  array2.unshift(element2)
  return array2;
}

function addElementToEndOfArray(array3, element3) {
  return [...array3, element3];
}

function destructivelyAddElementToEndOfArray