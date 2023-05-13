//2.1 FIZZBUZZ

//Part One: log 1 to 100, if % by 3 log Fizz, if % by 5 log BUZZ
for (let current = 1; current < 100; current++) {
  number = console.log(current)
  if (current % 3 === 0) {
    console.log("FIZZ");
  }
  if (current % 5 === 0) {
    console.log("BUZZ");
  }
  if (current % 3 === 0 && current % 5 === 0) {
    console.log("FIZZBUZZ");
  }
}

for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}
