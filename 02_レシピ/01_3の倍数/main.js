const number = 24
if (number % 3 === 0) {
  console.log(number + "!!!!!!!")
} else {
  console.log(number)
}

// TRY
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
genkiFunction(100)

/* FizzBuzz */
const FizzBuzz = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) console.log("FizzBuzz")
    else if (n % 3 === 0) console.log("Fizz")
    else if (n % 5 === 0) console.log("Buzz")
    else console.log(n)
  }
}
FizzBuzz(30)

/* 3が大好き */
const genki3Function = function (num) {
  for (let n = 1; n <= num; n++) {
    if (n.toString().includes("3") && n % 3 !== 0) console.log("元気！")
    else console.log(n)
  }
}
genki3Function(34)

/* 元気な秒針 */
let count = 0
const countUp = function () {
  // count を更新
  count += 1
  if (count % 3 === 0) {
    console.log(count + "!!!!!!!")
  } else {
    console.log(count)
  }
}
const genkiWatch = function () {
  setInterval(countUp, 1000)
}
genkiWatch()
