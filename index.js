const gameContainer = document.querySelector(".game__container");
const menuBoard = document.querySelector(".menuBoard");
const menuPlayBtn = document.querySelector(".menuPlayBtn");
const menuQuitBtn = document.querySelector(".menuQuitBtn");
const soundBtn = document.querySelector(".soundBtn");
const victoryBtn = document.querySelector(".victoryBtn");
const settingBtn = document.querySelector(".settingBtn");
const betBtn = document.querySelectorAll(".animalCircleImg");
// const reduceBtn = document.querySelectorAll(".reduceBtn");
const myValue = document.querySelectorAll(".myValue");
console.log(myValue);
const maxValue = document.querySelectorAll(".maxValue");
const centerImg = document.querySelectorAll(".img");
console.log(centerImg);
const myOwnCoin = document.querySelector(".myOwnCoin");
const circle = document.querySelector(".circle");
let ss = document.getElementById("ss");
const countDown = document.querySelector(".countDown");
const clockTickAudio = document.querySelector(".clockTickAudio");
const coinDropAudio = document.querySelector(".coinDropAudio");
const backgroundSound = document.querySelector(".backgroundSound");
const bubbleClickSound = document.querySelector(".bubbleClick");
const startBtn = document.querySelector(".startBtn");
const restartBtn = document.querySelector(".restartBtn");
const removeBetBtn = document.querySelector(".removeBetBtn");

    for(let i = 0; i < betBtn.length; i++){
        betBtn[i].addEventListener("click",function(){
            playCoinDrop();
            if(betPermission === false){
                return ;
            }else{
                if(+myOwnCoin.firstChild.textContent > 0 && +myValue[i].firstChild.textContent < 50){
                    myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent + 1;
                    myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent - 1;
                }
                // reduceBtn[i].addEventListener("click", function(){
                //     if(+myValue[i].firstChild.textContent > 0){
                //         myValue[i].firstChild.textContent = +myValue[i].firstChild.textContent - 1;
                //         myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + 1;  
                //} 
            }
        })
    }
 
// amountIncrease();

function playClockTick(){
    clockTickAudio.play();
}
function endClockTick(){
    clockTickAudio.pause();
}

function playCoinDrop(){
    coinDropAudio.play();
}
function playBackgroundSound(){
    backgroundSound.play();
}
function stopBackgroundSound(){
    backgroundSound.pause();
}
function playBubbleSound(){
    bubbleClickSound.play();
}

menuPlayBtn.addEventListener("click",function(){
    playBubbleSound();
    gameContainer.style.display = "flex";
    menuBoard.style.display = "none";
})
menuQuitBtn.addEventListener("click", function(){
    playBubbleSound();
})
soundBtn.addEventListener("click", function(){
    playBubbleSound();
})
victoryBtn.addEventListener("click", function(){
    playBubbleSound();
})
settingBtn.addEventListener("click", function(){
    playBubbleSound();
})

let count = 15;
let timerId = 0;
let betPermission = false;

startBtn.addEventListener("click", function(){
    playBubbleSound();
    playBackgroundSound();
    circle.style.display = "block";
    if(timerId !== 0) return;

    timerId = setInterval(function(){
        count--;
        let s = count
        s = (s <10)? "0" + s : s;
        countDown.innerHTML = s;
        betPermission = true;
        if(count > 0 && count <= 5){
            stopBackgroundSound();
            playClockTick();
            countDown.style.color = "rgb(253, 38, 38)";
            ss.style.stroke = "rgb(253, 38, 38)";
        }
        if(count === 0){
            countDown.innerHTML = "GO";
            countDown.style.color = "orange";
        }
        if(count < 0){
            // for(let i = 0; i < betBtn.length; i++){
            //     myValue[i].firstChild.textContent = 0;
            // }
            countingEnd();
            animationCircle();
        }
        ss.style.strokeDashoffset = 440 - (440 * count) / 30;
    },1000)
});

