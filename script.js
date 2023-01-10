const rulesBtn = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules");
const closeIcon = document.querySelector(".closeIcon");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const lizard = document.querySelector("#lizard");
const spock = document.querySelector("#spock");
const mainDiv = document.querySelector(".main-div");
const clicked = document.querySelector(".clicked");
const computerChoice = document.querySelector(".computerChoice");
const resultTxt = document.querySelector(".resultTxt");
const scoreNo = document.querySelector(".scoreNo");
const placeHolder = document.querySelector("#positionHolder");
const againBtn = document.querySelector(".againBtn");
const click = document.getElementById("clickShadow");
const computer = document.getElementById("computerShadow");

rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  rules.style.display = "none";
});
let clicklistener;
const stayer = [];
function moveOthers(icon) {
  stayer.push(icon);
  iconArray.forEach((Element) => {
    if (!stayer.includes(Element)) {
      Element.style.display = "none";
      mainDiv.style.background = "var(--RadialGradient)";
      icon.style.height = "180px";
      icon.style.width = "180px";
      icon.style.display = "none";
      placeHolder.style.display = "block";
    }
  });
  clickappendrr();
}

let iconArray = [scissors, rock, paper, lizard, spock];

const clickedarr = stayer;
const computerarr = [];

iconArray.forEach((item) => {
  item.addEventListener("click", () => {
    moveOthers(item);
    setTimeout(function () {
      randomGenarator(iconArray);
    }, 1000);

    setTimeout(resultRevealer, 1000);
  });
});

function randomGenarator(array) {
  const randomlyGenarated = Math.floor(Math.random() * array.length);
  const randomDiv = array[randomlyGenarated];
  computerarr.push(randomDiv);
  randomDiv.style.display = "none";
  computerappendrr();
  randomDiv.style.width = "180px";
  randomDiv.style.height = "180px";
  randomDiv.style.borderRadius = "50%";
  resultTxt.style.display = "block";
  placeHolder.style.display = "none";
  againBtn.style.display = "block";
  if ((resultTxt.style.display = "block")) {
    clicked.style.left = "28%";
    computerChoice.style.left = "64%";
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function handleTabletChange(e) {
      if (e.matches) {
        clicked.style.left = "15%";
        computerChoice.style.left = "80%";
        //this computer shadow
        computer.style.left = "93%";
      } else {
        clicked.style.left = "28%";
        computerChoice.style.left = "64%";
        computer.style.left = "64%";
      }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);

  }
}
function clickappendrr() {
  const clickedId = clickedarr[0].id;
  const imgsrc = clickedarr[0].children[0].src;
  const div = document.createElement("div");
  div.setAttribute("id", clickedId);
  div.setAttribute("class", "iconHolder");
  const img = document.createElement("img");
  img.setAttribute("src", imgsrc);
  img.setAttribute("class", "icon");
  resizer(img);
  div.appendChild(img);
  div.style.width = "200px";
  div.style.height = "200px";
  clicked.appendChild(div);
  makeItResponsive(div, img);
}
function computerappendrr() {
  const computerId = computerarr[0].id;
  const imgsrc = computerarr[0].children[0].src;
  const div = document.createElement("div");
  div.setAttribute("id", computerId);
  div.setAttribute("class", "iconHolder");
  const img = document.createElement("img");
  img.setAttribute("src", imgsrc);
  img.setAttribute("class", "icon");
  resizer(img);
  div.appendChild(img);
  div.style.width = "200px";
  div.style.height = "200px";
  computerChoice.appendChild(div);
  makeItResponsive(div, img);
}
function makeItResponsive(div, img) {
  const mediaQuery = window.matchMedia("(max-width: 768px)");
  function handleTabletChange(e) {
    if (e.matches) {
      div.style.height = "180px";
      div.style.width = "180px";
      img.style.height = "80px";
      img.style.width = "70px";
    } else {
      div.style.height = "200px";
      div.style.width = "200px";
      resizer(img);
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);
}
function resizer(image) {
  image.style.width = "70px";
  image.style.height = "80px";
}
let scoreCounter = 0;
function resultRevealer() {
  const computerId = computerarr[0].id;
  const clickedId = clickedarr[0].id;

  if (
    (clickedId == "rock" && computerId == "scissors") ||
    (clickedId == "rock" && computerId == "lizard") ||
    (clickedId == "paper" && computerId == "rock") ||
    (clickedId == "paper" && computerId == "spock") ||
    (clickedId == "scissors" && computerId == "paper") ||
    (clickedId == "scissors" && computerId == "lizard") ||
    (clickedId == "lizard" && computerId == "paper") ||
    (clickedId == "lizard" && computerId == "spock") ||
    (clickedId == "spock" && computerId == "rock") ||
    (clickedId == "spock" && computerId == "scissors")
  ) {
    scoreCounter++;
    scoreNo.textContent = scoreCounter;
    resultTxt.textContent = "YOU WIN";
    click.style.display = "block";
  } else if (
    (clickedId == "scissors" && computerId == "rock") ||
    (clickedId == "lizard" && computerId == "rock") ||
    (clickedId == "rock" && computerId == "paper") ||
    (clickedId == "spock" && computerId == "paper") ||
    (clickedId == "paper" && computerId == "scissors") ||
    (clickedId == "lizard" && computerId == "scissors") ||
    (clickedId == "paper" && computerId == "lizard") ||
    (clickedId == "spock" && computerId == "lizard") ||
    (clickedId == "rock" && computerId == "spock") ||
    (clickedId == "scissors" && computerId == "spock")
  ) {
    resultTxt.textContent = "YOU LOSE";
    scoreCounter--;
    scoreNo.textContent = scoreCounter;
    computer.style.display = "block";
  } else {
    resultTxt.textContent = "IT'S TIE";
    click.style.display = "none";
    computer.style.display = "none";
  }
}

againBtn.addEventListener("click", () => {
  stayer.shift();
  computerarr.shift();
  const clickedChild = clicked.children[0];
  const computerChild = computerChoice.children[0];
  clicked.removeChild(clickedChild);
  computerChoice.removeChild(computerChild);
  resultTxt.style.display = "none";
  againBtn.style.display = "none";
  mainDiv.style.background = "";
  iconArray.forEach((item) => {
    item.style.display = "flex";
    item.style.width = "140px";
    item.style.height = "140px";
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    function handleTabletChange(e) {
      if (e.matches) {
        item.style.width = "120px";
        item.style.height = "120px";
      } else {
        item.style.width = "140px";
        item.style.height = "140px";
      }
    }
    mediaQuery.addListener(handleTabletChange);
    handleTabletChange(mediaQuery);
  });
  click.style.display = "none";
  computer.style.display = "none";
});

