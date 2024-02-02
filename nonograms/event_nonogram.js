import { datesLevel1, datesLevel2, datesLevel3 } from "./json.js";
import { Level1, Level2, Level3 } from "./build_nonogram.js";

const nonograms = document.querySelector(".nonograms");
const images = document.querySelectorAll(".pictures__container");
const pictures = document.querySelectorAll(".pictures__img");
const containerDiv = document.querySelector(".pictures");
const cellsField = document.querySelectorAll(".nonogram__field");
const cellsField2 = document.querySelectorAll(".field-level2");
const cellsField3 = document.querySelectorAll(".field-level3");
const cellField = document.querySelectorAll(".field__1");
const resetButton = document.querySelector(".nonogram__button-reset");
const nonogramMinute = document.querySelector(".nonogram__minutes");
const nonogramSecond = document.querySelector(".nonogram__seconds");
const nonogramSound = document.querySelector(".nonogram__sound-container");
const buttonSave = document.querySelector(".nonogram__button-save");
const buttonContinue = document.querySelector(".nonogram__button-continue");
const textModal = document.querySelector(".modal__text");
const resultModal = document.querySelector(".modal__result");
const backgroundModal = document.querySelector(".modal__background");
const modalWindow = document.querySelector(".modal");
const buttonWindow = document.querySelector(".modal__button");
const buttonSolution = document.querySelector(".nonogram__button-solution");
const buttonLevel1 = document.querySelector(".header__level1");
const buttonLevel2 = document.querySelector(".header__level2");
const buttonLevel3 = document.querySelector(".header__level3");
const datesLeft = document.querySelector(".nonogram__dates-left");
const datesTop = document.querySelector(".nonogram__dates-full");
const nonogramLevel1 = document.querySelectorAll(".nonogram__level1");
const nonogramLevel2 = document.querySelector(".nonogram__level2");
const nonogramLevel3 = document.querySelector(".nonogram__level3");
const buttonRandom = document.querySelector(".header__random");
const cellsLeft = document.querySelectorAll(".cell-left");
const cellsTop = document.querySelector(".nonogram__dates-full");
//nonograms
const nonogramContainer1 = document.querySelector(".nonograms__container1");
//console.log(cellField);
let autoChangeTime;
const time = [];
const audio = new Audio();
const audioWinner = new Audio();
const arrayLocal = new Array(125);
const arrayLocal2 = new Array(100);
const arrayLocal3 = new Array(225);
let pictureIndex;
let pictureIndex2;
let pictureIndex3;

function paintCellField() {
  cellsField.forEach((cellField, index) => {
    cellField.addEventListener("click", (e) => {
      e.preventDefault;
      e.target.classList.toggle("active");
      if (time.length === 0) {
        time.push("start");
        autoChangeTime = setInterval(changeTime, 1000);
      }
      showAnswer();
      saveDataPlay();
      addSound();
    });
  });
}
paintCellField();

function paintCellField2() {
  console.log(cellsField2);
  cellsField2.forEach((cell, index) => {
    cell.addEventListener("click", (e) => {
      console.log("vgf");
      e.preventDefault();
      cell.classList.toggle("active");
      if (time.length === 0) {
        time.push("start");
        autoChangeTime = setInterval(changeTime, 1000);
      }
      showAnswer2();
      saveDataPlay2();
      addSound();
    });
  });
}

function paintCellField3() {
  console.log(cellsField2);
  cellsField3.forEach((cell, index) => {
    cell.addEventListener("click", (e) => {
      console.log("vgf");
      e.preventDefault();
      cell.classList.toggle("active");
      if (time.length === 0) {
        time.push("start");
        autoChangeTime = setInterval(changeTime, 1000);
      }
      showAnswer3();
      saveDataPlay3();
      addSound();
    });
  });
}
//add right click
function clickRightMouse() {
  cellsField.forEach((cellField, index) => {
    cellField.addEventListener("mousedown", (e) => {
      e.preventDefault;
      if (e.button === 2) {
        e.target.classList.toggle("change");
        if (time.length === 0) {
          time.push("start");
          autoChangeTime = setInterval(changeTime, 1000);
        }
        deleteContextMenu();
        addSound();
        saveDataPlay();
      }
    });
  });
}

