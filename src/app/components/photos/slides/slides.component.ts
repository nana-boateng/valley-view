import { Component, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent {
  @Input() photosSources: string[] = [];
  currentIndex = 0;

  @ViewChild('slideContainer') slideContainer!: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit() {
    const hammer = new Hammer(this.slideContainer.nativeElement);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });

    hammer.on('swipeleft', () => {
      this.nextPhoto();
    });

    hammer.on('swiperight', () => {
      this.prevPhoto();
    });
  }

  nextPhoto() {
    if (this.currentIndex < this.photosSources.length - 1) {
      this.currentIndex++;
      // this.updateSlide();
    }
  }

  prevPhoto() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      // this.updateSlide();
    }
  }

  updateSlide() {
    const slide = this.slideContainer.nativeElement.querySelector('.slide');
    this.renderer.setStyle(slide, 'background-image', `url('${this.photosSources[this.currentIndex]}')`);
  }
}


