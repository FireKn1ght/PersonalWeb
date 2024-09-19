let nav = document.querySelector(".fixed-menu");
nav.addEventListener('click', function(event){
  let clickTarget = event.target;
  let activeBtn = document.querySelector('.active');
  let mobileMenu = document.querySelector('.mobile-menu');

  if (clickTarget.classList.contains('nav-link')) {
      clickTarget.classList.add('active');
      if (activeBtn && activeBtn !== clickTarget) {
          activeBtn.classList.remove('active');
      }

      if (!mobileMenu.classList.contains('hide')) {
          mobileMenu.classList.add('hide');
      }
  }

  let body = document.querySelector('body');
  if (!body.classList.contains('off-scroll') && mobileMenu.classList.contains('hide')) {
      body.classList.add('off-scroll');
  } else {
      body.classList.remove('off-scroll');
  }
});

let classLink = '.main-link';
window.onscroll = function() {
  let h = document.documentElement.clientHeight;
  if (window.scrollY >= h*3.5) {
    classLink = '.comments-link';
  } else if (window.scrollY >= h*2.5) {
    classLink = '.works-link';
  } else if (window.scrollY >= h*1.5) {
    classLink = '.skills-link';
  } else if (window.scrollY >= h) {
    classLink = '.about-link';
  } else {
    classLink = '.main-link';
  }
  
  let activeBtn = document.querySelector('.active');
  let newActiveBtn = document.querySelector(classLink);
  if (newActiveBtn && !newActiveBtn.classList.contains('active')) {
    newActiveBtn.classList.add('active');
    if (activeBtn) {
      activeBtn.classList.remove('active');
    }
  }
};

document.querySelector('.mobile-button').addEventListener('click', function(event) {
  let mobileMenu = document.querySelector('.mobile-menu');
  mobileMenu.classList.toggle('hide');

  let body = document.querySelector('body');
  if (!mobileMenu.classList.contains('hide')) {
    body.classList.add('off-scroll');
  } else {
    body.classList.remove('off-scroll');
  }
});