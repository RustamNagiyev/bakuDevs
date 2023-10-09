const menuButton = document.querySelector('.menubtn');
const menu = document.getElementById('menu');
const closeButton = document.querySelector('.close-btn');
//filter bolumu 
const allButton = document.querySelector('.all');
const frontendButton = document.querySelector('.frontend');
const backendButton = document.querySelector('.backend');
const uiuxButton = document.querySelector('.uiux');
const divcard = document.querySelector('.carts');






// Favori kartları depolamak için boş bir dizi tanımlıyoruz
let favorites = [];

// Favori kartları local storage'dan alıyoruz (eğer varsa)
if (localStorage.getItem('favorites')) {
  favorites = JSON.parse(localStorage.getItem('favorites'));
}

fetch('https://baku-devs-data-json-server.vercel.app/carts')
  .then(response => response.json())
  .then(responseData => {
    const data = responseData; // Verileri diziye atıyoruz

    // Tüm kartları oluşturan fonksiyonu tanımlıyoruz
    const createCards = (filteredData) => {
      divcard.innerHTML = ''; // Önceki kartları temizliyoruz

      filteredData.forEach(picture => {
        const card = document.createElement('div');
        card.classList.add('card');
        
        const cardContent = `
          <div id="${picture.id}">
            <img class='card-img' src="${picture.url}" alt="card">
          </div>
          <div class="container4">
            <div class="divcard">
              <p class="p">${picture.ad}</p>
            </div>
            <div class="flexable">
              <img class="playicon" src="./pictures/playicon1.svg" alt="icon">
              <p class="lesson">${picture.ders}</p>
            </div>
          </div>
          <hr>
          <div class="flexable2">
            <div class="p2">
              ${picture.text}
            </div>
            <div class="playicon2">
              <img src="./pictures/playicon2.svg" alt="icon">
            </div>
          </div>
          <button class="favorite-button" data-id="${picture.id}">&#9825;</button>
        `;
        
        card.innerHTML = cardContent;

        card.addEventListener('click', (e) => {
          // if (e.target.nodeName === 'BUTTON'){
            
          // //   const id = event.target.getAttribute('data-id');
          // // addFavorite(id);
          // }
         // Kart ID'sine göre yönlendirme işlemlerini burada gerçekleştirin
          if (picture.id === 1 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
         
          // Diğer kartlara tıklama durumlarını buraya ekleyebilirsiniz
          else if (picture.id === 2 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 3 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 4 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 5 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 6 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 7 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 8 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 9 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 10 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 11 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
          else if (picture.id === 12 & e.target.nodeName !== 'BUTTON') {
            window.location.href = './android.html';
          }
        });

        // Favori butonuna tıklama olayını ekliyoruz
        const favoriteButton = card.querySelector('.favorite-button');
        favoriteButton.addEventListener('click', (event) => {
          // const id = event.target.getAttribute('data-id');
          const id = event.target.getAttribute('data-id');
          addFavorite(id);
          console.log(id);


        });

        divcard.appendChild(card);
      });
    };






    const addFavorite = (id) => {
      const favoriteButton = document.querySelector(`.favorite-button[data-id="${id}"]`);
    
      if (favorites.includes(id)) {
        favorites = favorites.filter(favorite => favorite !== id);
        favoriteButton.classList.remove('active');
      } else {
        favorites.push(id);
        favoriteButton.classList.add('active');
      }
    
      localStorage.setItem('favorites', JSON.stringify(favorites));
    };
   

    // Tüm kartları oluşturan fonksiyonu çağırıyoruz
    createCards(data);
  

    // Tüm düğmelerin tıklama olaylarını dinleyen fonksiyonu tanımlıyoruz
    const addClickListeners = () => {
      allButton.addEventListener('click', () => {
        createCards(data); // Tüm verileri kullanarak kartları oluşturuyoruz
      });

      frontendButton.addEventListener('click', () => {
        const filteredData = responseData.filter(picture => picture.ad === "frontend");
        createCards(filteredData);
      });
    
      backendButton.addEventListener('click', () => {
        const filteredData = responseData.filter(picture => picture.ad === "backend");
        createCards(filteredData);
      });
    
      uiuxButton.addEventListener('click', () => {
        const filteredData = responseData.filter(picture => picture.ad === "ui/ux");
        createCards(filteredData);
      });
    };

    addClickListeners(); // Düğmelere tıklama olaylarını ekliyoruz
  })
  .catch(error => {
    console.error('Hata:', error);
  });
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