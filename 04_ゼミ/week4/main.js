const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image

  // 選択肢（ボタン）を作成

  // 選択肢（ボタン）の中身を表示
  for (let i = 0; i < quiz.choices.length; i++) {
    const choice = createChoiceButton(quiz.choices[i], i)
    choicesContainer.append(choice)
  }
}

const createChoiceButton = function (choice, choiceNumber) {
  const button = document.createElement("button")
  button.textContent = choice.text
  button.onclick = function () {
    choose(choiceNumber)
  }
  return button
}

// choiceNumber番目の選択肢を選択
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

// choice1.onclick = function () {
//   // 0 番目の選択肢を選択
//   choose(0)
// }
// choice2.onclick = function () {
//   // 1 番目の選択肢を選択
//   choose(1)
// }
// choice3.onclick = function () {
//   // 2 番目の選択肢を選択
//   choose(2)
// }

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
