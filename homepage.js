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
var element = document.getElementsByClassName('topnav');
var element1 = document.getElementsByClassName('fakeimg');
var element2 = document.getElementsByClassName('card');
var element3 = document.getElementsByClassName('trailer');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    localStorage.setItem('dark', this.checked);
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.backgroundImage = "url('background.jpg')";
        body.style.color = 'black';
        body.style.transition = '2s';
        element[0].classList.remove("newtopnav");

        element1[0].classList.remove("newfakeimg");
        element1[1].classList.remove("newfakeimg");

        element2[0].classList.remove("newcard");
        element2[1].classList.remove("newcard");
        element2[2].classList.remove("newcard");

        element3[0].classList.remove("newtrailer");
        element3[1].classList.remove("newtrailer");
        element3[2].classList.remove("newtrailer");

        element[0].classList.remove("newtopnav2");

        element1[0].classList.remove("newfakeimg2");
        element1[1].classList.remove("newfakeimg2");

        element2[0].classList.remove("newcard2");
        element2[1].classList.remove("newcard2");
        element2[2].classList.remove("newcard2");

        element3[0].classList.remove("newtrailer2");
        element3[1].classList.remove("newtrailer2");
        element3[2].classList.remove("newtrailer2");
    }else{
        body.style.background = "url('/gallery/lmback.jpg')";
        body.style.backgroundRepeat = "fixed";
        body.style.color = 'purple';
        body.style.transition = '2s';
        element[0].classList.add("newtopnav");

        element1[0].classList.add("newfakeimg");
        element1[1].classList.add("newfakeimg");

        element2[0].classList.add("newcard");
        element2[1].classList.add("newcard");
        element2[2].classList.add("newcard");
        
        element3[0].classList.add("newtrailer");
        element3[1].classList.add("newtrailer");
        element3[2].classList.add("newtrailer");

        element[0].classList.remove("newtopnav2");

        element1[0].classList.remove("newfakeimg2");
        element1[1].classList.remove("newfakeimg2");

        element2[0].classList.remove("newcard2");
        element2[1].classList.remove("newcard2");
        element2[2].classList.remove("newcard2");

        element3[0].classList.remove("newtrailer2");
        element3[1].classList.remove("newtrailer2");
        element3[2].classList.remove("newtrailer2");
    }
});

/*###################################*/
const toggle2 = document.getElementById('toggleDark2');

toggle2.addEventListener('click', function(){
  this.classList.toggle('bi-moon');
  localStorage.setItem('dark', this.checked);
  if(this.classList.toggle('bi-brightness-high-fill')){
      body.style.backgroundImage = "url('background.jpg')";
      body.style.color = 'black';
      body.style.transition = '2s';
      element[0].classList.remove("newtopnav2");

      element1[0].classList.remove("newfakeimg2");
      element1[1].classList.remove("newfakeimg2");

      element2[0].classList.remove("newcard2");
      element2[1].classList.remove("newcard2");
      element2[2].classList.remove("newcard2");

      element3[0].classList.remove("newtrailer2");
      element3[1].classList.remove("newtrailer2");
      element3[2].classList.remove("newtrailer2");

      element[0].classList.remove("newtopnav");

      element1[0].classList.remove("newfakeimg");
      element1[1].classList.remove("newfakeimg");

      element2[0].classList.remove("newcard");
      element2[1].classList.remove("newcard");
      element2[2].classList.remove("newcard");

      element3[0].classList.remove("newtrailer");
      element3[1].classList.remove("newtrailer");
      element3[2].classList.remove("newtrailer");
  }else{
      body.style.background = "url('/gallery/theme2.avif')";
      body.style.backgroundRepeat = "fixed";
      body.style.color = 'blue';
      body.style.transition = '2s';
      element[0].classList.add("newtopnav2");

      element1[0].classList.add("newfakeimg2");
      element1[1].classList.add("newfakeimg2");

      element2[0].classList.add("newcard2");
      element2[1].classList.add("newcard2");
      element2[2].classList.add("newcard2");
      
      element3[0].classList.add("newtrailer2");
      element3[1].classList.add("newtrailer2");
      element3[2].classList.add("newtrailer2");

      element[0].classList.remove("newtopnav");

      element1[0].classList.remove("newfakeimg");
      element1[1].classList.remove("newfakeimg");

      element2[0].classList.remove("newcard");
      element2[1].classList.remove("newcard");
      element2[2].classList.remove("newcard");

      element3[0].classList.remove("newtrailer");
      element3[1].classList.remove("newtrailer");
      element3[2].classList.remove("newtrailer");
  }
});