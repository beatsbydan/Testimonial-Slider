//What we need
const track = document.getElementById("carousel__track");
const slides = Array.from(track.children);
//
//buttons
const nextButton = document.getElementById("carousel__button--right");
const nextButton1 = document.getElementById("carousel__button--right-1");
const prevButton = document.getElementById("carousel__button--left");
const prevButton1 = document.getElementById("carousel__button--left-1");
//
//getting the slide width
const slideWidth = slides[0].getBoundingClientRect().width;
//
//Function to set slide position
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
//looping over the slides Array to set the position
slides.forEach(setSlidePosition);
//
//Function to move slides
const moveToExactSlide = (tracks, currentSlides, targetSlides) => {
    currentSlides.classList.remove('current-slide');
    targetSlides.classList.add('current-slide');
    tracks.style.transform = 'translateX(-' +targetSlides.style.left+ ')';
}
//nextButton
nextButton.addEventListener('click', e => {
    var currentSlide = track.querySelector(".current-slide");
    var nextSlide = currentSlide.nextElementSibling;
    
    //moving to next slide
    moveToExactSlide(track, currentSlide, nextSlide)
})
nextButton1.addEventListener('click', e => {
    var currentSlide = track.querySelector(".current-slide");
    var nextSlide = currentSlide.nextElementSibling;
    //Stop condition
    if(nextSlide === null){
        nextSlide = currentSlide;
    }

    //moving to next slide
    moveToExactSlide(track, currentSlide, nextSlide)
})

prevButton.addEventListener('click', e => {
    var currentSlide = track.querySelector(".current-slide")
    var prevSlide = currentSlide.previousElementSibling;
    //Stop condition
    if(prevSlide===null){
        prevSlide = currentSlide;
    }

    //moving to previous slide
    moveToExactSlide(track, currentSlide, prevSlide)
})
prevButton1.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide")
    const prevSlide = currentSlide.previousElementSibling;

    //moving to previous slide
    moveToExactSlide(track, currentSlide, prevSlide)
})