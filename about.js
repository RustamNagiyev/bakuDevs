const divcard2 = document.querySelector('.carts2')
fetch('http://localhost:3000/carts2')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(({background,ad2,text2,url}) => {
      // console.log(pictures);
      divcard2.innerHTML+= `
      <div class="card2">
      <div class="divcenter">
      <div class="divimg" style="background-color:${background}">
        <img src="${url}" alt="card">
      </div>
      </div>
      <p class="ph">${ad2}</p>
      <p class="ptext">${text2}</p>
    </div>
`
    });
    console.log(data)
  })
  .catch(error => {
    console.error('Hata:', error);
  });

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