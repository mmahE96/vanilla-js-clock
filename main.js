function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 

    const appendHours = document.getElementById("hours")
    const appendMins = document.getElementById("min")
    const appendSecs = document.getElementById("sec")
    
    appendHours.innerHTML=h
    appendMins.innerHTML=m
    appendSecs.innerHTML=s

    setTimeout(showTime, 1000);
    
}

showTime();