function clickRightMouse2() {
  cellsField2.forEach((cell, index) => {
    cell.addEventListener("mousedown", (e) => {
      e.preventDefault();
      if (e.button === 2) {
        cell.classList.toggle("change");
        console.log("bgf");
        if (time.length === 0) {
          time.push("start");
          autoChangeTime = setInterval(changeTime, 1000);
        }
        deleteContextMenu2();
        saveDataPlay2();
        addSound();
      }
    });
  });
}

function clickRightMouse3() {
  cellsField3.forEach((cell, index) => {
    cell.addEventListener("mousedown", (e) => {
      e.preventDefault();
      if (e.button === 2) {
        cell.classList.toggle("change");
        console.log("bgf");
        if (time.length === 0) {
          time.push("start");
          autoChangeTime = setInterval(changeTime, 1000);
        }
        deleteContextMenu3();
        saveDataPlay3();
        addSound();
      }
    });
  });
}

function deleteContextMenu() {
  cellsField.forEach((cellField, index) => {
    cellField.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
}

function deleteContextMenu2() {
  cellsField2.forEach((cell, index) => {
    cell.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
}

function deleteContextMenu3() {
  cellsField3.forEach((cell, index) => {
    cell.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  });
}

//clear field

function clearField() {
  cellField.forEach((item) => {
    if (
      item.classList.contains("active") ||
      item.classList.contains("change")
    ) {
      item.classList.remove("active");
      item.classList.remove("change");
      console.log("fgsb");
    }
  });
  clearInterval(autoChangeTime);
  nonogramMinute.textContent = "00";
  nonogramSecond.textContent = "00";
}

//add reset game
function resetGame() {
  resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    clearField();
  });
}
//add timer
let minute = 0;
let second = 0;

function changeTime() {
  second++;
  nonogramSecond.textContent = "0" + second;
  if (second > 9) {
    nonogramSecond.textContent = second;
  }
  if (second > 59) {
    second = 0;
    nonogramSecond.textContent = "0" + second;
    minute++;
    nonogramMinute.textContent = "0" + minute;
  }
  if (minute > 9) {
    nonogramMinute.textContent = minute;
  }
}

//sound click

function addSound() {
  audio.src = "./asserts/sounds/zvuk11.mp3";
  audio.play();
}

function addSoundWinner() {
  audioWinner.src = "./asserts/sounds/zvuk-pobedy-323.mp3";
  audioWinner.play();
}

function clickNonogramSound() {
  nonogramSound.addEventListener("click", (e) => {
    nonogramSound.classList.toggle("inactive");
    audio.muted = true;
    audioWinner.muted = true;
    if (!nonogramSound.classList.contains("inactive")) {
      audio.muted = false;
      audioWinner.muted = false;
    }
  });
}

function saveDataPlay() {
  for (let i = 0; i < nonogramLevel1.length; i++) {
    if (nonogramLevel1[i].classList.contains("active")) {
      for (let j = 0; j < cellField.length; j++) {
        for (let k = 0; k < arrayLocal.length; k++) {
          if (cellField[j].classList.contains("active") && j === k) {
            arrayLocal.splice(k, 1, `${j}:active`);
            //console.log(arrayLocal);
          } else if (cellField[j].classList.contains("change") && j === k) {
            arrayLocal.splice(k, 1, `${j}:change`);
            console.log(arrayLocal);
          } else if (
            (!cellField[j].classList.contains("change") ||
              !cellField[j].classList.contains("active")) &&
            j === k
          ) {
            arrayLocal.splice(k, 1, "");
          }
        }
      }
    }
    console.log(cellField[nonogramLevel1], i);
  }
}

function savePlay() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("last game", `${arrayLocal}`);
    clearField();
    localStorage.setItem("time", `${minute} ${second}`);
  });
}

function saveDataPlay2() {
  for (let i = 0; i < cellsField2.length; i++) {
    for (let j = 0; j < arrayLocal2.length; j++) {
      if (cellsField2[i].classList.contains("active") && j === i) {
        arrayLocal2.splice(j, 1, `${i}:active`);
      } else if (cellsField2[i].classList.contains("change") && j === i) {
        arrayLocal2.splice(j, 1, `${i}:change`);
      } else if (
        (!cellsField2[i].classList.contains("change") ||
          !cellsField2[i].classList.contains("active")) &&
        j === i
      ) {
        arrayLocal2.splice(j, 1, "");
      }
    }
  }
  console.log(arrayLocal2);
}

function savePlay2() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("last game2", `${arrayLocal2}`);
    clearField();
    localStorage.setItem("time2", `${minute} ${second}`);
  });
}

