var numOfSquares = 6;
var colors = generateRandomColors(numOfSquares);  //array
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgbValue = document.getElementById("rgb-value");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

rgbValue.textContent = pickedColor;

// bug: correct color is not always a possible choice
easyBtn.addEventListener("click", function() {
  easyBtn.classList.add("selected");
  hardBtn.classList.remove("selected");
  numOfSquares = 3;
  colors = generateRandomColors(numOfSquares); // colors array has 3 items
  pickedColor = pickColor();
  rgbValue.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++) {
    if(colors[i]) {  // if [i] has a color, then display square:
      squares[i].style.backgroundColor = colors[i];
    } else {
      // blocks with no assigned colors are hidden
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  numOfSquares = 6;
  colors = generateRandomColors(numOfSquares);
  pickedColor = pickColor();
  rgbValue.textContent = pickedColor;
  for(var i= 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].style.display = "block";
  }
});

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(6);
  //pick a new random color from array
  pickedColor = pickColor();
  //change rgbValue to match picked color
  rgbValue.textContent = pickedColor;
  //change colors of squares
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "grey";
});

for(var i= 0; i < squares.length; i++){
  //add colors to squares
  squares[i].style.backgroundColor = colors[i];
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
