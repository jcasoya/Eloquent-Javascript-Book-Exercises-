/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. 
We can build something like that now. 
Write a function min that takes two arguments and returns their minimum.
*/

const min = function(a, b) {
    if (a > b) {
        return b;
    } else {
        return a;
    }
}

// Tests
console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10

//Solution 
function minBook(a, b) {
    if (a < b) return a;
    else return b;
  }

// Tests
console.log(minBook(0, 10));
// → 0
console.log(minBook(0, -10));
// → -10