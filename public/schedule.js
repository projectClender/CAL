var return_homepage=document.getElementById("logo");
return_homepage.onclick=function(){return_to_homepage()
    };

function return_to_homepage(){
    window.close("./schedule.html");
    window.open("./home.html");
    
    
}



var a= document.getElementsByClassName("dropdown-content")[0];
 console.log(a[0]);
var x=document.getElementsByClassName("dropdown");
a.addEventListener("mouseover",clear_content);
a.addEventListener("mouseout",recover_content);
//a.onmouseout=function(){recover_content(x)};
 //console.log(a[0]);
function clear_content(){
    	//var x=document.getElementsByClassName("dropdown");
	x[1].style.display='none';
   // a.onmouseout=function(){recover_content(x)};
    //console.log(x[1]);
};
function recover_content(){
    console.log(",,,");	
	x[1].style.display='inline-block';
    console.log(x[1]);
}