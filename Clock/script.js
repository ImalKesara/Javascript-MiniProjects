const clock = document.querySelector('.digital-clock');


const tick = () => {
    const now = new Date();
    const date = now.toDateString();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    // console.log(hours, minutes, seconds);

    const html = `
    <h1>${date}</h1> <br>
    <span>${hours}</span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>
    `;


    clock.innerHTML = html;
}

setInterval(tick, 1000);