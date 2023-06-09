// Recursion
/*
We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd
by using % 2 to see whether it’s divisible by two. 
Here’s another way to define whether a positive whole number is even or odd:
- Zero is even.
- One is odd.
For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. 
The function should accept a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// My Code = WRONG, not using a recursive function!!!
// const isEven = (number) => (number % 2  == 0) ? true : false;

// REDO wihtout looking at the solution again
const isEven = function(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) {
    return isEven(-n);
    } else {
      return isEven(n - 2);
    }
  }

// Book solution
function isEvenBook(n) { 
  if (n == 0) return true; 
  else if (n == 1) return false; 
  else if (n < 0) return isEvenBook(-n); 
  else return isEvenBook(n - 2); 
}

// Tests
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??

// Tests
console.log(isEvenBook(50));
// → true
console.log(isEvenBook(75));
// → false
console.log(isEvenBook(-1));
// → ??
