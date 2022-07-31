var audio = document.getElementsByTagName("audio")[0];
var neonText = document.getElementById('neonText');

neonText.addEventListener("mouseover", function (e) {
    audio.play();
})

neonText.addEventListener("mouseout", function (e) {
    audio.pause();
    audio.currentTime = 0;
})