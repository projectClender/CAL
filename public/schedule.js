function makeVisble(){
  console.log(event.target);
 var backdrop=document.getElementById('modal-backdrop');
   backdrop.setAttribute("class","visble");
 var modal=document.getElementById('add-note-modal');
   modal.setAttribute("class","visble");
}

function makeHidden(){
 var backdropClose=document.getElementById('modal-backdrop');
 backdropClose.setAttribute("class","hidden");
 var modalClose=document.getElementById('add-note-modal');
 modalClose.setAttribute("class","hidden");

}

var add=document.getElementsByClassName('each_button')[0];
add.addEventListener("click", makeVisble);

var close=document.getElementsByClassName('modal-close-button');
close[0].addEventListener("click", makeHidden);
//close[0].addEventListener("click", resetInput);


var close=document.getElementsByClassName('modal-cancel-button');
close[0].addEventListener("click", makeHidden);
//close[0].addEventListener("click", resetInput);

var close=document.getElementsByClassName('modal-accept-button');
close[0].addEventListener("click", makeHidden);
