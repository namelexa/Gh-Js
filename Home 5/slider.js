let slides = document.querySelectorAll('#slider .slide');
let slideWidth = document.querySelector('.slider-wrapper').offsetWidth;
let activeSlide = 0;
let previous = document.getElementById('prev');
let next = document.getElementById('next');
let startClientX = 0;

if (slideWidth > 0) {
    setSlideWidth(slideWidth, slides);
    setSliderWidth(slideWidth, slides);
}

function nextSlide() {
    goToSlide(activeSlide + 1, slideWidth);
}

function previousSlide() {
    goToSlide(activeSlide - 1, slideWidth);
}

next.onclick = function () {
    nextSlide();
};
previous.onclick = function () {
    previousSlide();
};

function goToSlide(index, slideWidth) {
    // slides[currentSlide].className = 'slide';
    // if (n < 0) {
    //     currentSlide = slides.length + n;
    //     document.getElementById('slider').style.transform = `translate3d(${slideWidth*n}px, 0px, 0px)`;
    // } else if (n === slides.length) {
    //     currentSlide = slides.length - n;
    // } else {
    //     currentSlide = n;
    //     document.getElementById('slider').style.transform = `translate3d(${slideWidth*n}px, 0px, 0px)`;
    // }
    // slides[currentSlide].className = 'slide active';

    let x = 0;
    const mid = Math.round(slides.length / 2);

    if (activeSlide === index) {
        x = 0;
    } else if ((index > activeSlide && index < activeSlide + mid)
        || (index < activeSlide && index > activeSlide - mid)) {
        x = -(index - activeSlide) * slideWidth;
        activeSlide = index;
    } else if (activeSlide - mid < 0) {
        activeSlide = slides.length + index;
        x = -(slides.length - index + activeSlide) * slideWidth;
    } else if (activeSlide + mid > slides.length) {
        activeSlide = slides.length + index;
        x = (slides.length + index - activeSlide) * slideWidth;
    }

        document.getElementById('slider').style.transform = `translate3d(${x}%, 0px, 0px)`;
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

function setSlideWidth (slideWidth, slides) {
    slides.forEach((e, i) => {
        e.setAttribute("style", 'width:'+slideWidth+'px');
    })
}

function setSliderWidth (slideWidth, slides) {
    let sliderWidth = slides.length*slideWidth;
    document.getElementById('slider').style.width = sliderWidth + 'px';
}
