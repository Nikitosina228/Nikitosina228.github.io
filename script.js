
var num = 0;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


var a = true;
var b = true;

var c = false;

function f() {
  if (a && b) {
    num = getRandomInt(0, 1024);
    document.getElementById("dec").innerHTML = num;
    a = false;
    b = false;

    document.getElementById("ansBin").value = null;
    document.getElementById("ansHex").value = null;

    document.getElementById("isBin").innerHTML = "";
    document.getElementById("isHex").innerHTML = "";

    if (c) alert("Erfolg!");
    c = true;
  }
}

f();

function checkBin() {
  var ans = document.getElementById("ansBin").value;
  var isBin = document.getElementById("isBin");

  var digit = parseInt(ans, 2);

  console.log(digit);

  isBin.innerHTML = (digit === num) ? " correct" : " wrong";
  a = (digit === num);
  f();
}

function checkHex() {
  var ans = document.getElementById("ansHex").value;
  var isBin = document.getElementById("isHex");

  var digit = parseInt(ans, 16);

  console.log(digit);

  isBin.innerHTML = (digit === num) ? " correct " : " wrong";
  b = (digit === num);
  f();
}

function check() {
  checkBin();
  checkHex();
}
