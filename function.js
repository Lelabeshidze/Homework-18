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

//   დავალევა2

  let slideIndex = 1;
  let millis = 1000;
  let interval;
  
  startSlides();
  
  function startSlides(){
    pauseSlides();
    nextSlide();
    interval = setInterval(nextSlide, millis);
  }


  function resumeSlides() {
    nextSlide();
  }

  function pauseSlides() {
    clearInterval(interval);
  }

  function nextSlide() {
    showSlide();
    slideIndex++;
  }

  function plusSlides(n) {
    clearInterval(interval);
    slideIndex += n;
    nextSlide();
    interval = setInterval(nextSlide, millis);
  }

  function currentSlide(n) {
    clearInterval(interval);
    slideIndex = n + 1;
    nextSlide();
    interval = setInterval(nextSlide, millis);
  }

  function showSlide() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    if (slideIndex < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }