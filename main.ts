input.onGesture(Gesture.Shake, function () {
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playMelody("C5 G B A F A C5 B ", 120)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
