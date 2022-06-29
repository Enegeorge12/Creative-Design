
// Hamburger menu button

function openMenu() {
    let nav = document.querySelector(".navbar");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.justifyContent="center"
    }
  }

  
//   sticky navbar

  window.onscroll = function() {myFunction()};

 let navbar = document.querySelector(".navbar");
 let sticky = navbar.offsetTop;

 function myFunction() {
   if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//   slideshow-container

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
  setTimeout(showSlides, 2000);
}


// open section main




function openArticle() {
    let nav = document.querySelector(".article");
    let section=document.querySelector(".section")
    let icon = document.querySelector(".fa-caret-down");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      section.classList.remove("color-section")
      icon.classList.remove("fa-rotate");
     
    } else {
      nav.style.display = "flex";
      section.classList.add("color-section")
      icon.classList.add("fa-rotate");

    }
  }
  function openArt() {
    let nav = document.querySelector(".article-main");
    let section=document.querySelector(".section-article")
    let icon = document.querySelector(".faIcon");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      section.classList.remove("color-section")
      icon.classList.remove("fa-rotate");
     
    } else {
      nav.style.display = "flex";
      section.classList.add("color-section")
      icon.classList.add("fa-rotate");

    }
  }
  function open_Article() {
    let nav = document.querySelector(".article_main");
    let section=document.querySelector(".section_article")
    let icon = document.querySelector(".fa-faIcon");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
      section.classList.remove("color-section")
      icon.classList.remove("fa-rotate");
     
    } else {
      nav.style.display = "flex";
      section.classList.add("color-section")
      icon.classList.add("fa-rotate");

    }
  }
 