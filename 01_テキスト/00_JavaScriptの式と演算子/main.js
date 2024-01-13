// TRY: 練習問題１
let x = 57052 + 57054
console.log(x)
let y = "114" + "106"
console.log(y)

// TRY: 練習問題２
x = 5
x += 2
x *= 5
x = 100 % x
x /= 6
console.log(x)

const Happy = true
const Sleepy = true
console.log(Happy && Sleepy)
console.log(Happy || Sleepy)
console.log(!false)
// TRY: 練習問題３
let happiness = 0 // 0 から 100 までの数値を代入してください
let sleepiness = 100 // 0 から 100 までの数値を代入してください
const isHappy =happiness>90
const isSleepy = sleepiness>90

const isNotHappyAndSleepy = !isHappy && isSleepy

// 以下のコメントアウトを外して確認してみましょう
console.log("isNotHappyAndSleepy" + "は" + true + "ですか？", isNotHappyAndSleepy)
console.log("isHappy", isHappy)
console.log("isSleepy", isSleepy)

// TRY: 練習問題4
const isHappyAndNotSleepy = !isNotHappyAndSleepy
console.log(isHappyAndNotSleepy)
