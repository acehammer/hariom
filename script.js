const toggleButton = document.getElementById('icon');
const toggleIcon = document.getElementById('toggle-icon');
const body = document.body;

toggleButton.addEventListener('click', function() {
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    toggleIcon.src = "images/moonbr.png";
  } else {
    body.classList.add('dark-theme');
    toggleIcon.src = "images/sunbr.png";
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const logo = document.querySelector('.logo');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;

        if (scrollTop > header.clientHeight) {
            logo.classList.add('scroll-logo');
        } else {
            logo.classList.remove('scroll-logo');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('contactBtn');
    const contactIcons = document.querySelector('.contact-icons');

    contactBtn.addEventListener('click', function() {
        contactIcons.classList.toggle('show');
    });
});