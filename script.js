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
const scissorsClass = document.querySelector(".scissors");
const paperClass = document.querySelector(".paper");
const rockClass = document.querySelector(".rock");
const lizardClass = document.querySelector(".lizard");
const spockClass = document.querySelector(".spock");
rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  rules.style.display = "none";
});

const stayer = [];
function moveOthers(icon) {
  stayer.push(icon);
  iconArray.forEach((Element) => {
    if (!stayer.includes(Element)) {
      Element.style.display = "none";
      mainDiv.style.background = "var(--RadialGradient)";
      icon.style.height = "180px";
      icon.style.width = "180px";
      clicked.appendChild(icon);
    }
  });
}

const iconArray = [scissors, rock, paper, lizard, spock];
const classesArry = [
  scissorsClass,
  rockClass,
  paperClass,
  lizardClass,
  spockClass,
];
const clickedarr = stayer;
const computerarr = [];

iconArray.forEach((item) => {
  item.addEventListener("click", () => {
    moveOthers(item);
    randomGenarator(iconArray);

    appender();
  });
});

function randomGenarator(array) {
  const randomlyGenarated = Math.floor(Math.random() * array.length);
  const randomDiv = array[randomlyGenarated];
  computerarr.push(randomDiv);
  randomDiv.style.display = "flex";
  computerChoice.appendChild(randomDiv);
  randomDiv.style.width = "180px";
  randomDiv.style.height = "180px";
  randomDiv.style.borderRadius = "50%";
  resultTxt.style.display = "block";
  if ((resultTxt.style.display = "block")) {
    clicked.style.left = "30%";
    computerChoice.style.left = "62%";
  }
}
function appender() {
  const computerId = computerarr[0].id;
  const clickedId = clickedarr[0].id;
  const imgsrc = computerarr[0].children[0].src;
  if (computerId == clickedId) {
    console.log("matched");
    const div = document.createElement("div");
    div.setAttribute("id", computerId);
    div.setAttribute("class", "iconHolder");
    const img = document.createElement("img");
    img.setAttribute("src", imgsrc);
    div.appendChild(img);
    div.style.width = "180px";
    div.style.height = "180px";
    clicked.appendChild(div);
  }
}
