import {
   canvas,
   GAP_HEIGHT,
   VIRTUAL_WIDTH,
   VIRTUAL_HEIGHT,
   PIPE_WIDHT,
   PIPE_HEIGHT,
   PIPE_SPEED,
} from '../canvas';
import { c } from '../canvas';
import Pipe from '../classes/Pipe';

export default class PipePair {
   constructor({ position }) {
      this.position = { x: VIRTUAL_WIDTH + 32, y: position.y };
      this.pipes = [
         new Pipe({ position: { y: this.position.y } }, 'top'),
         new Pipe(
            { position: { y: this.position.y + PIPE_HEIGHT + GAP_HEIGHT } },
            'bottom'
         ),
      ];

      this.scored = false;
   }

   draw() {
      this.pipes.forEach(pipe => pipe.update());
   }

   update() {
      this.draw();

      this.position.x -= PIPE_SPEED * 1;
      this.pipes[0].position.x = this.position.x;
      this.pipes[1].position.x = this.position.x;
   }
}
