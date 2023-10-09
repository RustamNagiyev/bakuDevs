const forms = document.querySelector(".forms"),
pwShowHide = document.querySelectorAll(".eye-icon"),
links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
eyeIcon.addEventListener("click", () => {
  let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
  
  pwFields.forEach(password => {
      if(password.type === "password"){
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
      }
      password.type = "password";
      eyeIcon.classList.replace("bx-show", "bx-hide");
  })
  
})
})      

links.forEach(link => {
link.addEventListener("click", e => {
 e.preventDefault(); //preventing form submit
 forms.classList.toggle("show-signup");
})
})


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