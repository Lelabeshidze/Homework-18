// დავალება1
function startTime() {
    const today = new Date();
    let h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    let session = "AM";
    if(h == 0){
        h= 12;
    }
    if(h > 12){
        h = h - 12;
        session = "PM";
     }
    
    document.querySelector(".clock").innerHTML = h + ":" + m + ":" + s + " "+ session;
    const t = setTimeout(function(){ startTime() }, 500);
  }
  
  
  startTime()