import { canvas, PIPE_HEIGHT, VIRTUAL_WIDTH } from '../canvas';
import { c } from '../canvas';
import { randomIntFromRange } from '../helper/utils';
import { createImage } from '../helper/utils';
import pipeImg from '../img/pipe.png';

import GenericObjects from './GenericObject';

export default class Pipe extends GenericObjects {
   #PIPE_SCROLL = -0.5;

   constructor({ position }, orientation, image = createImage(pipeImg)) {
      super({ position }, image);
      this.position = {
         x: VIRTUAL_WIDTH,
         y: position.y,
      };

      this.orientation = orientation;
   }

   draw() {
      this.mirrorImage(
         this.image,
         this.position.x,
         this.orientation == 'top'
            ? this.position.y + PIPE_HEIGHT
            : this.position.y,
         false,
         this.orientation == 'top' ? true : false
      );
   }

   update() {
      this.draw();
   }

   mirrorImage(image, x = 0, y = 0, horizontal = false, vertical = false) {
      c.save();
      c.setTransform(
         horizontal ? -1 : 1,
         0,
         0,
         vertical ? -1 : 1,
         x + (horizontal ? image.width : 0), // x origin
         y + 0 // y origin
      );
      c.drawImage(image, 0, 0);
      c.restore();
   }
}
