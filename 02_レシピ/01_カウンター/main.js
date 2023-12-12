const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const display2 = document.getElementById("display2")
const minusButton = document.getElementById("minus-button")
let count = 0
let count2 = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function() {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

minusButton.onclick = function() {
    // count を更新
    count2 -= 1
    // count を表示
    display2.textContent = count2
}