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
function clickbutton(target) {
  let result = document.getElementById("result")
  let target_value = target.innerHTML

  if (target_value == "AC") {
    result.innerHTML = "0"
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML)
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value
    } else {
      result.innerHTML += target_value
    }
  }
}
