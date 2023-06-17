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

function showdropdownsmall(){
  document.getElementById("small-dropdown").style.display="block"
  
}


function turn(){
var switchButton = document.getElementById("switch")
var change = document.getElementById("bdy");
var links = document.querySelectorAll('#bdy a,#bdy b,#bdy span,button,.numbers');

switchButton.addEventListener('click', function(){
  if (change.style.backgroundColor == 'white') {
    change.style.backgroundColor = '';
    document.body.style.color="white"

    for (var i = 0; i < links.length; i++){
      links[i].style.color = '';
    }
  }else {
    change.style.backgroundColor = 'white';
    for (var i =0; i < links.length; i++){
      links[i].style.color ='black';
      document.body.style.color="black"
      
      
    }
  }
});

}


function gosearch(){
  
var searchInput = document.getElementById('searchInput');
var content = document.getElementById('bdy');

searchInput.addEventListener('input', function(){
  var searchValue = searchInput.ariaValueMax.trim();
  removeHighlight();

  if (searchValue.length > 0) {
    var similarLetters = findsimilarLetter(searchValue);
    highlightLetters(similarLetters);
  }
});

function removeHighlight() {
  var highlightedElement = content.querySelectorAll('.highlight');
  highlightedElement.forEach(function(element) {
 element.classList.remove('highlight');

  });
}

function findsimilarLetter(searchValue) {
  var allText = content.textContent;
  var similarLetters = [];

  for (var i =0; i < allText.length; i++) {
    if (searchValue.includes(allText[i])){
      similarLetters.push(allText[i]);

    }
  }

  return similarLetters;
}

function highlightLetters(letters) {
  for (var i =0; i < letters.length; i++){
    var regex = new RegExp(letters[i], 'gi');
    content.innerHTML = content.innerHTML.replace(regex, function(match){
      return '<span class ="highlight">' + match + '<span';
    });
  }
}

}


// FOR DATE
function displayDate() {
  var currentDate= new Date();
  
  var day= currentDate.getDate();
  var month= currentDate.getMonth() + 1; // months are zero based
  var year= currentDate.getFullYear();

  var dateString= day + "/" + month + "/" + year

  document.getElementById("date").innerHTML= dateString;
}

function checkWeekend() {
  var currentDate = new Date ();
  var dayOfWeek = currentDate.getDate();
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    document.getElementById("weekend").innerHTML = "it's the weekend!";

  }else{

    document.getElementById("weekend").innerHTML = "it's a weekday"
  }
}

// DISPLAY THE DATE AND CHECK IF ITS THE WEEKEND IMMEDIATELY

displayDate();
checkWeekend();