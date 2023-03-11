let leftCtrl = document.querySelector('.slider_btn.prev'),
    slides = document.querySelectorAll('.container_carousel'),
    cards = document.querySelectorAll('.container_carousel.active .card_animal'),
    objCards = {
    0: `<img class="card_image" src="img/pandas.png" alt="pandas">
    <p class="animal_card_btn">Giant pandas</p>
    <p class="animal_paragraph">Native to Southwest China</p>
    <img src="icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" class="card_icon_bamboo">`,
    1: `<img class="card_image" src="img/eagles.png" alt="eagles">
    <p class="animal_card_btn">eagles</p>
    <p class="animal_paragraph">Native to South America</p>
    <img src="icons/meet-fish_icon.svg" alt="meet-fish_icon" class="card_icon_meet">`,
    2: `<img class="card_image" src="img/gorillas.png" alt="gorillas">
    <p class="animal_card_btn">gorillas</p>
    <p class="animal_paragraph">Native to Congo</p>
    <img src="icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" class="card_icon_bamboo">`,
    3: `<img class="card_image" src="img/alligators.png" alt="alligators">
    <p class="animal_card_btn">Alligators</p>
    <p class="animal_paragraph">Native to Southeastern United States</p>
    <img src="icons/meet-fish_icon.svg" alt="meet-fish_icon" class="card_icon_meet">`,
    4: `<img class="card_image" src="img/two-toed_sloth.png" alt="two-toed sloth">
    <p class="animal_card_btn">two-toed sloth</p>
    <p class="animal_paragraph">Mesoamerica, South America</p>
    <img src="icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" class="card_icon_bamboo">`,
    5: `<img class="card_image" src="img/cheetahs.png" alt="cheetahs">
    <p class="animal_card_btn">cheetahs</p>
    <p class="animal_paragraph">Native to Africa</p>
    <img src="icons/meet-fish_icon.svg" alt="meet-fish_icon" class="card_icon_meet">`,
    6: `<img class="card_image" src="img/penguins.png" alt="penguins">
    <p class="animal_card_btn">penguins</p>
    <p class="animal_paragraph">Native to Antarctica</p>
    <img src="icons/meet-fish_icon.svg" alt="meet-fish_icon" class="card_icon_meet">`,
    7: `<img class="card_image" src="img/gorillas2.png" alt="gorillas">
    <p class="animal_card_btn">gorillas</p>
    <p class="animal_paragraph">Native to Congo</p>
    <img src="icons/banana-bamboo_icon.svg" alt="banana-bamboo_icon" class="card_icon_bamboo">`
},
    placeInArray = function(){     //Функция, создаёт массив рандомных чисел(блоков), которые будут на странице прогружаться
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7],
        newArr = [],
        createRandomIndex = function(){
            return Math.floor(Math.random() * (numbers.length)); // generate random index in the current range
        },
        loopArray = function(){
            for (let i = 0; i < 10; i++){
                newArr.push(createRandomIndex());
            }
            newArr = Array.from(new Set(newArr));    //убирает повторяющиеся значения
        };

    while (newArr.length !== 8) {loopArray();}

    return newArr;
},
    mixCarousel = function() {
    let arrNumbers = placeInArray();
        for (let i = 0, j = 0; i < 8, j < 24; j++, i++){
            cards[j].innerHTML = objCards[arrNumbers[i]];
            if (i == 7) {
                i = 0;
            }
        }
};

var slider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 1,
    autoplay: false,
    nav: false,
    controls: false,
    loop: true,
    rewind: true
  });

  document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
    mixCarousel();
  });

  document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
    mixCarousel();
  });

  var slider2 = tns({
    container: '.my-slider2',
    items: 3,
    slideBy: 1,
    autoplay: false,
    nav: false,
    controls: false,
    loop: true,
    rewind: true,
    mouseDrag: true,
    responsive: {
        1001: {
            items: 4
        }
    }
  });

  let inputCtrl = document.querySelector('.scroll-line_inside');

  inputCtrl.addEventListener('input', function () {
        slider2.goTo(inputCtrl.value);
  });
