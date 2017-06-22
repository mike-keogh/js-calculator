var screen = document.getElementById("calcInput");
var answer = document.getElementById('calcAnswer')

function writeInput(x) {
 screen.value += x;
}

function clearInput() {
  var clearScr = document.getElementById('calcInput')
  clearScr.value = "";
  var clearAns = document.getElementById('calcAnswer')
  clearAns.value = "";
}

function clearInputByOne() {
  var subByOne = document.getElementById('calcInput').value;
  document.getElementById('calcInput').value =
  subByOne.substr(0,subByOne.length - 1);
}
//added clear screen line 24
function sum() {
  x = screen.value;
  x = eval(x);
  answer.value = x;
}

function calcHistory () {
  x = screen.value;
  x = eval(x);
  screen.value = x;
}