function saveDataPlay3() {
  for (let i = 0; i < cellsField3.length; i++) {
    for (let j = 0; j < arrayLocal3.length; j++) {
      if (cellsField3[i].classList.contains("active") && j === i) {
        arrayLocal3.splice(j, 1, `${i}:active`);
      } else if (cellsField3[i].classList.contains("change") && j === i) {
        arrayLocal3.splice(j, 1, `${i}:change`);
      } else if (
        (!cellsField3[i].classList.contains("change") ||
          !cellsField3[i].classList.contains("active")) &&
        j === i
      ) {
        arrayLocal3.splice(j, 1, "");
      }
    }
  }
  console.log(arrayLocal3);
}

function savePlay3() {
  buttonSave.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.setItem("last game3", `${arrayLocal3}`);
    clearField();
    localStorage.setItem("time3", `${minute} ${second}`);
  });
}

//get data

function getDataPlay() {
  if (buttonLevel1.classList.contains("active")) {
    let dataArray;
    for (let i = 0; i < localStorage.length; i++) {
      let localData = localStorage.getItem("last game").split(",");
      dataArray = localData.filter((item) => item !== "");
      console.log(localData);
    }
    for (let j = 0; j < dataArray.length; j++) {
      const data = dataArray[j].split(":");
      for (let k = 0; k < cellField.length; k++) {
        if (k == data[0] && data[1] === "active") {
          cellField[k].classList.add("active");
        }
        if (k == data[0] && data[1] === "change") {
          cellField[k].classList.add("change");
        }
      }
    }
  }

  if (buttonLevel2.classList.contains("active")) {
    let dataArray2;
    for (let i = 0; i < localStorage.length; i++) {
      let localData = localStorage.getItem("last game2").split(",");
      console.log(localData);
      dataArray2 = localData.filter((item) => item !== "");
      console.log(dataArray2);
    }
    console.log(localStorage.getItem("last game2"));
    console.log(dataArray2);
    for (let j = 0; j < dataArray2.length; j++) {
      const data = dataArray2[j].split(":");
      for (let k = 0; k < cellsField2.length; k++) {
        if (k == data[0] && data[1] === "active") {
          cellsField2[k].classList.add("active");
        }
        if (k == data[0] && data[1] === "change") {
          cellsField2[k].classList.add("change");
        }
      }
    }
    console.log("fgt");
  }
  if (buttonLevel3.classList.contains("active")) {
    let dataArray3;
    for (let i = 0; i < localStorage.length; i++) {
      let localData = localStorage.getItem("last game3").split(",");
      console.log(localData);
      dataArray3 = localData.filter((item) => item !== "");
      console.log(dataArray3);
    }
    console.log(localStorage.getItem("last game3"));
    console.log(dataArray3);
    for (let j = 0; j < dataArray3.length; j++) {
      const data = dataArray3[j].split(":");
      for (let k = 0; k < cellsField3.length; k++) {
        if (k == data[0] && data[1] === "active") {
          cellsField3[k].classList.add("active");
        }
        if (k == data[0] && data[1] === "change") {
          cellsField3[k].classList.add("change");
        }
      }
    }
    console.log("fgt");
  }
}

function getTime() {
  for (let i = 0; i < localStorage.length; i++) {
    let localData = localStorage.getItem("time").split(" ");
    console.log(localData);
    second = localData[1];
    minute = localData[0];
    if (localData[0].length === 2 || localData[1].length === 2) {
      nonogramMinute.textContent = minute;
      nonogramSecond.textContent = second;
    }
    if (localData[0].length === 1) {
      nonogramMinute.textContent = "0" + minute;
    }
    if (localData[1].length === 1) {
      nonogramSecond.textContent = "0" + second;
    }
  }
}

function continueGame() {
  buttonContinue.addEventListener("click", (e) => {
    e.preventDefault();
    getDataPlay();
    getTime();
    localStorage.clear();
    autoChangeTime = setInterval(changeTime, 1000);
    console.log("fr");
  });
}

class Answer {
  constructor(cells, data) {
    this.cell = cells;
    console.log(this.cell);
    this.answer = data;
    for (let j = 0; j < data.length; j++) {
      this.answer[j] = data[j];
    }
  }

