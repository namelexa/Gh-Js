let slides = document.querySelectorAll('#slider .slide');
let currentSlide = 0;
let previous = document.getElementById('prev');
let next = document.getElementById('next');
let startClientX = 0;
function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};

function goToSlide(n) {
    slides[currentSlide].className = 'slide';
    if (n < 0) {
        currentSlide = slides.length + n;
    } else if (n === slides.length) {
        currentSlide = slides.length - n;
    } else {
        currentSlide = n;
    }
    slides[currentSlide].className = 'slide active';
}

document.addEventListener("dragstart", function (event) {
    startClientX = event.clientX;
});

document.addEventListener("dragend", function (event) {
    let deltaSlide = event.clientX - startClientX;

    if (deltaSlide < 0) {
        previousSlide();
        event.preventDefault();
    } else {
        nextSlide();
        event.preventDefault();
    }
});

document.addEventListener("touchstart", function (event) {
    startClientX = event.targetTouches[0].clientX;
});

document.addEventListener("touchend", function (event) {
    event.preventDefault();
    let deltaSlide = event.changedTouches[0].clientX - startClientX;
    if (deltaSlide === 0) {
        return;
    }
    if (deltaSlide < 0) {
        previousSlide();
        event.preventDefault();
    } else {
        nextSlide();
        event.preventDefault();
    }
});