function countingEnd(){
    clearInterval(timerId);
    timerId = 0;
    count = 30;
    countDown.innerHTML = count;
    endClockTick()
    circle.style.display = "none"
    betPermission = false;
    ss.style.stroke = "orange";
};

restartBtn.addEventListener("click", function(){
    // myOwnCoin.firstChild.textContent = 600;
    // for(let i = 0; i < betBtn.length; i++){
    //     myValue[i].firstChild.textContent = 0;
    // };
    // countingEnd();
    playBubbleSound();
    for(let i = 0; i < betBtn.length; i++){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
    };
    for(let i = 0; i < betBtn.length; i++){
        myValue[i].firstChild.textContent = 0;
    };
});

removeBetBtn.addEventListener("click", function(){
    playBubbleSound();
    for(let i = 0; i < betBtn.length; i++){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + +myValue[i].firstChild.textContent;
    };
    for(let i = 0; i < betBtn.length; i++){
        myValue[i].firstChild.textContent = 0;
    };
    countingEnd();
    stopBackgroundSound();
});

function check(x){
    console.log("i am here");
    if(x == 1 || x == 2 || x == 3){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[0].firstChild.textContent * 2);
    }
    if(x == 21 || x == 22 || x == 23){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[1].firstChild.textContent * 2);
    }
    if(x == 25 || x == 26 || x == 27){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[2].firstChild.textContent * 2);
    }
    if(x == 29 || x == 30 || x == 31){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[3].firstChild.textContent * 2);
    }
    if(x == 5 || x == 6 || x == 7){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[4].firstChild.textContent * 2);
    }
    if(x == 9 || x == 10 || x == 11){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[5].firstChild.textContent * 2);
    }
    if(x == 13 || x == 14 || x == 15){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[6].firstChild.textContent * 2);
    }
    if(x == 17 || x == 18 || x == 19){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[7].firstChild.textContent * 2);
    }
    if(x == 0 || x == 8 || x == 16 || x == 24){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[8].firstChild.textContent * 2);
    }
    if(x == 4 || x == 12 || x == 20 || x == 28){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[9].firstChild.textContent * 2);
    }
    if(x == 5 || x == 6 || x == 7 || x == 9 || x == 10 || x == 11 || x == 13 || x == 14 || x == 15 || x == 17 || x == 18 || x == 19 || x == 0 || x == 8 || x == 16 || x == 24 || x == 4 || x == 12 || x == 20 || x == 28){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[10].firstChild.textContent * 2);
        console.log(myOwnCoin.firstChild.textContent);
    }
    if(x == 1 || x == 2 || x == 3 || x == 21 || x == 22 || x == 23 || x == 25 || x == 26 || x == 27 || x == 29 || x == 30 || x == 31){
        myOwnCoin.firstChild.textContent = +myOwnCoin.firstChild.textContent + (+myValue[11].firstChild.textContent * 2);
        console.log(myOwnCoin.firstChild.textContent);
    }
}

function getRandomInt(num){
    return Math.floor((Math.random() * num) + num);
}

function  animationCircle(){
    let gameIntervel = 0
    let i = 0;
    let number = getRandomInt(32);
    if(gameIntervel !== 0){
        return ;
    }
    gameIntervel = setInterval(() => {
        if(!centerImg[i].className.includes("animate")) {
            centerImg[i].classList.add("animate");
        }
        if(i > 0){
            centerImg[i-1].classList.remove("animate");
        }
        i++;
        number--;
        if(i >= 32){
            centerImg[i-1].classList.remove("animate");
            i = 0;
            number--;
        }
        if(number <= 0){
            // centerImg[i-1].classList.remove("animate");
            clearInterval(gameIntervel);
            let y = i - 1;
            console.log(y);
            check(y);
            
            for(let i = 0; i < betBtn.length; i++){
                myValue[i].firstChild.textContent = 0;
            }
        }
        playBubbleSound();
    }, 100);
 }