const figure = document.getElementById("figure")
const squareButton = document.getElementById("square-button")
const circleButton = document.getElementById("circle-button")
const triangleButton = document.getElementById("triangle-button")
const changeClass = (class)=>{
  if (class = "rounded") {
    figure.classList.remove("")
  } else if {

  } else {
    
  }

}

figure.onclick = function () {
  if(figure.classList= class){


  }
  figure.classList.toggle("rounded")
  figure.classList.add("square")
  figure.classList.remove("triangle")
}

circleButton.onclick = function () {
  // figure に rounded クラスを追加する
  figure.classList.add("rounded")
  figure.classList.add("square")
  figure.classList.remove("triangle")
}

squareButton.onclick = function () {
  // figure から rounded クラスを削除する
  figure.classList.remove("rounded")
  figure.classList.add("square")
  figure.classList.remove("triangle")
}

triangleButton.onclick = function () {
  figure.classList.add("triangle")
  figure.classList.remove("rounded")
  figure.classList.remove("square")
}
