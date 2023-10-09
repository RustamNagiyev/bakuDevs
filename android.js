const flexable2 = document.querySelector('.flexable2');

fetch('https://baku-devs-data-json-server.vercel.app/page')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(({ url2, header1, text1, url1, id }) => {
      flexable2.innerHTML += `
        <div class="change" id="${id}">
          <div class="flexableh">
            <img class="lessonimg" src="${url1}" alt="lessonimage">
            <h1 class="lessonhead">${header1}</h1>
          </div> 
          <p class="lorem">${text1}</p>      
          <h1 class="videolesson">Videodərs</h1>    
          <iframe class="video" width="560" height="315" src="${url2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        
        
      `;
    });
    console.log(data);
  })
  .catch(error => {
    console.error('Hata:', error);
  });


const divcard = document.querySelector('.carts');

fetch('https://baku-devs-data-json-server.vercel.app/carts')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const filteredData = data.filter(picture => picture.ad === "backend");
    const firstFourCards = filteredData.slice(0, 4);
    firstFourCards.forEach(picture => {
      divcard.innerHTML += `
        <div class="card">
          <div id="${picture.id}">
            <img class='card-img' src="${picture.url}" alt="">
          </div>
          <div class="container4">
            <div class="divcard">
              <p class="p">${picture.ad}</p>
            </div>
            <div class="flexableone">
              <img class="playicon" src="./pictures/playicon1.svg" alt="icon">
              <p class="lesson">${picture.ders}</p>
            </div>
          </div>
          <hr>
          <div class="flexabletwo">
            <div class="p2">
              ${picture.text}
            </div>
            <div class="playicon2">
              <img src="./pictures/playicon2.svg" alt="icon">
            </div>
          </div>
        </div>
      `;
    });
    console.log(filteredData);
  })
  .catch(error => {
    console.error('Hata:', error);
  });


  function showCard(cardId) {
    var cards = document.getElementsByClassName('change');
    for (var i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none';
    }
    var card = document.getElementById(cardId);
    if (card) {
        card.style.display = 'block';
    }
}
function changeButtonColor(button) {
    var buttons = document.getElementsByClassName('lessons');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('button-selected');
    }
    button.classList.add('button-selected');
}
window.onload = function() {
    var defaultCard = document.getElementById('change1');
    if (defaultCard) {
        defaultCard.style.display = 'block';
    }
};
function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}