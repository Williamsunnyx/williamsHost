function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openNav").style.display="none"
    

}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openNav").style.display="block"
  document.getElementById("myDropdown").style.display="block"
    

}

function removeNav(){
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById("openNav").style.display="block"
    
}

   window.addEventListener("scroll", function(){
       var header = document.querySelector("header");
       var up = this.document.getElementById("goup");
       header.classList.toggle("sticky", window.scrollY > 100);
       if ("sticky", window.scrollY > 100)
       this.document.getElementById("dropDown").style.display="block"
      
       else{
       this.document.getElementById("dropDown").style.display="none"
        
       }
  
        

       
       up.classList.toggle("goup",this.window.scrollY > 900);
       if ("goup",this.window.scrollY > 900)
       document.getElementById("up").style.display="block"
       
       else{
       document.getElementById("up").style.display="none"

       }

       })





       
       var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// /* When the user clicks on the button,
function showdropdown(){
  document.getElementById("myDropdown").style.display="block"
}
function closedrop(){
  document.getElementById("myDropdown").style.display="none"

}

