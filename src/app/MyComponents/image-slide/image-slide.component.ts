import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slide',
  templateUrl: './image-slide.component.html',
  styleUrls: ['./image-slide.component.css']
})
export class ImageSlideComponent implements OnInit {
  images: { src: string; alt: string }[] = [
    { src: 'assets/image1.jpg', alt: 'Image 1' },
    { src: 'assets/image2.jpg', alt: 'Image 2' },
    { src: 'assets/image3.jpg', alt: 'Image 3' },
    { src: 'assets/image4.jpg', alt: 'Image 3' },
  ];

  goToSlide(index: number) {
    this.currentSlide = index;
    this.restartInterval();
  }

  currentSlide: number = 0;

  constructor() {}

  intervalId: any;

  ngOnInit() {
    this.startInterval();
  }
  
  startInterval() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }
  
  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.images.length) % this.images.length;
    this.restartInterval();
  }
  
  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
    this.restartInterval();
  }
  
  restartInterval() {
    clearInterval(this.intervalId);
    this.startInterval();
  }

  targetOpacity: number = 1;

  changeOpacity(opacity: number): void {
    this.targetOpacity = opacity;
  }
  
}
