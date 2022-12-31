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
  // checker()
  const randomlyGenarated = Math.floor(Math.random() * array.length);
  const randomDiv = array[randomlyGenarated];
  computerarr.push(randomDiv);
  randomDiv.style.display = "none";
  // computerChoice.appendChild(randomDiv);
  computerappendrr();
  randomDiv.style.width = "180px";
  randomDiv.style.height = "180px";
  randomDiv.style.borderRadius = "50%";
  resultTxt.style.display = "block";
  placeHolder.style.display = "none";
  againBtn.style.display = "block";
  if ((resultTxt.style.display = "block")) {
    clicked.style.left = "30%";
    computerChoice.style.left = "62%";
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
  div.appendChild(img);
  div.style.width = "180px";
  div.style.height = "180px";
  clicked.appendChild(div);
}
function computerappendrr() {
  const computerId = computerarr[0].id;
  const imgsrc = computerarr[0].children[0].src;
  const div = document.createElement("div");
  div.setAttribute("id", computerId);
  div.setAttribute("class", "iconHolder");
  const img = document.createElement("img");
  img.setAttribute("src", imgsrc);
  div.appendChild(img);
  div.style.width = "180px";
  div.style.height = "180px";
  computerChoice.appendChild(div);
}
let scoreCounter = 0;
function resultRevealer() {
  const computerId = computerarr[0].id;
  const clickedId = clickedarr[0].id;
  //  console.log(computerarr[0])
  //  console.log(clickedarr[0])
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
  } else {
    resultTxt.textContent = "IT'S TIE";
  }
  // console.log(clickedarr[0]);
  // console.log(computerarr[0]);
}
let cliclistener;
againBtn.addEventListener("click", () => {
  clicklistener = true;
  stayer.shift()
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
    console.log(stayer)
  });
 
});
