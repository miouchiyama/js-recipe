const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const display2 = document.getElementById("display2")
const minusButton = document.getElementById("minus-button")
let count = 0
let count2 = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function () {
  // count を更新
  count2 -= 1
  // count を表示
  display2.textContent = count2
}

// 発展問題:便利なボタン
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const display3 = document.getElementById("display3")
let x = 0
button1.onclick = function () {
  x += 1
  display3.textContent = x
}
button2.onclick = function () {
  x -= 1
  display3.textContent = x
}
button3.onclick = function () {
  x *= 2
  display3.textContent = x
}

// 発展問題:電卓
const answer = document.getElementById("answer")
const b0 = document.getElementById("b0")
const b1 = document.getElementById("b1")
const b2 = document.getElementById("b2")
const b3 = document.getElementById("b3")
const b4 = document.getElementById("b4")
const b5 = document.getElementById("b5")
const b6 = document.getElementById("b6")
const b7 = document.getElementById("b7")
const b8 = document.getElementById("b8")
const b9 = document.getElementById("b9")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const multiply = document.getElementById("multiply")
const devide = document.getElementById("devide")
const squared = document.getElementById("squared")
const equal = document.getElementById("equal")
let ans = 0

equal.onclick = function () {
  answer.textContent = eval(ans.trimStart("0"))
  console.log(ans)
}

b0.onclick = function () {
  ans += "0"
  answer.textContent = 0
  console.log(ans)
}
b1.onclick = function () {
  ans += "1"
  answer.textContent = 1
  console.log(ans)
}
b2.onclick = function () {
  ans += "2"
  answer.textContent = 2
  console.log(ans)
}
plus.onclick = function () {
  ans += "+"
  console.log(ans)
}

console.log(011 + 011)
