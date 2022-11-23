import { canvas, PIPE_HEIGHT, PIPE_WIDHT, VIRTUAL_HEIGHT } from './canvas';
import { c } from './canvas';

import GenericObjects from './GenericObject';

export default class Bird extends GenericObjects {
   #GRAVITY = 0.18;

   constructor({ position }, image) {
      super({ position }, image);

      this.position = {
         x: position.x - this.width / 2,
         y: position.y - this.height / 2,
      };

      this.velocity = { x: 0, y: 0 };
   }

   draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
   }

   update() {
      this.draw();

      this.velocity.y += this.#GRAVITY * 1;
      this.position.y += this.velocity.y;
   }

   collides(pipe) {
      if (
         this.position.x + 0 + (this.width - 0) >= pipe.position.x &&
         this.position.x + 0 <= pipe.position.x + PIPE_WIDHT
      ) {
         if (
            this.position.y + 0 + (this.height - 0) >= pipe.position.y &&
            this.position.y + 0 <= pipe.position.y + PIPE_HEIGHT
         ) {
            return true;
         }
      }

      return false;
   }
}
