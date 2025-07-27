const soundClick = document.getElementById("SoundClick")

function PlaySound_click() {
    soundClick.currentTime = 0
    soundClick.play()
}

export default PlaySound_click