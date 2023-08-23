let click = document.querySelector('button');
let wrapper = document.querySelector('.popup-wrapper');
let closed = document.querySelector('.popup-close');

click.addEventListener('click', () => {
    wrapper.style.display = 'block';
})

closed.addEventListener('click', () => {
    wrapper.style.display = 'none';
})