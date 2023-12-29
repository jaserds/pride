function setZIndex(square) {
    const squares = document.querySelectorAll('.directions__item');

    squares.forEach(s => {
        s.style.zIndex = 1;
    });

    square.style.zIndex = 3;
}

document.addEventListener("DOMContentLoaded", function() {
  var directionItems = document.querySelectorAll('.directions__items .directions__item');

  directionItems.forEach(function(item) {
      item.addEventListener('click', function() {
          var link = this.querySelector('.oner-link');
          if (link) {
              window.location.href = link.href;
          }
      });
  });
});

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

window.onclick = function(event) {
  let modal = document.getElementById('myModalBtl');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
}

function toggleMenu() {
  let menu = document.getElementById('menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

function openModalBtl(imageSrc) {
  document.getElementById('myModalBtl').style.display = 'flex';
  document.getElementById('modalBtlImg').src = imageSrc;
}

function closeModalBtl() {
  document.getElementById('myModalBtl').style.display = 'none';
}



$('.reviews__slider').slick({
    dots: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        }
      },
    ]
  });