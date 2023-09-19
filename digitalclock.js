
const clock=document.querySelector(".clock");

function runClock(){
  var time = new Date();
  
  var hrs = time.getHours();
  var min = time.getMinutes();
  var sec = time.getSeconds();
  var txt="AM";
  if(hrs>12){
    hrs-=12;
    txt="PM";
  }
  else
  if(hrs==0){
    hrs=12;
    txt="AM"
  }
  hrs=hrs<10 ? "0" +hrs:hrs;
  min=min<10 ? "0" +min:min;
  sec=sec<10 ? "0" +sec:sec;
  
clock.innerHTML=(`${hrs} : ${min} : ${sec} : ${txt}`);

}
setInterval(runClock,1000);
runClock();

/*
const clock=document.querySelector('.clock');

function runClock(){

  let time=new Date();

  const hrs=time.getHours();
  const min=time.getMinutes();
  const sec=time.getSeconds();
  const txt="AM";
  if(hrs>12){
    hrs-=12;
    txt="PM";
  } 
  else
  if(hrs==0){
    hrs=12;
    txt="Am";
  };

  hrs=hrs<10 ? "0" +hrs:hrs;
  min=min<10 ? "0" +min:min;
  sec=sec<10 ? "0" +sec:sec;

  clock.innerHTML=(`${hrs} : ${min} : ${sec} : ${txt}`);
}
setInterval(runClock,1000);
runClock();
*/