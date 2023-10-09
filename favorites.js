const menuButton = document.querySelector('.menubtn');
const menu = document.getElementById('menu');
const closeButton = document.querySelector('.close-btn');


// favorites.js

let favorites = [];

if (localStorage.getItem('favorites')) {
  favorites = JSON.parse(localStorage.getItem('favorites'));
}

const removeFavorite = (favoriteId) => {
  const index = favorites.indexOf(favoriteId);
  if (index > -1) {
    favorites.splice(index, 1);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));

  const favoriteCard = document.getElementById(favoriteId);
  if (favoriteCard) {
    favoriteCard.parentNode.remove(); // Favori kartının tüm elemanlarını kapsayan üst öğeyi kaldırır
  }
};

const displayFavorites = () => {
  const favoritesContainer = document.querySelector('.favorites-container');

  favoritesContainer.innerHTML = '';

  favorites.forEach((favoriteId) => {
    fetch(`https://baku-devs-data-json-server.vercel.app/carts/${favoriteId}`)
      .then((response) => response.json())
      .then((favoriteData) => {
        const favoriteCard = document.createElement('div');
        favoriteCard.classList.add('card');

        const cardContent = `
          <div id="${favoriteData.id}">
            <img class='card-img' src="${favoriteData.url}" alt="card">
          </div>
          <div class="container4">
            <div class="divcard">
              <p class="p">${favoriteData.ad}</p>
            </div>
            <div class="flexable">
              <img class="playicon" src="./pictures/playicon1.svg" alt="icon">
              <p class="lesson">${favoriteData.ders}</p>
            </div>
          </div>
          <hr>
          <div class="flexable2">
            <div class="p2">
              ${favoriteData.text}
            </div>
            <div class="playicon2">
              <img src="./pictures/playicon2.svg" alt="icon">
            </div>
          </div>
          <button class="remove-btn" onclick="removeFavorite('${favoriteData.id}')">Remove</button>
        `;

        favoriteCard.innerHTML = cardContent;

        favoritesContainer.appendChild(favoriteCard);
      });
  });
};

displayFavorites();


//menu


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