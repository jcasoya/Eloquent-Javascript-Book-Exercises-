// My solution
let string = "#";
// while -> string length less than 8 continue adding # to string
while (string.length <= 7) {
  console.log(string);
  string = string + "#";
}

//Book's solution
for (let line = "#"; line.length < 8; line += "#")
  console.log(line);
