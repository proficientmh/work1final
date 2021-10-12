/*slider js*/

/*image*/
const carouselslide = document.querySelector('.body4 .carousel-slide');
const carouselImages = document.querySelectorAll('.body4 .carousel-slide img');

//button
const prevBtn = document.querySelector('.body4 #prevBtn');
const nextBtn = document.querySelector('.body4 #nextBtn');

//counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//button listeners

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return; /*to make loop*/
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    resetTimer();

});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return; /*to make loop*/
    carouselslide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    resetTimer();
});

//make loop
carouselslide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClonei') {
        carouselslide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});

carouselslide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'firstClonei') {
        carouselslide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselslide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});




/*text*/
const carouselslidetext = document.querySelector('.body4 .carousel-slide-text');
const carouselText = document.querySelectorAll('.body4 .carousel-slide-text .itemm');

//counter
let countert = 1;
const sizet = carouselText[0].clientWidth;

carouselslidetext.style.transform = 'translateX(' + (-sizet * countert) + 'px)';

//button listeners

nextBtn.addEventListener('click', () => {
    if (countert >= carouselText.length - 1) return; /*to make loop*/
    carouselslidetext.style.transition = "transform 0.9s ease-in-out";
    countert++;
    carouselslidetext.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
    resetTimer();

});

prevBtn.addEventListener('click', () => {
    if (countert <= 0) return; /*to make loop*/
    carouselslidetext.style.transition = "transform 0.9s ease-in-out";
    countert--;
    carouselslidetext.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
    resetTimer();
});

//make loop
carouselslidetext.addEventListener('transitionend', () => {
    if (carouselText[countert].id === 'lastClonet') {
        carouselslidetext.style.transition = "none";
        countert = carouselText.length - 2;
        carouselslidetext.style.transform = 'translateX(' + (-sizet * countert) + 'px)';
    }
});

carouselslidetext.addEventListener('transitionend', () => {
    if (carouselText[countert].id === 'firstClonet') {
        carouselslidetext.style.transition = "none";
        countert = carouselText.length - countert;
        carouselslidetext.style.transform = 'translateX(' + (-sizet * countert) + 'px)';

    }
});



/*num*/
const carouselslidnum = document.querySelector('.body4 .carousel-slide-num');
const carouselNum = document.querySelectorAll('.body4 .carousel-slide-num .numm');

//counter
let countern = 1;
const sizen = carouselNum[0].clientWidth;

carouselslidnum.style.transform = 'translateX(' + (-sizen * countern) + 'px)';

//button listeners

nextBtn.addEventListener('click', () => {
    if (countern >= carouselNum.length - 1) return; /*to make loop*/
    carouselslidnum.style.transition = "transform 0.01s ease-in-out";
    countern++;
    carouselslidnum.style.transform = 'translateX(' + (-sizen * countern) + 'px)';
    resetTimer();

});

prevBtn.addEventListener('click', () => {
    if (countern <= 0) return; /*to make loop*/
    carouselslidnum.style.transition = "transform 0.01s ease-in-out";
    countern--;
    carouselslidnum.style.transform = 'translateX(' + (-sizen * countern) + 'px)';
    resetTimer();
});

//make loop
carouselslidnum.addEventListener('transitionend', () => {
    if (carouselNum[countern].id === 'lastClonen') {
        carouselslidnum.style.transition = "none";
        countern = carouselNum.length - 2;
        carouselslidnum.style.transform = 'translateX(' + (-sizen * countern) + 'px)';
    }
});

carouselslidnum.addEventListener('transitionend', () => {
    if (carouselNum[countern].id === 'firstClonen') {
        carouselslidnum.style.transition = "none";
        countern = carouselNum.length - countern;
        carouselslidnum.style.transform = 'translateX(' + (-sizen * countern) + 'px)';

    }
});



//auto move
var button = document.getElementById('nextBtn'); //get the click button to auto click

function resetTimer() {
    // when click to indicator or controls button
    // stop timer
    clearInterval(timer);
    // then started again timer
    timer = setInterval(autoPlay, 4000);
}
// auto click
function autoPlay() {
    button.click()
}

let timer = setInterval(autoPlay, 4000);


/*slide ended*/
$(document).ready(function() {
    $('#progress').removeClass('running');
    $('#progress').removeClass('running').delay(10).queue(function(next) {
        $(this).addClass('running');
        next();
    });
    return false;

});