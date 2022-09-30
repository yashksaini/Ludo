const Route = [
  [
    [0, 1, 2, 3],
    27,
    28,
    29,
    30,
    31,
    19,
    16,
    13,
    10,
    7,
    4,
    5,
    6,
    9,
    12,
    15,
    18,
    21,
    44,
    45,
    46,
    47,
    48,
    49,
    55,
    61,
    60,
    59,
    58,
    57,
    56,
    68,
    71,
    74,
    77,
    80,
    83,
    82,
    81,
    78,
    75,
    72,
    69,
    66,
    43,
    42,
    41,
    40,
    39,
    38,
    32,
    33,
    34,
    35,
    36,
    37,
    100,
  ],
  [
    [22, 23, 24, 25],
    9,
    12,
    15,
    18,
    21,
    44,
    45,
    46,
    47,
    48,
    49,
    55,
    61,
    60,
    59,
    58,
    57,
    56,
    68,
    71,
    74,
    77,
    80,
    83,
    82,
    81,
    78,
    75,
    72,
    69,
    66,
    43,
    42,
    41,
    40,
    39,
    38,
    32,
    26,
    27,
    28,
    29,
    30,
    31,
    19,
    16,
    13,
    10,
    7,
    4,
    5,
    8,
    11,
    14,
    17,
    20,
    100,
  ],
  [
    [62, 63, 64, 65],
    78,
    75,
    72,
    69,
    66,
    43,
    42,
    41,
    40,
    39,
    38,
    32,
    26,
    27,
    28,
    29,
    30,
    31,
    19,
    16,
    13,
    10,
    7,
    4,
    5,
    6,
    9,
    12,
    15,
    18,
    21,
    44,
    45,
    46,
    47,
    48,
    49,
    55,
    61,
    60,
    59,
    58,
    57,
    56,
    68,
    71,
    74,
    77,
    80,
    83,
    82,
    79,
    76,
    73,
    70,
    67,
    100,
  ],
  [
    [84, 85, 86, 87],
    60,
    59,
    58,
    57,
    56,
    68,
    71,
    74,
    77,
    80,
    83,
    82,
    81,
    78,
    75,
    72,
    69,
    66,
    43,
    42,
    41,
    40,
    39,
    38,
    32,
    26,
    27,
    28,
    29,
    30,
    31,
    19,
    16,
    13,
    10,
    7,
    4,
    5,
    6,
    9,
    12,
    15,
    18,
    21,
    44,
    45,
    46,
    47,
    48,
    49,
    55,
    54,
    53,
    52,
    51,
    50,
    100,
  ],
];

const fin = document.getElementsByClassName("fbtn");
const box = document.getElementsByClassName("button");
const obox = document.getElementsByClassName("tooltip");
const cN = document.getElementById("dice_value");
let moved = false;

const currentPlayer = ["r", "g", "b", "y"];
let currentChance = 0;
const myArray = [6, 6, 6, 6, 1, 1, 2, 3, 3, 4, 4, 5, 5]; //
let starBox = false;
let out = false;

let diceValues = [1, 2];
const redCharge = ["r0", "r1", "r2", "r3"]; // A
const greenCharge = ["g22", "g23", "g24", "g25"]; // B
const blueCharge = ["b62", "b63", "b64", "b65"]; // C
const yellowCharge = ["y84", "y85", "y86", "y87"]; // D

const colors = ["red", "green", "blue", "yellow"];

const colorBoxes = [
  [33, 34, 35, 36, 37, 27],
  [8, 11, 14, 17, 20, 9],
  [79, 76, 73, 70, 67, 78],
  [54, 53, 52, 51, 50, 60],
];
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 6; j++) {
    if (i === 0) {
      box[colorBoxes[i][j]].style.backgroundColor = "#fd3333";
    } else if (i === 1) {
      box[colorBoxes[i][j]].style.backgroundColor = "#7ce22b";
    } else if (i === 2) {
      box[colorBoxes[i][j]].style.backgroundColor = "#276af9";
    } else {
      box[colorBoxes[i][j]].style.backgroundColor = "#ffed05";
    }
  }
}
// Used to store the value of charge location of array
let lastValues = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

document.getElementById("green_dice").disabled = true;
document.getElementById("blue_dice").disabled = true;
document.getElementById("yellow_dice").disabled = true;

const disbtn = ["red_dice", "green_dice", "blue_dice", "yellow_dice"];

