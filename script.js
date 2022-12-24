const rulesBtn = document.querySelector(".rules-btn")
const rules = document.querySelector(".rules")
const closeIcon = document.querySelector(".closeIcon")
rulesBtn.addEventListener("click",()=>{
    rules.style.display = "block"
})
closeIcon.addEventListener("click", ()=>{
    rules.style.display = "none"
})
