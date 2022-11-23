import { canvas } from '../canvas';
import { c } from '../canvas';
import GenericObjects from './GenericObject';

export default class Ground extends GenericObjects {
   constructor({ position }, image) {
      super({ position }, image);
      this.position = { x: position.x, y: position.y };
   }

   draw(x = this.position.x) {
      c.drawImage(this.image, x, this.position.y);
   }

   update() {}
}