const diceColors = ["#fd3333", "#7ce22b", "#276af9", "#ffed05"];

const diceFont = ["one", "two", "three", "four", "five", "six"];

let positions = [
  [0, 1, 2, 3],
  [22, 23, 24, 25],
  [62, 63, 64, 65],
  [84, 85, 86, 87],
];
let initials = [
  [0, 1, 2, 3],
  [22, 23, 24, 25],
  [62, 63, 64, 65],
  [84, 85, 86, 87],
];

let finishs = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let moves = new Array(88).fill().map(() => new Array());
let currentDiceValue = 0;
function start() {
  document.getElementById("cover").style.display = "none";
  for (let i = 0; i < 88; i++) {
    box[i].innerHTML = moves[i];
  }
  starred();
  colorsize();
}

function Roll() {
  if (cN.className === "rotate") {
    cN.classList.remove("rotate");
    cN.classList.add("rotate1");
  } else {
    cN.classList.remove("rotate1");
    cN.classList.add("rotate");
  }
  cN.style.color = diceColors[currentChance];

  currentDiceValue = myArray[Math.floor(Math.random() * myArray.length)];

  document.getElementById("dice_value").innerHTML =
    "<i class='fas fa-dice-" + diceFont[currentDiceValue - 1] + "'></i>";

  let check1 = checkPossible(currentDiceValue);
  if (check1 === false) {
    changeChance();
    return;
  }

  let check = checkPlayerComplete();
  if (check === true && check1 === true) {
    changeChance();
    return;
  }

  let x = currentDiceValue + "-" + currentChance;
  diceValues.push(x);

  if (currentDiceValue !== 6) {
    diceValues.push("o");
  }

  if (
    diceValues[diceValues.length - 1] === diceValues[diceValues.length - 2] &&
    diceValues[diceValues.length - 2] === diceValues[diceValues.length - 3]
  ) {
    changeChance();

    return;
  }
  movesCharge(currentDiceValue);
}
function starred() {
  box[10].classList.add("star");
  box[47].classList.add("star");
  box[40].classList.add("star");
  box[77].classList.add("star");
}

function movesCharge(value) {
  // To disable all Buttons
  disableAll();
  for (let q = 0; q < 4; q++) {
    if (positions[currentChance][q] < 88) {
      box[positions[currentChance][q]].style.boxShadow =
        "inset 10px 10px 100px black ";
      box[positions[currentChance][q]].style.transform = "scale(1.2)";
      box[positions[currentChance][q]].style.transition = "all 0.5s";
    }
  }

  if (value === 6) {
    enableParticular();
    diceDisable();
  } else {
    let a = false;
    for (let j = 0; j < 4; j++) {
      if (positions[currentChance][j] !== initials[currentChance][j]) {
        a = true;
      }
    }
    if (!a) {
      changeChance();
      enableParticular();
    } else {
      diceDisable();
      enableParticular();
    }
  }
}

function play(value, button) {
  if (currentDiceValue === 6) {
    if (positions[value][button] === initials[value][button]) {
      let lastVal = lastValues[value][button];
      lastValues[value][button] = 1;
      let newVal = lastValues[value][button];
      movepots(value, button, lastVal, newVal);
      colorsize();
    } else {
      let p = lastValues[value][button];
      p = p + parseInt(currentDiceValue);
      if (p > 57) {
        return;
      } else if (p === 57) {
        finish(value, button);
        enableDice();
      } else {
        let lastVal = lastValues[value][button];
        lastValues[value][button] += parseInt(currentDiceValue);
        let newVal = lastValues[value][button];
        movepots(value, button, lastVal, newVal);
      }
    }
  } else {
    if (positions[value][button] === initials[value][button]) {
      return;
    } else {
      let p = lastValues[value][button];
      p = p + parseInt(currentDiceValue);
      if (p > 57) {
        enableDice();
      } else if (p === 57) {
        finish(value, button);
        enableDice();
      } else {
        let lastVal = lastValues[value][button];
        lastValues[value][button] += parseInt(currentDiceValue);
        let newVal = lastValues[value][button];
        movepots(value, button, lastVal, newVal);
      }
    }
  }
}
function movepots(value, button, lastVal, newVal) {
  let l = lastValues[value][button];
  let up = lastVal + 1;

  function myLoop() {
    setTimeout(function () {
      positions[value][button] = Route[value][up];
      colorsize();
      if (up === newVal) {
        enableDice();
      }

      up++;

      if (up <= newVal) {
        myLoop();
      }
      if (up >= newVal) {
        moved = true;
      }
    }, 200);
  }
  myLoop();
  if (moved) {
    moved = false;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        if (Route[value][l] === positions[i][j] && value !== i) {
          let a = positions[i][j];
          if (
            a === 10 ||
            a === 47 ||
            a === 40 ||
            a === 77 ||
            a === 27 ||
            a === 78 ||
            a === 9 ||
            a === 60
          ) {
          } else {
            let down = lastValues[i][j];

            function myLoop1() {
              setTimeout(function () {
                positions[i][j] = Route[i][down];
                colorsize();
                if (down === 1) {
                  positions[i][j] = initials[i][j];
                  colorsize();
                }
                down--;

                if (down >= 1) {
                  myLoop1();
                }
              }, 80);
            }
            myLoop1();
            //positions[i][j] = initials[i][j];
            diceValues.push("a");
            lastValues[i][j] = 0;
            out = true;
          }
        }
      }
    }
  }

  if (!out && currentDiceValue !== 6) {
    changeChance();
  }
  if (out === true) {
    out = false;
  }

  colorsize();
}
function colorsize() {
  for (let i = 0; i < 88; i++) {
    box[i].innerHTML = moves[i];
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      dColor(i, positions[i][j], j);
    }
  }
  disableAll();
}

