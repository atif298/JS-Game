const startStopBtn = document.querySelector(".reaction-test__button")
const lights = document.querySelector(".reaction-test__lights")
const timer = document.querySelector(".reaction-test__time")
const scoreBoard = document.querySelector(".reaction-test__score")

//Records the current time when function is called
let startButtonTime = () => clickedStartButtonNow = new Date();
let lightsGreenTime = () => lightGreenNow = new Date();
let clickedLightsTime = () => clickedLightsNow = new Date();

//Delays to a random time within 10 seconds
let randomLightsOn = () => setTimeout (beginLights, (Math.random() * 10000));

let recordTime = () => {
    clickedLightsTime();
    let reactionTime = document.createElement("li");
    reactionTime.innerHTML = Number(clickedLightsNow - lightGreenNow);
    //Recording time
    scoreBoard.appendChild(reactionTime);
    //Removing ability for multiple clicks
    lights.removeEventListener('click', recordTime);
    }

const beginLights = () => {
    console.log(clickedStartButtonNow.getSeconds());
    //#00c000 = ${green}
    lights.style = "background-color: #00c000";
    lightsGreenTime();
    lights.addEventListener("click", recordTime);
}

const start = () => {
    //Styling into stop button
    //#ff0000 = ${red}
    startStopBtn.style = "background-color: #ff0000";
    startStopBtn.innerHTML = "STOP"
    //Removes start button function and add stop button function
    startStopBtn.removeEventListener("click", start);
    startStopBtn.addEventListener("click", stop)
    startButtonTime();
    randomLightsOn();
}

const stop = () =>{
    clearTimeout(randomLightsOn);
    //Styling lights to original form
    lights.style = "background-color: #7c7c7c";
    //Styling into start button
    //#00c000 = ${green}
    startStopBtn.style = "background-color: #00c000";
    startStopBtn.innerHTML = "START"
    //Removes stop button function and add start button function
    startStopBtn.removeEventListener("click", stop);
    startStopBtn.addEventListener("click", start);
}

startStopBtn.addEventListener("click", start);