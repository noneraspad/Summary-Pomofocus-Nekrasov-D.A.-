const inputt = document.getElementById('inputt');
const blockTime = document.querySelector('.time');

const PMDR = document.getElementById('Pomodo');
const STBK = document.getElementById('Shortbreak');
const LGBK = document.getElementById('Longbreak');

let interval;
let minutes;
let seconds;
let lastcounter;
let timex;


document.getElementById('start').addEventListener('click', () =>{
    
    let timex = inputt.value;
    if (timex == 1500) {
        PMDR.style.color = "#F51B1B";
        LGBK.style.color = "white";
        STBK.style.color = "white";
    }
    else if (timex == 900) {
        PMDR.style.color = "white";
        LGBK.style.color = "#34CB05";
        STBK.style.color = "white";
    }
    else if(timex == 300) {
        PMDR.style.color = "white";
        LGBK.style.color = "white";
        STBK.style.color = "#318CE7";
    }
    interval = setInterval(updatetimer, 1000);
    blockTime.innerHTML = inputt.value;
    inputt.value = 0;
    function updatetimer() {
        const minutes = Math.floor(timex / 60);
        let seconds = timex % 60;
        seconds = seconds < 10 ? "0" + seconds:
        seconds;
        blockTime.innerHTML = `${minutes}:
        ${seconds}`;
        timex--;
        lastcounter = timex;
    }
    
});

document.getElementById('stop').addEventListener('click', () =>{
    inputt.value = lastcounter + 1;
    clearInterval(interval);
});

document.getElementById('reset').addEventListener('click', () =>{
    inputt.value = 0;
    PMDR.style.color = "white";
    LGBK.style.color = "white";
    STBK.style.color = "white";
    blockTime.innerHTML = inputt.value;
});

function substractTime() {
    if(blockTime.innerHTML > 0){
        blockTime.innerHTML--;
        inputt.value--;
    }
}