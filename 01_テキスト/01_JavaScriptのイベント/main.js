const button = document.getElementById("button")

const alertMessage = function() {
    alert("クリックしたね")
}

button.onclick = alertMessage


const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function() {
    console.log("hello")
}

const logValue =function(e) {
    console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue

// 練習問題2
document.onkeydown = function(e) {
    console.log(e.key)
}