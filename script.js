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
const clickedarr = stayer;
const computerarr = [];

iconArray.forEach((item) => {
  item.addEventListener("click", () => {
    moveOthers(item);
    randomGenarator(iconArray);
  });
});
console.log(computerarr);
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
