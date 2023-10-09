const allButton = document.querySelector('.all');
const frontendButton = document.querySelector('.frontend');
const backendButton = document.querySelector('.backend');
const uiuxButton = document.querySelector('.uiux');
const divcard = document.querySelector('.carts');
const allCoursesButton = document.querySelector('.allcourses');
let showAllCourses = false;
let data = [];

fetch('http://localhost:3000/carts')
  .then(response => response.json())
  .then(responseData => {
    data = responseData.slice(0, 8);

    const createCards = (filteredData) => {
      divcard.innerHTML = '';

      filteredData.forEach(picture => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardContent = `
          <div id="${picture.id}">
            <img class='card-img' src="${picture.url}" alt="">
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
        `;

      
        card.innerHTML = cardContent;

        card.addEventListener('click', () => {
          if (picture.id === 1) {
            window.location.href = './android.html';
          }
          // Diğer kartlara tıklama durumlarını buraya ekleyebilirsiniz
          else if (picture.id === 2) {
            window.location.href = './android.html';
          }
          else if (picture.id === 3) {
            window.location.href = './android.html';
          }
          else if (picture.id === 4) {
            window.location.href = './android.html';
          }
          else if (picture.id === 5) {
            window.location.href = './android.html';
          }
          else if (picture.id === 6) {
            window.location.href = './android.html';
          }
          else if (picture.id === 7) {
            window.location.href = './android.html';
          }
          else if (picture.id === 8) {
            window.location.href = './android.html';
          }
          else if (picture.id === 9) {
            window.location.href = './android.html';
          }
          else if (picture.id === 10) {
            window.location.href = './android.html';
          }
          else if (picture.id === 11) {
            window.location.href = './android.html';
          }
          else if (picture.id === 12) {
            window.location.href = './android.html';
          }
        });

        divcard.appendChild(card);
      });
    };

    const addClickListeners = () => {
      allButton.addEventListener('click', () => {
        const filteredData = showAllCourses ? data : responseData;
        createCards(filteredData);
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

    createCards(data);
    addClickListeners();

    allCoursesButton.addEventListener('click', function() {
      showAllCourses = !showAllCourses;
      const filteredData = showAllCourses ? data : responseData;
      createCards(filteredData);
    });
  })
  .catch(error => {
    console.error('Hata:', error);
  });


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