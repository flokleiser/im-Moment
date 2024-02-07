var enableSound = true;
var enableRainSound = false;
var rainSound = new Audio("audio/rain test.wav")

rainSound.loop = false;

function toggleSound() {
    enableSound = !enableSound
    if (enableSound) {
        console.log('sound', enableSound)
    }
    if (!enableSound) {
        rainSound.pause();
        rainSound.currentTime = 0;
        console.log('sound', enableSound)
    }
}





function loadRainSound(){
    enableRainSound = !enableRainSound
    if (enableRainSound && enableSound) {
        rainSound.volume = 0;
        $(rainSound).animate({volume: 0.2},1000);
        console.log(rainSound.volume)
        rainSound.play();
        console.log('sound',enableSound);
        console.log(rainSound.loop)
    }
    else if (!enableRainSound) {
        rainSound.volume = 0.2;
        $(rainSound).animate({volume: 0},1000, function(){
            rainSound.pause();
        });
        rainSound.currentTime = 0;
        console.log('sound',enableSound);
    }
    // else if (enableRainSound && !enableSound) {
    //     console.log('audio should really stop')
    // }
}