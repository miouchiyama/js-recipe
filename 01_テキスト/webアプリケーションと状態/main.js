const person = document.getElementById("person")

let age = 26
let isWorking = true // 仕事をしているか
let isInSpace = false // 宇宙にいるか
let isBeardShaved = false // ひげを剃っているか

const draw = function () {
    if (isWorking) {
        person.textContent = "🧑‍💻"
    } else {
        person.textContent = "😄"
    }

    if (isInSpace) {
        person.textContent += "✨🪐✨"
    } else {
        person.textContent += "🈁➡️🌏"
    }
}

draw() // "🧑‍💻🈁➡️🌏"


const quitWorkingButton = document.getElementById("quit-working-button")
const launchButton = document.getElementById("launch-button")

quitWorkingButton.onclick = function () {
    isWorking = false
    draw()
}

launchButton.onclick = function () {
    isInSpace = true
    draw()
}



// メモ帳
const input = document.getElementById("input");
const container = document.getElementById("container");
const addButton = document.getElementById("add-button");
const removeAllButton = document.getElementById("remove-all-button");

// 状態を表現する変数
let list = []

if (localStorage.list) {
    // 状態の更新 list: [] -> ["こんにちは"]
    list = JSON.parse(localStorage.list)

    // 状態の変化を画面に表示する
    for (const text of list) {
        const card = document.createElement("div")
        card.className = "card"
        card.textContent = text
        container.append(card)
    }
}

addButton.onclick = function () {
    const text = input.value

    // 状態の更新 list: ["こんにちは"] -> ["こんにちは", "こんばんは"]
    list.push(text)
    localStorage.list = JSON.stringify(list)

    // 状態の変化を画面に表示する
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = text
    container.append(card)

    input.value = ""
}

removeAllButton.onclick = function () {
    // 状態の更新
    list = []
    localStorage.list = JSON.stringify(list)

    // 状態の表示
    container.textContent = ""
};