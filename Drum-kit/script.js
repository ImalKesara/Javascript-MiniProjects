window.addEventListener('keydown', (e) => {
    console.log(e.code);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`); //data-key="keyA"
    console.log(key);
    if (!audio) {
        return
    }
    audio.currentTime = 0;
    audio.play()
    key.classList.add('playing');

});

function removetransition(e) {
    console.log(e);
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removetransition));