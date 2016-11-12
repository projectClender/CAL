var open_window=document.getElementsByClassName("add-term-button")[0];
open_window.onclick=function(){open_new_schedule()
    };

function open_new_schedule(){
    window.close("./home.html");
    window.open("./schedule.html");
    
    
}