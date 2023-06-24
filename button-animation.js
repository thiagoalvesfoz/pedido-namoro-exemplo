var buttonNao = document.querySelector("#nao");
var buttonSim = document.querySelector("#sim");
var title = document.querySelector("h1");

function recentralize(win) {
  title.style.paddingTop = win.innerHeight / 2 - 250 + "px";

  if (win.innerWidth > 768) {
    buttonSim.style.left = win.innerWidth / 2 - 90 - 100 + "px"; 
    buttonNao.style.left = win.innerWidth / 2 + 20 + "px"; 
  } else {
    buttonNao.style.left = win.innerWidth / 2 + 15 + "px"; 
    buttonSim.style.left = win.innerWidth / 2 - 105 + "px"; 
    title.style.paddingTop = (win.innerHeight / 5) + "px";
  }

  if (win.innerWidth > 668) {
    buttonSim.style.top = win.innerHeight / 2 + "px";
    buttonNao.style.top = win.innerHeight / 2 + "px";
  } else if (win.innerWidth > 440) {
    buttonNao.style.top = win.innerHeight / 2 + 100 + "px";
    buttonSim.style.top = win.innerHeight / 2 + 100 + "px";
  } else {
    buttonNao.style.top = win.innerHeight / 2 + 160 + "px";
    buttonSim.style.top = win.innerHeight / 2 + 160 + "px";
  }
}




function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function moveToLeft() {
  var windowWidth = window.innerWidth - 100;
  return randomNumber(0, windowWidth / 2);
}

function moveToRigth() {
  var windowWidth = window.innerWidth - 100;
  return randomNumber(windowWidth / 2, windowWidth);
}

function moveToTop() {
  var windowHeight = window.innerHeight - 80;
  return randomNumber(0, windowHeight / 2);
}

function moveToBottom() {
  var windowHeight = window.innerHeight - 80;
  return randomNumber(windowHeight / 2, windowHeight);
}

buttonNao.addEventListener("mousemove", function (event) {
  var w = window.innerWidth / 2;
  var h = window.innerHeight / 2;

  var xPos = event.clientX;
  var yPos = event.clientY;

  var horizontal = xPos > w ? moveToLeft() : moveToRigth();
  var vertical = yPos > h ? moveToTop() : moveToBottom();

  buttonNao.style.left = horizontal + "px";
  buttonNao.style.top = vertical + "px";
});

recentralize(window);

addEventListener("resize", function (event) {
  recentralize(event.currentTarget);
});