  addAnswer() {
    for (let i = 0; i < this.cell.length; i++) {
      for (let j = 0; j < this.answer.length; j++) {
        if (this.cell[i].classList.contains("active") && this.answer[j] === 1) {
          this.answer.splice(i, 1, 2);
          console.log(this.answer);
        }
      }
    }
    if (!this.answer.includes(1)) {
      showCongratulations();
    }
  }
}
const rightAnswer = [];

function showAnswer() {
  const allAnswers = new Array(125);
  const correctAns = [];
  for (let i = 0; i < datesLevel1.length; i++) {
    if (pictureIndex === i && pictureIndex === 0) {
      correctAns.push(datesLevel1[i].answer.flat());
      console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 1) {
      const emptyArray = new Array(25).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 2) {
      const emptyArray = new Array(50).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 3) {
      const emptyArray = new Array(75).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      console.log(correctAns);
    }
    if (pictureIndex === i && pictureIndex === 4) {
      const emptyArray = new Array(100).fill("0");
      correctAns.push(emptyArray.concat(datesLevel1[i].answer.flat()));
      console.log(correctAns);
    }
  }
  const correctAnswer = correctAns.flat(2);
  for (let j = 0; j < allAnswers.length; j++) {
    for (let k = 0; k < correctAnswer.length; k++) {
      if (k === j) {
        allAnswers.splice(j, 1, correctAnswer[k]);
      }
    }
  }
  const answer1 = new Answer(cellField, allAnswers);
  answer1.addAnswer();
  console.log(allAnswers);
  console.log(correctAnswer);
}

function showAnswer2() {
  for (let i = 0; i < datesLevel2.length; i++) {
    const correctAnswer = datesLevel2[i].answer.flat();
    const answer2 = new Answer(cellsField2, correctAnswer);
    answer2.addAnswer();
  }
}

function showAnswer3() {
  for (let i = 0; i < datesLevel2.length; i++) {
    const correctAnswer = datesLevel3[i].answer.flat();
    const answer3 = new Answer(cellsField3, correctAnswer);
    answer3.addAnswer();
  }
}

function viewModalWindow() {
  textModal.textContent = "Congratulation 🎉🎉🎉";
  if (String(minute).length === 1) {
    resultModal.textContent = `Great! You have solved the nonogram in 0${minute} : ${second} seconds!`;
  }
  if (String(second).length === 1) {
    resultModal.textContent = `Great! You have solved the nonogram in ${minute} : 0${second} seconds!`;
  }
  if (String(minute).length === 1 && String(second).length === 1) {
    resultModal.textContent = `Great! You have solved the nonogram in 0${minute} : 0${second} seconds!`;
  }
  if (String(minute).length === 2 && String(second).length === 2) {
    resultModal.textContent = `Great! You have solved the nonogram in ${minute} : ${second} seconds!`;
  }
}

function showCongratulations() {
  viewModalWindow();
  addSoundWinner();
  backgroundModal.classList.add("active");
  modalWindow.classList.add("active");
}

function closeCongratulations() {
  buttonWindow.addEventListener("click", (e) => {
    e.preventDefault();
    clearField();
    backgroundModal.classList.remove("active");
    modalWindow.classList.remove("active");
  });
}
closeCongratulations();

//const rightAnswer = [];
function allRightAnswer() {
  for (let i = 0; i < datesLevel1.length; i++) {
    rightAnswer.push(datesLevel1[i].answer.flat());
  }
}
allRightAnswer();

function showRightAnswer() {
  buttonSolution.addEventListener("click", (e) => {
    e.preventDefault();
    if (buttonLevel1.classList.contains("active")) {
      const allRightAnswers = rightAnswer.flat();
      for (let k = 0; k < allRightAnswers.length; k++) {
        for (let j = 0; j < cellField.length; j++) {
          if (k === j && allRightAnswers[k] === 1) {
            cellField[j].classList.add("active");
          }
          if (k === j && allRightAnswers[k] !== 1) {
            cellField[j].classList.remove("active");
            cellField[j].classList.remove("change");
            console.log(rightAnswer);
          }
        }
      }
    }

    if (buttonLevel2.classList.contains("active")) {
      let rightAnswer2;
      for (let i = 0; i < datesLevel2.length; i++) {
        if (pictureIndex2 === i) {
          rightAnswer2 = datesLevel2[i].answer.flat();
          console.log(rightAnswer2);
        }
      }
      for (let k = 0; k < rightAnswer2.length; k++) {
        for (let j = 0; j < cellsField2.length; j++) {
          if (k === j && rightAnswer2[k] === 1) {
            cellsField2[j].classList.add("active");
            console.log(rightAnswer2);
          }
          if (k === j && rightAnswer2[k] !== 1) {
            cellsField2[j].classList.remove("active");
            cellsField2[j].classList.remove("change");
            console.log(rightAnswer2);
          }
        }
      }
    }
    if (buttonLevel3.classList.contains("active")) {
      let rightAnswer3;
      for (let i = 0; i < datesLevel3.length; i++) {
        if (pictureIndex3 === i) {
          rightAnswer3 = datesLevel3[i].answer.flat();
          console.log(rightAnswer3);
        }
      }
      for (let k = 0; k < rightAnswer3.length; k++) {
        for (let j = 0; j < cellsField3.length; j++) {
          if (k === j && rightAnswer3[k] === 1) {
            cellsField3[j].classList.add("active");
            console.log(rightAnswer3);
          }
          if (k === j && rightAnswer3[k] !== 1) {
            cellsField3[j].classList.remove("active");
            cellsField3[j].classList.remove("change");
            console.log(rightAnswer3);
          }
        }
      }
    }
  });
}

