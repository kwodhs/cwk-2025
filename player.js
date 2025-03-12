const radio = new Audio("https://cast.mediaonline.net.ua/chillout320");
let isPlaying = false;

function initPlayer() {
    const playPauseButton = document.getElementById("playPause");
    const volumeControl = document.getElementById("volumeControl");
    const volumeLabel = document.getElementById("volumeLabel");

    volumeLabel.innerHTML = volumeControl.value + "%";

    volumeControl.oninput = function () {
        radio.volume = this.value / 100;
        volumeLabel.innerHTML = this.value + "%";
    }

    playPauseButton.addEventListener("click", playRadio, false);
}

function playRadio(e) {
    const playPauseButtonIcon = document.querySelector('.material-symbols-outlined');
    if (isPlaying) {
        radio.pause();
        playPauseButtonIcon.innerText = "play_circle";
    } else {
        radio.play();
        playPauseButtonIcon.innerText = "pause_circle";
    }
    isPlaying = !isPlaying;
}