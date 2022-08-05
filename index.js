const betBtn = document.querySelectorAll(".animalCircleImg");
const reduceBtn = document.querySelectorAll(".reduceBtn");
const myValue = document.querySelectorAll(".myValue");
const maxValue = document.querySelectorAll(".maxValue");
const myOwnCoin = document.querySelector(".myOwnCoin");

for(let i = 0; i < betBtn.length; i++){
    betBtn[i].addEventListener("click", function(){
        if(+myValue[i].firstChild.textContent < 50){
            myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent + 1;
            myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent - 1;  
        }
    })
    reduceBtn[i].addEventListener("click", function(){
        if(+myValue[i].firstChild.textContent > 0){
            myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent - 1;
            myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + 1;  
        }
    })
}

//audio function+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function playAlarm() {
    alarm.play()
}

function stopAlarm () {
    alarm.pause()
}

const countDown = document.querySelector(".count-down")
const alarm = document.getElementById("audioTimer")

let count = 30;
let timerId = 0;

//Start count +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const startBtn = document.querySelector(".start-btn")
startBtn.addEventListener("click", ()=> {
    playAlarm()
    countDown.style.display = "block"
    if(timerId !== 0) {
        return
    }

    timerId = setInterval(function () {
        count--
        countDown.innerHTML = count
        if(count === 0) {
            countDown.innerHTML = "GO"
        }
        if(count < 0) {
            return countingStop()
        }
    },1000)

})

function countingStop () {
    clearInterval(timerId);
    timerId = 0;
    count = 30;
    countDown.innerHTML = count;
    stopAlarm()
    countDown.style.display = "none"
}
const stopBtn = document.querySelector(".stop-btn");
stopBtn.addEventListener("click", function () {
    console.log("hello")
    return countingStop()
})















// const Bet = [
//     {
//         name:'dog',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'elephant',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'sheep',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'monkey',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'jellyfish',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'shark',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'seahorse',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'dolphin',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'tortoise',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'whale',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'land',
//         amount:0,
//         limitAmmount:50,
//     },
//     {
//         name:'sea',
//         amount:0,
//         limitAmmount:50,
//     },
// ];
// function render (arr){
//     for(let i=0;i<arr.length;i++){
//         arr = Bet;
//         return arr;
//     }
//     // console.log(arr,"hhh")

// }
// console.log(render(Bet));