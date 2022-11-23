import { Howl } from 'howler';

export default audio = {
   backgroundMusic: new Howl({
      src: ['./audio/marios_way.mp3'],
   }),
   jump: new Howl({
      src: ['./audio/jump.wav'],
   }),
   scoring: new Howl({
      src: ['./audio/score.wav'],
   }),
   lost: new Howl({
      src: ['./audio/hurt.wav'],
   }),
};
