import { Component } from '@angular/core';

@Component({
   selector: 'app-slider-ts',
   templateUrl: './slider-ts.component.html',
   styleUrls: ['./slider-ts.component.css']
})
export class SliderTSComponent {
   imageSrc: string[] = ["https://placehold.co/500x500?text=Slide+1", "https://placehold.co/500x500?text=Slide+2", "https://placehold.co/500x500?text=Slide+3"];
   currentImageSrc: string = this.imageSrc[0];
   counter: number = 0;
   interval: any;

   prev() {
      this.counter--;
      if (this.counter < 0) this.counter = this.imageSrc.length - 1;
      this.currentImageSrc = this.imageSrc[this.counter % this.imageSrc.length];
   }
   next() {
      console.log(this.imageSrc);
      this.currentImageSrc = this.imageSrc[++this.counter % this.imageSrc.length];
   }
   play() {
      this.interval = setInterval(() => this.next(), 1000);
   }
   stop() {
      clearInterval(this.interval);
   }
}
