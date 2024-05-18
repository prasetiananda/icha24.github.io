let slideIndex = 0;
let slides = document.querySelectorAll(".banner img");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].classList.add('active');
    setTimeout(showSlides, 2000); // Change image every 4 seconds
}

showSlides();

function openModal(element) {
    document.getElementById("myModal").style.display = "flex";
    document.getElementById("imgModal").src = element.src;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}


// Carousel Functionality
const carousels = document.querySelectorAll('.carousel');
carousels.forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel-button-right');
    const prevButton = carousel.querySelector('.carousel-button-left');
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentSlide.classList.remove('current-slide');
        targetSlide.classList.add('current-slide');
    };

    prevButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const prevSlide = currentSlide.previousElementSibling;
        if (prevSlide) {
            moveToSlide(track, currentSlide, prevSlide);
        }
    });

    nextButton.addEventListener('click', e => {
        const currentSlide = track.querySelector('.current-slide');
        const nextSlide = currentSlide.nextElementSibling;
        if (nextSlide) {
            moveToSlide(track, currentSlide, nextSlide);
        }
    });

    slides[0].classList.add('current-slide');
});
