var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]
var squares = document.querySelectorAll(".square");
var pickedColor = colors[2];
var rgbValue = document.getElementById("rgb-value");
var messageDisplay = document.querySelector("#message");

rgbValue.textContent = pickedColor;

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
      changeColors(clickedColor);
    } else {
      this.style.backgroundColor = "black";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColors(color){
  //loop through squares
  for(var i = 0; i < squares.length; i++){

    squares[i].style.backgroundColor = color;
  }
}
