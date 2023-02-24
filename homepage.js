let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topnav").style.top = "0";
  } else {
    document.getElementById("topnav").style.top = "-50px";
  }
}

const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    localStorage.setItem('dark', this.checked);
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundImage = "url('background.jpg')";
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        body.style.background = "url('/gallery/lmback.jpg')";
        body.style.backgroundRepeat = "fixed";
        body.style.color = 'blue';
        body.style.transition = '2s';
    }
});