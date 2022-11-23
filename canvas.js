import { createImage, randomIntFromRange } from './helper/utils';

import GameState from './classes/GameState';

import backgroundImg from './img/background.png';
import Background from './classes/Background';
let backgroundScroll = 0;

import groundImg from './img/ground.png';
import Ground from './classes/Ground.js';
let groundScroll = 0;

import birdImg from './img/bird.png';
import Bird from './classes/Bird';

import pipeImg from './img/pipe.png';
import Pipe from './classes/Pipe';
export const GAP_HEIGHT = 90;
export const PIPE_SPEED = 2;
export const PIPE_HEIGHT = 288;
export const PIPE_WIDHT = 70;

import PipePair from './classes/PipePair';

const BACKGROUND_SCROLL_SPEED = 0.9;
const GROUND_SCROLL_SPEED = 1.8;

const BACKGROUND_LOOPING_POINT = 413;

export const canvas = document.getElementById('canvas');
export const c = canvas.getContext('2d');

const containerUI = document.querySelector('.flappy-gui-states');
export const scoreUI = document.querySelector('.score-point span');
export const liveScoreUI = document.querySelector('.score-point');
const resultScoreUI = document.querySelector('.result-point span');

const btnStart = document.getElementById('btn-start');

export const VIRTUAL_WIDTH = 512;
export const VIRTUAL_HEIGHT = 288;

canvas.width = VIRTUAL_WIDTH;
canvas.height = VIRTUAL_HEIGHT;

export let engine = false;
let background;
let ground;
let bird;
let pipesPairs;
let spawnTimer;
let lastY;
let score;

let msPrev = window.performance.now();
let fps = 60;
let fpsInterval = 1000 / fps;
function init() {
   background = new Background(
      {
         position: { x: -1, y: -1 },
      },
      createImage(backgroundImg)
   );
   ground = new Ground(
      {
         position: { x: -1, y: VIRTUAL_HEIGHT - 16 },
      },
      createImage(groundImg)
   );
   bird = new Bird(
      {
         position: { x: VIRTUAL_WIDTH / 2, y: VIRTUAL_HEIGHT / 2 },
      },
      createImage(birdImg)
   );

   pipesPairs = [];
   spawnTimer = 0;
   lastY = -PIPE_HEIGHT - Math.random() * 80 + 20;
   score = 0;
   containerUI.insertAdjacentHTML('afterbegin', GameState.startScreen());
}

function animate() {
   requestAnimationFrame(animate);

   const msNow = window.performance.now();
   const elapsed = msNow - msPrev;
   if (elapsed < fpsInterval) return;
   msPrev = msNow - (elapsed % fpsInterval); // 3.34

   c.fillStyle = 'white';
   c.fillRect(0, 0, canvas.width, canvas.height);

   backgroundScroll =
   (backgroundScroll + BACKGROUND_SCROLL_SPEED * 1) % BACKGROUND_LOOPING_POINT; // prettier-ignore
   groundScroll = 
   (groundScroll + GROUND_SCROLL_SPEED * 1) % VIRTUAL_WIDTH; // prettier-ignore

   spawnTimer++;

   if (spawnTimer > 60 && engine) {
      // prettier-ignore
      let y = Math.max(-PIPE_HEIGHT + 10, Math.min(lastY + randomIntFromRange(-20, 20), VIRTUAL_HEIGHT - 90 - PIPE_HEIGHT))
      lastY = y;

      pipesPairs.push(new PipePair({ position: { y: y } }));
      spawnTimer = 0;
   }

   //////////////////////////////////
   if (engine) {
      background.draw(-backgroundScroll);

      for (let p = pipesPairs.length - 1; p >= 0; p--) {
         let pair = pipesPairs[p];

         pair.pipes.forEach(pipe => {
            if (bird.collides(pipe)) {
               // prettier-ignore
               audio.lost.play();
               containerUI.insertAdjacentHTML(
                  'afterbegin',
                  GameState.lostScreen(score)
               );
               engine = false;
            }
         });

         if (!pair.scored) {
            if (pair.position.x + PIPE_WIDHT < bird.position.x) {
               audio.scoring.play();
               score = score + 1;
               scoreUI.innerText = score;
               pair.scored = true;
            }
         }

         if (pair.position.x + PIPE_WIDHT < 0) {
            pipesPairs.splice(p, 1);
         } else {
            pair.update();
         }
      }

      ground.draw(-groundScroll);

      if (bird.position.y + bird.height + ground.height > VIRTUAL_HEIGHT) {
         audio.lost.play();
         engine = false;
         containerUI.insertAdjacentHTML(
            'afterbegin',
            GameState.lostScreen(score)
         );
      } else {
         bird.update();
      }
   } else {
      background.draw(-backgroundScroll);
      ground.draw(-groundScroll);
   }
}

init();
animate();

window.addEventListener('keypress', ({ key }) => {
   switch (key) {
      case ' ':
         if (!engine) return;
         audio.jump.play();
         bird.velocity.y = -3.8;
         break;
      case 'p':
         break;
      case 'Enter':
         init();
         engine = true;
         containerUI.innerHTML = '';
         console.log('game restarted');
         break;
   }
});

btnStart.addEventListener('click', () => {
   init();
   engine = true;
   containerUI.innerHTML = '';
});

window.addEventListener('click', () => {
   if (!engine) return;
   audio.jump.play();
   bird.velocity.y = -3.8;
});
audio.backgroundMusic.play();
