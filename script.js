const startStopBtn = document.querySelector(".reaction-test__button")
const lights = document.querySelector(".reaction-test__lights")
const timer = document.querySelector(".reaction-test__time")
const scoreBoard = document.querySelector(".reaction-test__score")

let startButtonTime = () => clickedStartButtonNow = new Date();
let lightsGreenTime = () => lightGreenNow = new Date();
let clickedLightsTime = () => clickedLightsNow = new Date();


let randomLightsOn = () => setTimeout (beginLights, (Math.random() * 10000));




const beginLights = () => {
    console.log(clickedStartButtonNow.getSeconds());
    //#00c000 = ${green}
    lights.style = "background-color: #00c000";
    lightsGreenTime();
    lights.addEventListener("click", recordTime);
}


const start = () => {
    console.log("start");
    //#ff0000 = ${red}
    startStopBtn.style = "background-color: #ff0000";
    startStopBtn.innerHTML = "STOP"
    startStopBtn.removeEventListener("click", start);
    startStopBtn.addEventListener("click", stop);
    // startStopBtn.value = "stop";
    //setTimout activates beginLights function
    //Math.random is a random number between 0- 1
    // * 10000to change milliseconds to seconds
    startButtonTime();
    randomLightsOn();
}

const stop = () =>{
    clearTimeout(randomLightsOn);
    lights.style = "background-color: #7c7c7c";
    console.log("stop");
    //#00c000 = ${green}
    startStopBtn.style = "background-color: #00c000";
    startStopBtn.innerHTML = "START"
    startStopBtn.removeEventListener("click", stop);
    startStopBtn.addEventListener("click", start);
    // startStopBtn.value = "start";

}

startStopBtn.addEventListener("click", start);