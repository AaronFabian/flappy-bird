import { canvas } from '../canvas';
import { c } from '../canvas';

export default class GenericObjects {
   constructor({ position }, image) {
      this.position = { x: position.x, y: position.y };
      this.width = image.width;
      this.height = image.height;
      this.image = image;
   }

   draw(x = this.position.x) {
      c.drawImage(this.image, x, this.position.y);
   }

   update() {}
}
