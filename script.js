var numOfSquares = 6;
var colors = [];  //array
var squares = document.querySelectorAll(".square");
var pickedColor;
var rgbValue = document.getElementById("rgb-value");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

// rgbValue.textContent = pickedColor;

init();

function init() {
  setModeButtons();
  setSquares();
  reset();
}

function setModeButtons(){
  for(var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      if(this.textContent === "Easy"){
        numOfSquares = 3;
      } else {
        numOfSquares = 6;
      }
      reset();
    });
  }
}

function reset() {
  //generate all new colors
  colors = generateRandomColors(numOfSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change rgbValue to match picked color
  rgbValue.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "grey";
  resetButton.textContent = "New Game";
}

//new game button
resetButton.addEventListener("click", function() {
  reset();
});

function setSquares() {
  for(var i= 0; i < squares.length; i++){
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = pickedColor;
      } else {
        this.style.backgroundColor = "black";
        messageDisplay.textContent = "Incorrect. Try Again";
      }
    });
  }
}

function changeColors(color) {
  //loop through squares
  for(var i = 0; i < squares.length; i++){

    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  //this value becomes index of squares array
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //add num random colors to arr
  for(var i = 0; i < num; i++){
    //get random color and push into arr
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  //pick a 'red', 'blue', 'green' from 0 to 255
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
