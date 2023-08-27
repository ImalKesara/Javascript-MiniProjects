//part two
let forum2 = document.querySelector('.form-2');
let year = document.querySelector('.year');
let age = document.querySelector('.check-age');



let person = prompt('Enter your name ');
alert('welcome \n' + person);


forum2.addEventListener('submit', (f) => {
    f.preventDefault();
    const realage = age.value - year.value;
    console.log('Your age is ', realage);
    alert('your age is ' + realage);

})