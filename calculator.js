//---- This is my first ever project using Javascript, in about 2 weeks of learing ----//
//---- Just like the calculator I had during school, I wanted the calculator to have ----//
//---- multiple displays, one for the current operation and one showing history----//
//---- You will not find any advanced logic, it just captures the pressed keys,----//
//---- symbols and then the whole whole string is processed in one go----//
//---- since, JS is capable of solving mathematical expressions, I looked----//
//---- up for a function that could do so, so I found the eval() function----//
//---- eval() is used here only with the .innertext, the user does not have the privillege----//
//---- to enter any JS via the user interface. Still after learning that eval() is better not used to a function----//
//---- made sure it gets the arguments as STRING, suggestions are open----//
//---- please mail them to anup.chand.opt@gmail.com----------------------------//

// -------------------------- Enable strict mode ----------- //
"use strict";

//------------- Declaring soem variables for later use -----//
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
  // console.log(`Top lcd char length: ${hLength}`);
};

function takeNumbers(activeID) {
  // console.log("The button clicked was " + activeID);
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
  // let checkDecimal = mainLcd.innerText.includes(`.`);

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

    mainLcd.innerText = `${eval(problem)}`;
  }

  ansCount = 1;
  oprCount = 0;
};

/*Installed GIT */
/* added files to tracking for git */
