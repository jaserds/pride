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

console.log(112321);