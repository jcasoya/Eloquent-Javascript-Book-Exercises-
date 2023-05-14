//Chessboard
/*
Write a program that creates a string that represents an 8×8 grid
using newline characters to separate lines.
At each position of the grid there is either a space or a "#" character.
The characters should form a chessboard.
Passing this string to console.log should show something like this:
# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 # # # # 
# # # #
 # # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
*/

/* 
1) Prompt user = width and height
2) Create a string with the width given by user
   -String must finish with \n
3) Repeat string times number of height 
   -Alternative string that start with space or with #
*/

function chessboard(width, height) {
    let string = "# ";
    let stringRepeat = string.repeat(width);
    let fullString = stringRepeat + "\n"
    let arr = [];
    let x = fullString;
    let y = height;
    for (let i=0; i<y; i++) {
    arr.push(x);
}   
    arr.forEach((element, index) => {
    if (index % 2 !== 0) {
      arr[index] = " " + element; 
    }
  });
    return arr.join("");
}

console.log(chessboard(3, 6));