function dColor(value, place, j) {
  let a = box[place];
  if (place < 89) {
    if (value === 0) {
      if (box[place].innerHTML !== "") {
        a.classList.add("tooltiptext");
        obox[place].style.backgroundColor = "#FF7CFD";

        a.innerHTML =
          a.innerHTML +
          `<button class='dot redDot' id='r` +
          j +
          `' onclick="play(0,` +
          j +
          `)"></button>`;
      } else {
        box[place].innerHTML =
          `<button class='dot redDot' id='r` +
          j +
          `' onclick="play(0,` +
          j +
          `)"></button>`;
      }
    } else if (value === 1) {
      if (box[place].innerHTML !== "") {
        a.classList.add("tooltiptext");
        obox[place].style.backgroundColor = "#FF7CFD";
        box[place].innerHTML =
          box[place].innerHTML +
          `<button class='dot greenDot' id='g` +
          j +
          `' onclick="play(1,` +
          j +
          `)"></button>`;
      } else {
        box[place].innerHTML =
          `<button class='dot greenDot' id='g` +
          j +
          `' onclick="play(1,` +
          j +
          `)"></button>`;
      }
    } else if (value === 2) {
      if (box[place].innerHTML !== "") {
        a.classList.add("tooltiptext");
        obox[place].style.backgroundColor = "#FF7CFD";
        box[place].innerHTML =
          box[place].innerHTML +
          `<button class='dot blueDot' id='b` +
          j +
          `' onclick="play(2,` +
          j +
          `)"></button>`;
      } else {
        box[place].innerHTML =
          `<button class='dot blueDot' id='b` +
          j +
          `' onclick="play(2,` +
          j +
          `)"></button>`;
      }
    } else {
      if (box[place].innerHTML !== "") {
        a.classList.add("tooltiptext");
        obox[place].style.backgroundColor = "#FF7CFD";
        box[place].innerHTML =
          box[place].innerHTML +
          `<button class='dot yellowDot' id='y` +
          j +
          `' onclick="play(3,` +
          j +
          `)"></button>`;
      } else {
        box[place].innerHTML =
          `<button class='dot yellowDot' id='y` +
          j +
          `' onclick="play(3,` +
          j +
          `)"></button>`;
      }
    }
  }

  for (let i = 0; i < 88; i++) {
    if (box[i].innerHTML.length < 150) {
      box[i].classList.remove("tooltiptext");
    }
  }
}
function disableAll() {
  // To disable all Buttons
  for (let p = 0; p < 4; p++) {
    for (let q = 0; q < 4; q++) {
      let x = currentPlayer[p] + q;
      document.getElementById(x).disabled = true;
    }
  }
  for (let i = 0; i < 88; i++) {
    box[i].style.boxShadow = "none";
    box[i].style.transform = "none";
  }
}
function enableParticular() {
  // To inable current player pots
  for (let q = 0; q < 4; q++) {
    let x = currentPlayer[currentChance] + q;
    document.getElementById(x).disabled = false;
  }
}
function changeChance() {
  if (currentChance === 2) {
    currentChance = 0;
  } else if (currentChance === 1) {
    currentChance = 3;
  } else if (currentChance === 3) currentChance = 2;
  else if (currentChance === 0) {
    currentChance = 1;
  }
  diceDisable();
  setTimeout(function () {
    enableDice();
  }, 1000);
}

