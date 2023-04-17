const sonic = document.querySelector('.sonic');
const spike = document.querySelector('.spike');

const jump = () => {
    sonic.classList.add('jump');

    setTimeout(() => {
        sonic.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const spikePosition = spike.offsetLeft;
    const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');

    if (spikePosition <= 60 && spikePosition > 0 && sonicPosition < 60) {
        spike.style.animation = 'none';
        spike.style.left = `${spikePosition}px`;

        sonic.style.animation = 'none';
        sonic.style.bottom = `${sonicPosition}px`;

        sonic.src = 'img/dead.webp';
        clearInterval(loop);
    }



}, 10);


document.addEventListener('keydown', jump);
