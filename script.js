const rulesBtn = document.querySelector(".rules-btn");
const rules = document.querySelector(".rules");
const closeIcon = document.querySelector(".closeIcon");
const scissors = document.querySelector("#scissors");
const paper = document.querySelector("#paper");
const rock = document.querySelector("#rock");
const lizard = document.querySelector("#lizard");
const spock = document.querySelector("#spock");
rulesBtn.addEventListener("click", () => {
  rules.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  rules.style.display = "none";
});
// const iconsInfo = [
//   {
//     name: "scissors",
//     src: "images/icon-scissors.svg",
//   },
//   {
//     name: "paper",
//     src: "images/icon-paper.svg",
//   },
//   {
//     name: "rock",
//     src: "images/icon-rock.svg",
//   },
//   {
//     name: "scissors",
//     src: "images/icon-lizard.svg",
//   },
//   {
//     name: "spock",
//     src: "images/icon-spock.svg",
//   },
// ];
const stayer = [];
function moveOthers(icon){
    stayer.push(icon)
   iconArray.forEach(Element=>{
    if(!stayer.includes(Element)){
        console.log(Element)
        Element.style.display ="none"
        // icon.style.display = "none"
    }
   })
   }

const iconArray = [scissors, rock, paper, lizard, spock];
iconArray.forEach((item) => {
  item.addEventListener("click", () => {
    moveOthers(item)
    
  });
});