function diceDisable() {
  for (let i = 0; i < 4; i++) {
    document.getElementById(disbtn[i]).disabled = true;
    document.getElementById(disbtn[i]).style.color = "grey";
  }
}

function enableDice() {
  document.getElementById(disbtn[currentChance]).disabled = false;
  document.getElementById(disbtn[currentChance]).style.color =
    diceColors[currentChance];
}

function checkPlayerComplete() {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    if (lastValues[currentChance][i] === 58) {
      count++;
    }
  }

  if (count === 4) {
    return true;
  } else {
    return false;
  }
}
function finish(value, button) {
  finishs[value][button] = 1;
  let count = 0;
  let a = document.getElementById("finished");
  box[positions[value][button]].innerHTML = "";
  positions[value][button] = 100;
  lastValues[value][button] = 58;
  if (value === 0) {
    a.innerHTML =
      a.innerHTML +
      `<button class='dot redDot' id='r` +
      button +
      `' onclick="play(0,` +
      button +
      `)"></button>`;
  } else if (value === 1) {
    a.innerHTML =
      a.innerHTML +
      `<button class='dot greenDot' id='g` +
      button +
      `' onclick="play(1,` +
      button +
      `)"></button>`;
  } else if (value === 2) {
    a.innerHTML =
      a.innerHTML +
      `<button class='dot blueDot' id='b` +
      button +
      `' onclick="play(2,` +
      button +
      `)"></button>`;
  } else {
    a.innerHTML =
      a.innerHTML +
      `<button class='dot yellowDot' id='y` +
      button +
      `' onclick="play(3,` +
      button +
      `)"></button>`;
  }

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (finishs[i][j] === 1) {
        if (i === 0) {
          fin[j].innerHTML = `<button class='dot redDot'></button>`;
        } else if (i === 1) {
          fin[
            j + parseInt(4)
          ].innerHTML = `<button class='dot greenDot'></button>`;
        } else if (i === 2) {
          fin[
            j + parseInt(8)
          ].innerHTML = `<button class='dot blueDot'></button>`;
        } else {
          fin[
            j + parseInt(12)
          ].innerHTML = `<button class='dot yellowDot'></button>`;
        }

        if (
          finishs[i][0] === 1 &&
          finishs[i][1] === 1 &&
          finishs[i][2] === 1 &&
          finishs[i][3] === 1
        ) {
          count++;
        }
        if (count === 1) {
          document.getElementById("current").innerHTML =
            "winner is " + colors[currentChance];
          stop();
        }
      }
    }
  }

  colorsize();
}
function checkPossible(value) {
  if (value === 6) {
    let a = false;
    let b = false;
    for (let j = 0; j < 4; j++) {
      if (positions[currentChance][j] === initials[currentChance][j]) {
        a = true;
      }
    }
    for (let i = 0; i < 4; i++) {
      let p = lastValues[currentChance][i];
      p = p + parseInt(value);

      if (p < 58) {
        b = true;
      }
    }
    if (a || b) {
      return true;
    } else {
      return false;
    }
  } else {
    let a = false;
    for (let j = 0; j < 4; j++) {
      let p = lastValues[currentChance][j];
      p = p + parseInt(value);
      if (lastValues[currentChance][j] !== 0 && p < 58) {
        a = true;
      }
    }

    if (a) {
      return true;
    } else {
      return false;
    }
  }
}
function stop() {
  document.getElementById("end").style.backgroundColor =
    diceColors[currentChance];
  document.getElementById("cover1").style.display = "block";
  for (let i = 0; i < 4; i++) {
    document.getElementById(disbtn[i]).style.display = "none";
    document.getElementById(disbtn[i]).style.color = "grey";
  }
  for (let p = 0; p < 4; p++) {
    for (let q = 0; q < 4; q++) {
      let x = currentPlayer[p] + q;
      document.getElementById(x).disabled = true;
    }
  }
  for (let i = 0; i < 88; i++) {
    box[i].style.boxShadow = "none";
    box[i].style.transform = "none";
  }
  document.getElementById("dice_value").style.display = "none";
  console.log("stop");
}
