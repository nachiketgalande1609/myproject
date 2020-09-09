input = document.getElementById('view').innerHTML;

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////NUMBERS///////////////////
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("9").addEventListener("click", function() {
  num = 9;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("8").addEventListener("click", function() {
  num = 8;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("7").addEventListener("click", function() {
  num = 7;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("6").addEventListener("click", function() {
  num = 6;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("5").addEventListener("click", function() {
  num = 5;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("4").addEventListener("click", function() {
  num = 4;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("3").addEventListener("click", function() {
  num = 3;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("2").addEventListener("click", function() {
  num = 2;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("1").addEventListener("click", function() {
  num = 1;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

document.getElementById("0").addEventListener("click", function() {
  num = 0;
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
});

point = input.includes(".")
document.getElementById("decimal").addEventListener("click", function() {
  if(!point){
    num = ".";
    document.getElementById('view').innerHTML = input + num;
    input = document.getElementById('view').innerHTML;
    point = true;
  }
  else {
    document.getElementById('view').innerHTML = input;
    input = document.getElementById('view').innerHTML;
  }
});

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////CLEAR///////////////////
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("c").addEventListener("click", function() {
  document.getElementById('view').innerHTML = "";
  input = "";
});

document.getElementById("del").addEventListener("click", function() {
  input = input.substring(0, input.length - 1);
  document.getElementById('view').innerHTML = input;
  input = document.getElementById('view').innerHTML;
});

/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////OPERATIONS///////////////////
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("add").addEventListener("click", function() {
  num = "+";
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("sub").addEventListener("click", function() {
  num = "-";
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("mul").addEventListener("click", function() {
  num = "*";
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("div").addEventListener("click", function() {
  num = "/";
  document.getElementById('view').innerHTML = input + num;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("equals").addEventListener("click", function() {
  result = eval(input);
  document.getElementById('view').innerHTML = result;
  input = result;
  point = false;
});

/////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////SCIENTIFIC
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("square").addEventListener("click", function() {
  document.getElementById('view').innerHTML = input * input;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("cube").addEventListener("click", function() {
  document.getElementById('view').innerHTML = input * input * input;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("sqroot").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.sqrt(input);
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("cuberoot").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.cbrt(input);
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("log").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.log10(input);
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("ln").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.log(input);
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("factorial").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Factorial(input);
  input = document.getElementById('view').innerHTML;
  point = false;
});
function Factorial(n) {
  if (n === 0) {
    return 1;
  }
  else {
    return n * Factorial( n - 1 );
  }
}

document.getElementById("invert").addEventListener("click", function() {
  document.getElementById('view').innerHTML = 1/input;
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("e").addEventListener("click", function() {
  document.getElementById('view').innerHTML = "2.718281828459045";
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("pi").addEventListener("click", function() {
  document.getElementById('view').innerHTML = "3.141592653589793";
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("sin").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.sin(input*Math.PI/180);
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("cos").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.cos(input*Math.PI/180);
  input = document.getElementById('view').innerHTML;
  point = false;
});

document.getElementById("tan").addEventListener("click", function() {
  document.getElementById('view').innerHTML = Math.tan(input*Math.PI/180);
  input = document.getElementById('view').innerHTML;
  point = false;
});
