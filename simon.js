// let gameSe=[];
// let userSe=[];

// let btns=["yellow","red",'blue',"green"];

// let h2=document.querySelector("h2");

// let started=false;
// let lvl=0;

// document.addEventListener("keypress", function(){
//   if(started==false){
//     console.log("game started");
//     started=true;

//     levelUp();
//   }
// });

// // function btnFlash(btn){
// //   btn.classList.add("flash");
// //   setTimeout(function(){
// //     btn.classList.remove("flash");
// //   },250);

// // }

// function userFlash(btn){
//   btn.classList.add("userFlash");
//   setTimeout(function(){
//     btn.classList.remove("userFlash");
//   },250);

// }

// function gameFlash(btn){
//   btn.classList.add("userFlash");
//   setTimeout(function(){
//     btn.classList.remove("userFlash");
//   },250);

// }


// function levelUp(){
//   lvl++;
//   h2.innerText=`$level ${lvl}`;

//   let randomInd=Math.floor(Math.random()*3);
//   let randCol = btns[randomInd];
//   let randBtn=document.querySelector(`.${randCol}`);

//   gameSe.push(randCol);
//   console.log(gameSe);
//   // console.log(randomInd);
//   // console.log(randCol);
//   // console.log(randBtn);


//   gameFlash(randBtn);
// };

// function btnPress(){
//   console.log(this);
//   let btn=this;
//   userFlash(btn);

//   userCol=btn.getAttribute("id");
//   console.log(userCol);

//   userSe.push(userCol);

//   checkAns(userSe.length-1)
// }
// let idx=lvl-1;
// function checkAns(idx){
//   console.log(`current level ${lvl}`);
  
//   if(userSe[idx]==gameSe[idx]){
//     if(userSe.length==gameSe.length){
//       levelUp();
//     }
//   }
//   else{
//     h2.innerText=`game over ${lvl} and press any key to start`
//   }


// }

// let allBtns=document.querySelectorAll(".box")
// for(box of allBtns){
//   box.addEventListener('click', btnPress);
// }

// function reset(){
//   started==false;
//   userSe=[]
//   gameSe=[]
//   lvl=0
// }

// let gameSe = [];
// let userSe = [];
// let btns = ["yellow", "red", "blue", "green"];

// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");

// let started = false;
// let lvl = 0;
// let high=0;

// document.addEventListener("keypress", function() {
//   if (!started) {
//     console.log("Game started");
//     started = true;
//     levelUp();
//   }
//   else{
//     high=Math.max(lvl,high);
//     h3.innerText=`the high score is ${high}`
//   }
// });

// function userFlash(btn) {
//   btn.classList.add("userFlash");
//   setTimeout(() => {
//     btn.classList.remove("userFlash");
//   }, 250);
// }

// function gameFlash(btn) {
//   btn.classList.add("flash");
//   setTimeout(() => {
//     btn.classList.remove("flash");
//   }, 250);
// }

// function levelUp() {
//   lvl++;
//   h2.innerText = `Level ${lvl}`;

//   let randomInd = Math.floor(Math.random() * btns.length);
//   let randCol = btns[randomInd];
//   let randBtn = document.querySelector(`.${randCol}`);

//   gameSe.push(randCol);
//   console.log(gameSe);

//   gameFlash(randBtn);
// }

// function btnPress() {
//   console.log(this);
//   let btn = this;
//   userFlash(btn);

//   let userCol = btn.getAttribute("id");
//   console.log(userCol);

//   userSe.push(userCol);

//   checkAns(userSe.length - 1);
// }

// function checkAns(idx) {
//   console.log(`Current level: ${lvl}`);

//   if (userSe[idx] === gameSe[idx]) {
//     if (userSe.length === gameSe.length) {
//       setTimeout(levelUp, 500); // Delay before next level
//       userSe = []; // Reset user sequence for the next round
//     }
//   } else {
//     h2.innerText = `Game Over at Level ${lvl}. Press any key to restart.`;
//     reset();
//   }
// }

// let allBtns = document.querySelectorAll(".box");
// for (let box of allBtns) {
//   box.addEventListener("click", btnPress);
// }

// function reset() {
//   started = false;
//   userSe = [];
//   gameSe = [];
//   lvl = 0;
// }
let gameSe = [];
let userSe = [];
let btns = ["yellow", "red", "blue", "green"];

let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3"); // Select the high score element

let started = false;
let lvl = 0;
let high = 0;

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(() => {
    btn.classList.remove("userFlash");
  }, 250);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
}

function levelUp() {
  lvl++;
  h2.innerText = `Level ${lvl}`;

  let randomInd = Math.floor(Math.random() * btns.length);
  let randCol = btns[randomInd];
  let randBtn = document.querySelector(`.${randCol}`);

  gameSe.push(randCol);
  console.log(gameSe);

  gameFlash(randBtn);
}

function btnPress() {
  console.log(this);
  let btn = this;
  userFlash(btn);

  let userCol = btn.getAttribute("id");
  console.log(userCol);

  userSe.push(userCol);

  checkAns(userSe.length - 1);
}

function checkAns(idx) {
  console.log(`Current level: ${lvl}`);

  if (userSe[idx] === gameSe[idx]) {
    if (userSe.length === gameSe.length) {
      setTimeout(levelUp, 500); // Delay before next level
      userSe = []; // Reset user sequence for the next round
    }
  } else {
    // Update high score before resetting
    high = Math.max(lvl, high);
    h3.innerText = `The high score is ${high}`;

    h2.innerText = `Game Over at Level ${lvl}. Press any key to restart.`;
    reset();
  }
}

let allBtns = document.querySelectorAll(".box");
for (let box of allBtns) {
  box.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  userSe = [];
  gameSe = [];
  lvl = 0;
}
