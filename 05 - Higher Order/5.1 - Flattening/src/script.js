// Flattening

/* 
Use the reduce method in combination with the concat method to “flatten” an array of arrays 
into a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

// Your code here.
let flattenedArray = arrays.reduce((a, b) => {
  return a.concat(b);
}, []);

console.log(flattenedArray);
// → [1, 2, 3, 4, 5, 6]

let arraysSolution = [[1, 2, 3], [4, 5], [6]];

console.log(arraysSolution.reduce((flat, current) => flat.concat(current), []));