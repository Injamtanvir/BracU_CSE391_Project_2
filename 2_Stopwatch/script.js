// InjamTanvir

let clock = document.getElementById("clock");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let seconds = 0;
let timer_Id = null;

start.addEventListener("click", function (){
  if (timer_Id !== null){
    clearInterval(timer_Id);
  }
  timer_Id = setInterval(start_Timer, 1000);
});

stop.addEventListener("click", function (){
  clearInterval(timer_Id);
  timer_Id = null;
});

reset.addEventListener("click", function (){
  clearInterval(timer_Id);
  seconds = 0;
  clock.innerHTML = "00:00";
  timer_Id = null;
});

function start_Timer(){
  seconds += 3;
  
  if(seconds >= 30){
    seconds = 30;
    clearInterval(timer_Id);
    timer_Id = null;
  }
  
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  clock.innerHTML = `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}
