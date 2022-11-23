// import { Howl } from 'howler';
// import marioWay from './audio/marios_way.mp3';
// import jump from './audio/jump.wav';
// import score from './audio/score.wav';
// import hurt from './audio/hurt.wav';
const audio = {
    backgroundMusic: new Howl({
        src: [
            "./audio/marios_way.mp3"
        ],
        loop: true,
        volume: 0.2
    }),
    jump: new Howl({
        src: [
            "./audio/jump.wav"
        ],
        volume: 0.1
    }),
    scoring: new Howl({
        src: [
            "./audio/score.wav"
        ],
        volume: 0.1
    }),
    lost: new Howl({
        src: [
            "./audio/hurt.wav"
        ],
        volume: 0.1
    })
};

//# sourceMappingURL=index.c3546303.js.map
