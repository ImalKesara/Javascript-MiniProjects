function playsound(e) {
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

}




function removetransition(e) {
    console.log(e);
    if (e.propertyName !== 'transform') return
    console.log(e.propertyName);
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removetransition));
window.addEventListener('keydown', playsound);