//part one

let studentID = document.querySelector('.stuID');
let fname = document.querySelector('.fname');
let lname = document.querySelector('.lname');
let technology = document.querySelector('.dropdown');
const forum = document.querySelector('form');






forum.addEventListener('submit', (e) => {
    e.preventDefault();

    if (studentID.value == "") {
        console.log('Please fill the ID field');
        return false;
    }

    if (fname.value == "") {
        console.log('Please fill the First name ');
        return false;
    }

    if (lname.value == "") {
        console.log('Please fill the last name field');
        return false;
    }

    if (technology.value == "") {
        console.log('none')
    } else {
        console.log('Thank you completing the form');
        return true;
    }


})