//2.1 FIZZBUZZ

//Part One: log 1 to 100, if % by 3 log Fizz, if % by 5 log BUZZ
for (let current = 1; current <= 100; current++) {
    console.log(current)
    if (current % 3 === 0) {
      console.log("FIZZ");
      continue;
    }
    if (current % 5 === 0) {
      console.log("BUZZ");
      continue;
    }
  }