//click button => click picture => show nonogram

function choseNonogram() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      pictureIndex = index;
      console.log("frt");
      for (let i = 0; i < nonogramLevel1.length; i++) {
        if (index === i && buttonLevel1.classList.contains("active")) {
          nonogramLevel1[i].classList.add("active");
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
        }
      }
    });
  });
}
choseNonogram();

function choseNonogram2() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      pictureIndex2 = index;
      for (let i = 0; i < datesLevel2.length; i++) {
        if (index === i && buttonLevel2.classList.contains("active")) {
          const nonogramTop = new TopDates2(datesLevel2[i].top);
          nonogramTop.fillTopPart();
          const nonogramLeft = new LeftDates2(datesLevel2[i].left);
          nonogramLeft.fillLeftPart();
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
          nonogramLevel2.classList.add("active");
          addStyles2();
        }
      }
    });
  });
}

function addStyles2() {
  cellsField.style.gridTemplateColumns = "repeat(10, 1fr)";
  datesLeft.style.gridTemplateRows = "repeat(10, 1fr)";
  datesTop.style.gridTemplateColumns = "repeat(10, 1fr)";
}

function choseNonogram3() {
  images.forEach((imag, index) => {
    imag.addEventListener("click", (e) => {
      e.preventDefault();
      pictureIndex3 = index;
      for (let i = 0; i < datesLevel3.length; i++) {
        if (index === i && buttonLevel3.classList.contains("active")) {
          const nonogramTop = new TopDates3(datesLevel3[i].top);
          nonogramTop.fillTopPart();
          const nonogramLeft = new LeftDates3(datesLevel3[i].left);
          nonogramLeft.fillLeftPart();
          nonograms.classList.add("active");
          containerDiv.classList.add("hidden");
          nonogramLevel3.classList.add("active");
          addStyles3();
        }
      }
    });
  });
}

function addStyles3() {
  cellsField.style.gridTemplateColumns = "repeat(15, 1fr)";
  datesLeft.style.gridTemplateRows = "repeat(15, 1fr)";
  datesTop.style.gridTemplateColumns = "repeat(15, 1fr)";
}

//active button

function activeButtonsLevel2() {
  buttonLevel2.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      buttonLevel1.classList.contains("active") ||
      buttonLevel3.classList.contains("active")
    ) {
      buttonLevel2.classList.add("active");
      buttonLevel1.classList.remove("active");
      buttonLevel3.classList.remove("active");
    }
    changePictures();
    console.log("rrr");
    paintCellField2();
    clickRightMouse2();
    savePlay2();
  });
}
activeButtonsLevel2();

function activeButtonsLevel3() {
  buttonLevel3.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      buttonLevel1.classList.contains("active") ||
      buttonLevel2.classList.contains("active")
    ) {
      buttonLevel3.classList.add("active");
      buttonLevel2.classList.remove("active");
      buttonLevel1.classList.remove("active");
    }
    savePlay3();
    paintCellField3();
    clickRightMouse3();
    changePictures3();
  });
}
activeButtonsLevel3();

function activeButtonsLevel1() {
  buttonLevel1.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      buttonLevel3.classList.contains("active") ||
      buttonLevel2.classList.contains("active")
    ) {
      buttonLevel2.classList.remove("active");
      buttonLevel1.classList.add("active");
      buttonLevel3.classList.remove("active");
    }
    changePictures1();
  });
}
activeButtonsLevel1();

