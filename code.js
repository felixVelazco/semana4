
var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {
  
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    var des = this.parentElement;
    
    
  

    this.classList.toggle("active");
    des.classList.toggle("mostrar"); 
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });

}