let gameseq = [];
let userseq = [];
let started = false;
let btn = ["red", "yellow", "green", "purple"];
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game started");
    started = true;
    levelup();
  }
});

function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randnum = Math.floor(Math.random() * 4);
  let randidx = btn[randnum];
  let randbtn = document.querySelector(`.${randidx}`);
  gameseq.push(randidx);
  console.log(gameseq);
  btnflash(randbtn);
}

function checkans(idx) {
  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length === gameseq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game over! Your score was <b>${level}</b><br>Press any key to restart.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnpress() {
  let btn = this;
  btnflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  checkans(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (let Btn of allbtns) {
  Btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
