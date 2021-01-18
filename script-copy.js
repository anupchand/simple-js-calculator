"use strict";

const mainLcd = document.getElementById("lcdScreen");
const historyScreen = document.getElementById("history");
const checkDecimal = Boolean(mainLcd.innerText.match(/./g));

let activeButton;
let activeOpr;
let problem;
let answer;
let ansCount = 0;
//const zero = "0";
//const checkZero = String(zero);

document.getElementById("clearButton").onclick = function clearLcd() {
  mainLcd.innerText = "0";
  historyScreen.innerText = "0";
  ansCount = 0;
  console.log(`count = ${ansCount}`);
};

function takeNumbers(activeID) {
  //console.log("The button clicked was " + activeID);
  activeButton = document.getElementById(activeID);
  if (
    mainLcd.innerText === `0` ||
    ansCount === 0 ||
    mainLcd.innerText === `Welcome`
  ) {
    console.log(`count = ${ansCount}`);
    mainLcd.innerText = activeButton.innerText;
  } else if (ansCount === 1) {
    //console.log(`count = ${ansCount}`);
    //console.log(`Disabling number input..press C`);
    return;
    //mainLcd.innerText = mainLcd.innerText;
  } else {
    console.log(`count = ${ansCount}`);
    mainLcd.insertAdjacentText("beforeend", activeButton.innerText);
  }
}

function takeDecimal(activeID) {
  //console.log("The button clicked was " + activeID);
  activeButton = document.getElementById(activeID);
  if (
    mainLcd.innerText === checkZero ||
    ansCount === 0 ||
    mainLcd.innerText === `Welcome`
  ) {
    console.log(`count = ${ansCount}`);
    mainLcd.innerText = `0.`;
  } else if (mainLcd.innerText !==){}
  
  else if (ansCount === 1) {
    //console.log(`count = ${ansCount}`);
    //console.log(`Disabling number input..press C`);
    return;
    //mainLcd.innerText = mainLcd.innerText;
  } else {
    console.log(`count = ${ansCount}`);
    mainLcd.insertAdjacentText("beforeend", `.`);
  }
}

function takeOperators(activeOprID) {
  //console.log("The operator used was " + activeOprID);
  console.log(`count = ${ansCount}`);
  activeOpr = document.getElementById(activeOprID);
  if (historyScreen.innerText === `0` || ansCount == 1) {
    historyScreen.innerText = `${mainLcd.innerText} ${activeOpr.innerText}`;
  } else {
    historyScreen.insertAdjacentText(
      "beforeend",
      " " + mainLcd.innerText + " " + activeOpr.innerText
    );
  }

  mainLcd.innerText = "0";
}

document.getElementById("answer").onclick = function showAnswer() {
  ansCount = 1;
  //console.log(`count = ${ansCount}`);
  historyScreen.insertAdjacentText("beforeend", ` ${mainLcd.innerText}`);
  problem = historyScreen.innerText;
  //console.log(problem);
  //console.log(eval(problem));
  mainLcd.innerText = `${eval(problem)} `;
};
/*Installed GIT */
/* added files to tracking for git */