//change images for different level;

function changePictures() {
  pictures.forEach((imag, index) => {
    datesLevel2.forEach((_, i) => {
      if (index === i) {
        imag.src = `${datesLevel2[i].img}`;
      }
    });
  });
}

function changePictures1() {
  pictures.forEach((imag, index) => {
    datesLevel1.forEach((_, i) => {
      if (index === i) {
        imag.src = `${datesLevel1[i].img}`;
      }
    });
  });
}

function changePictures3() {
  pictures.forEach((imag, index) => {
    datesLevel3.forEach((_, i) => {
      if (index === i) {
        imag.src = `${datesLevel3[i].img}`;
      }
    });
  });
}

//create random game

function randomNum(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
  //console.log(randomNumber);
}

function getRandomImg() {
  let pictureIndex;
  const containerTop = [];
  const containerLeft = [];
  let randomNumberFirst = randomNum(0, 2);
  let randomNumberSecond = randomNum(0, 4);
  const levels = [datesLevel1, datesLevel2, datesLevel3];
  let randomLevel;
  let randomPicture;
  levels.forEach((level, index) => {
    if (randomNumberFirst === index) {
      randomLevel = level;
    }
  });
  if (randomNumberFirst === 0) {
    buttonLevel1.classList.add("active");
    buttonLevel2.classList.remove("active");
    buttonLevel3.classList.remove("active");
  }
  if (randomNumberFirst === 1) {
    buttonLevel2.classList.add("active");
    buttonLevel1.classList.remove("active");
    buttonLevel3.classList.remove("active");
  }
  if (randomNumberFirst === 2) {
    buttonLevel3.classList.add("active");
    buttonLevel1.classList.remove("active");
    buttonLevel2.classList.remove("active");
  }
  randomLevel.forEach((random, index) => {
    if (randomNumberSecond === index) {
      randomPicture = random;
    } else if (randomNumberSecond === index) {
      randomPicture = random;
    }
  });
  let nonogramTop;

  if (buttonLevel1.classList.contains("active")) {
    /*if (cellsTop.children.length > 5) {
      console.log(cellsTop.children.length);
      nonogramTop.removeElement();
      //containerTop.splice(5, 5);
    }*/

    pictureIndex = randomNumberSecond;

    nonogramTop = new TopDates(datesLevel1[pictureIndex].top);
    //nonogramTop.removeElement();
    nonogramTop.fillTopPart();
    //nonogramTop.removeElement();
    console.log(nonogramTop);
    const nonogramLeft = new LeftDates(datesLevel1[pictureIndex].left);
    nonogramLeft.fillLeftPart();
    nonograms.classList.add("active");
    containerDiv.classList.add("hidden");
    nonogramLevel1.classList.add("active");
    cellsField.style.gridTemplateColumns = "repeat(5, 1fr)";
    datesLeft.style.gridTemplateRows = "repeat(5, 1fr)";
    datesTop.style.gridTemplateColumns = "repeat(5, 1fr)";
    containerTop.push(cellsTop.children);
    console.log(cellsTop);
  }
  if (cellsTop.children.length > 5) {
    console.log(cellsTop.children.length);
    console.log(nonogramTop);
    nonogramTop.removeElement();
    //containerTop.splice(5, 5);
  }

  /*if (buttonLevel2.classList.contains("active")) {
    const nonogramTop = new TopDates2(datesLevel2[randomNumberSecond].top);
    nonogramTop.fillTopPart();
    const nonogramLeft = new LeftDates2(datesLevel2[randomNumberSecond].left);
    nonogramLeft.fillLeftPart();
    nonograms.classList.add("active");
    containerDiv.classList.add("hidden");
    nonogramLevel2.classList.add("active");
    nonogramLevel1.classList.remove("active");
    addStyles2();
  }*/

  console.log(pictureIndex);
  showRightAnswer();
  console.log(randomLevel);
  console.log(randomPicture);
  console.log(containerTop);
  console.log(containerLeft);
}

function randomGame() {}
buttonRandom.addEventListener("click", (e) => {
  getRandomImg();
});

randomGame();
export {
  clickRightMouse,
  resetGame,
  clickNonogramSound,
  savePlay,
  continueGame,
  closeCongratulations,
  showRightAnswer,
  choseNonogram2,
  choseNonogram3,
};
