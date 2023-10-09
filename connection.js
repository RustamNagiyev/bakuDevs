const menuButton = document.querySelector('.menubtn');
const menu = document.getElementById('menu');
const closeButton = document.querySelector('.close-btn');

menuButton.addEventListener('click', function() {
  menu.style.display = 'block';
  menu.classList.add('slide-in');
});

closeButton.addEventListener('click', function() {
  menu.classList.add('slide-out');

  setTimeout(function() {
    menu.style.display = 'none';
    menu.classList.remove('slide-out');
  }, 500);
});