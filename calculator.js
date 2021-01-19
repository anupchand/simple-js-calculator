"use strict";

let activeButton;
let activeOpr;
let problem;
let oprCount;
let hLength;

const mainLcd = document.getElementById("lcdScreen");
const historyScreen = document.getElementById("history");
let checkDecimal = mainLcd.innerText.includes(`.`);
hLength = historyScreen.innerText.length;
//console.log(`Decimal present: ${checkDecimal}`);
//console.log(`Top lcd char length: ${hLength}`);

let ansCount = 0;
//const zero = "0";
//const checkZero = String(zero);

document.getElementById("clearButton").onclick = function clearLcd() {
  mainLcd.innerText = `0`;
  historyScreen.innerText = `0`;
  ansCount = 0;
  hLength = historyScreen.innerText.length;
  //console.log(`count = ${ansCount}`);
  console.log(`Top lcd char length: ${hLength}`);
};

function takeNumbers(activeID) {
  console.log("The button clicked was " + activeID);
  activeButton = document.getElementById(activeID);
  if (mainLcd.innerText === `0` || mainLcd.innerText === `Welcome`) {
    mainLcd.innerText = activeButton.innerText;
  } else {
    mainLcd.insertAdjacentText("beforeend", activeButton.innerText);
  }
}

function takeDecimal(activeID) {
  //console.log(`The button clicked was ${activeID}`);
  activeButton = document.getElementById(activeID);
  let checkDecimal = mainLcd.innerText.includes(`.`);

  if (Number(mainLcd.innerText) === 0 && checkDecimal === false) {
    //console.log(`count = ${ansCount}`);
    mainLcd.innerText = `0.`;
  } else if (mainLcd.innerText === `Welcome` && checkDecimal === false) {
    mainLcd.innerText = `0.`;
  } else if (Number(mainLcd.innerText) >= 1 && checkDecimal === false) {
    mainLcd.insertAdjacentText("beforeend", `.`);
  } else if (Number(mainLcd.innerText) >= 1 && checkDecimal === true) {
    return;
  }
}

function takeOperators(activeOprID) {
  //console.log("The operator used was " + activeOprID);
  //console.log(`count = ${ansCount}`);
  hLength = historyScreen.innerText.length;
  //console.log(`Top lcd char length: ${hLength}`);
  activeOpr = document.getElementById(activeOprID);

  if (hLength === 1 && ansCount === 0 && mainLcd.innerText !== `Welcome`) {
    historyScreen.innerText = `${mainLcd.innerText} ${activeOpr.innerText}`;
    hLength = historyScreen.innerText.length;
  } else if (hLength > 1 && ansCount === 0) {
    historyScreen.insertAdjacentText(
      "beforeend",
      `${mainLcd.innerText} ${activeOpr.innerText}`
    );
  } else if (ansCount === 1) {
    historyScreen.innerText = `${mainLcd.innerText} ${activeOpr.innerText}`;
  }
  mainLcd.innerText = "0";
  hLength = historyScreen.innerText.length;
  oprCount = 1;
}

document.getElementById("answer").onclick = function showAnswer() {
  //console.log(`count = ${ansCount}`);
  if (oprCount === 1) {
    historyScreen.insertAdjacentText("beforeend", ` ${mainLcd.innerText}`);
    problem = historyScreen.innerText;
    //console.log(problem);
    //console.log(eval(problem));
    mainLcd.innerText = `${eval(problem)}`;
  }
  ansCount = 1;
  oprCount = 0;
};

/*Installed GIT */
/* added files to tracking for git */
