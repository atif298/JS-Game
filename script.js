const startStopBtn = document.querySelector(".reaction-test__button")
const lights = document.querySelector(".reaction-test__lights")
const timer = document.querySelector(".reaction-test__time")
const scoreBoard = document.querySelector(".reaction-test__score")

const start = () => {
    console.log("start");
    //#ff0000 = ${red}
    startStopBtn.style = "background-color: #ff0000";
    startStopBtn.innerHTML = "STOP"
    startStopBtn.removeEventListener("click", start);
    startStopBtn.addEventListener("click", stop);
    // startStopBtn.value = "stop";
    handleLights();
}

const stop = () =>{
    console.log("stop");
    //#00c000 = ${green}
    startStopBtn.style = "background-color: #00c000";
    startStopBtn.innerHTML = "START"
    startStopBtn.removeEventListener("click", stop);
    startStopBtn.addEventListener("click", start);
    // startStopBtn.value = "start";

}

const handleLights = () => {
    
}

startStopBtn.addEventListener("click", start);