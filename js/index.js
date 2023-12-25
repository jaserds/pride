function setZIndex(square) {
    const squares = document.querySelectorAll('.directions__item');

    squares.forEach(s => {
        s.style.zIndex = 1;
    });

    square.style.zIndex = 3;
}

document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.directions__item');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => setZIndex(square));
    });
});

document.querySelector('.text-blok__btn').addEventListener('click', () => {
    document.querySelector('.modal-window__container').classList.remove('disable');
    
})

document.querySelector('.modal-window__close-btn').addEventListener('click', () => {
    document.querySelector('.modal-window__container').classList.add('disable');
})

$('.reviews__slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });