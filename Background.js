import { canvas } from './canvas';
import { c } from './canvas';
import GenericObjects from './GenericObject';

export default class Background extends GenericObjects {
   constructor({ position }, image) {
      super({ position }, image);
      this.position = { x: position.x, y: position.y };
      // this.width = image.width;
      // this.height = image.height;
      // this.image = image;
   }

   draw(x = this.position.x) {
      c.drawImage(this.image, x, this.position.y);
   }

   update() {}
}
