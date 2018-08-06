var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

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

function destructivelyAddElementToEndOfArray(array4, element4) {
  array4.push(element4)
  return array4;
}
function accessElementInArray(Array5, index1) {
  return Array5[index1];
}
 function destructivelyRemoveElementFromBeginningOfArray(Arr6) {
  Arr6.shift()
  return Arr6;
}
 function removeElementFromBeginningOfArray(Arr7) {
  Arr7 = Arr7.slice(1)
  return Arr7;
}
 function destructivelyRemoveElementFromEndOfArray(Arr8) {
  Arr8.pop()
  return Arr8;
}
 function removeElementFromEndOfArray(Arr9) {
  return Arr9.slice(0, Arr9.length - 1);
  return Arr9;
}
