'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  
  let startTime;
  let timeoutId;
  let elapsedTime = 0;
  
  function countup() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    const h = String(d.getUTCHours());
    const m = String(d.getMinutes());
    const s = String(d.getSeconds());
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${h}:${m}:${s}:${ms}`;
    
    timeoutId = setTimeout(() => {
      countup();
    }, 10);
  }
  
 function setBttonStateInitial() {
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = true;
 }
 
 function setBttonStateRunning() {
   start.disabled = true;
   stop.disabled = false;
   reset.disabled = true;
 }
 
 function setBttonStateStoped() {
   start.disabled = false;
   stop.disabled = true;
   reset.disabled = false;
 }
 
 setBttonStateInitial();
  
  start.addEventListener('mousedown', () => {
    setBttonStateRunning();
    startTime = Date.now();
    countup();
  });
  
  stop.addEventListener('mousedown', () => {
    setBttonStateStoped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  });
    
  reset.addEventListener('mousedown', () => {
    setBttonStateInitial();
    timer.textContent = '0:0:0:000';
    elapsedTime = 0;
  });
    
}
