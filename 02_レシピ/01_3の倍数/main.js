const number = 24
if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}

for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!!!")
  } else {
    console.log(n)
  }
}

const genkiFunction = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

/* FizzBuzz */
const FizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) 
        console.log("FizzBuzz");
    else if (n % 3 === 0) 
        console.log("Fizz");
    else if (n % 5 === 0) 
        console.log("Buzz");
    else 
        console.log(n);
  }
}

/* 3が大好き */
const genki3Function = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n.search("3") && n % 3 !== 0) console.log("元気！")
    else console.log(n);
  }
}
