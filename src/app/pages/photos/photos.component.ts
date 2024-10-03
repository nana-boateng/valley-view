import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  template: `
    <h2 class="my-10 heading text-center">Photos</h2>
    <div
      id="photos"
      class="flex flex-row justify-around mx-10 my-5 xl:w-1/2 xl:mx-auto"
    >
      <button
        [ngClass]="getActive(selectedTab === 'General')"
        class="photos-button"
        (click)="getPhotos('General')"
      >
        General
      </button>
      <button
        [ngClass]="getActive(selectedTab === 'Nature')"
        class="photos-button"
        (click)="getPhotos('Nature')"
      >
        Nature
      </button>
      <button
        [ngClass]="getActive(selectedTab === 'Valley')"
        class="photos-button"
        (click)="getPhotos('Valley')"
      >
        Valley
      </button>
    </div>
    <div class="flex justify-center">
      @if (selectedTab === 'General') {
      <app-slides [photosSources]="generalPhotos"></app-slides>
      } @else if (selectedTab === 'Nature') {
      <app-slides [photosSources]="naturePhotos"></app-slides>
      } @else if (selectedTab === 'Valley') {
      <app-slides [photosSources]="valleyPhotos"></app-slides>
      }
    </div>
  `,
  styleUrls: ['./photos.component.css'],
})
export class PhotosComponent {
  generalPhotos: {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
  }[] = [
    {
      itemImageSrc: './../../../assets/general/general_1.jpg',
      thumbnailImageSrc: './../../../assets/general/general_1.jpg',
      alt: 'General 1',
    },
    {
      itemImageSrc: './../../../assets/general/general_2.jpg',
      thumbnailImageSrc: './../../../assets/general/general_2.jpg',
      alt: 'General 2',
    },
    {
      itemImageSrc: './../../../assets/general/general_3.jpg',
      thumbnailImageSrc: './../../../assets/general/general_3.jpg',
      alt: 'General 3',
    },
    {
      itemImageSrc: './../../../assets/general/general_4.jpg',
      thumbnailImageSrc: './../../../assets/general/general_4.jpg',
      alt: 'General 4',
    },
    {
      itemImageSrc: './../../../assets/general/general_5.jpg',
      thumbnailImageSrc: './../../../assets/general/general_5.jpg',
      alt: 'General 5',
    },
    {
      itemImageSrc: './../../../assets/general/general_6.jpg',
      thumbnailImageSrc: './../../../assets/general/general_6.jpg',
      alt: 'General 6',
    },
  ];

  naturePhotos: {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
  }[] = [
    {
      itemImageSrc: './../../../assets/nature/nature_1.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_1.jpg',
      alt: 'Nature 1',
    },
    {
      itemImageSrc: './../../../assets/nature/nature_2.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_2.jpg',
      alt: 'Nature 2',
    },
    {
      itemImageSrc: './../../../assets/nature/nature_3.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_3.jpg',
      alt: 'Nature 3',
    },
    {
      itemImageSrc: './../../../assets/nature/nature_4.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_4.jpg',
      alt: 'Nature 4',
    },
    {
      itemImageSrc: './../../../assets/nature/nature_5.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_5.jpg',
      alt: 'Nature 5',
    },
    {
      itemImageSrc: './../../../assets/nature/nature_6.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_6.jpg',
      alt: 'Nature 6',
    },
    {
      itemImageSrc: './../../../assets/nature/nature_7.jpg',
      thumbnailImageSrc: './../../../assets/nature/nature_7.jpg',
      alt: 'Nature 7',
    },
  ];

  valleyPhotos: {
    itemImageSrc: string;
    thumbnailImageSrc: string;
    alt: string;
  }[] = [
    {
      itemImageSrc: './../../../assets/valley/valley_1.jpg',
      thumbnailImageSrc: './../../../assets/valley/valley_1.jpg',
      alt: 'Valley 1',
    },
    {
      itemImageSrc: './../../../assets/valley/valley_2.jpg',
      thumbnailImageSrc: './../../../assets/valley/valley_2.jpg',
      alt: 'Valley 2',
    },
    {
      itemImageSrc: './../../../assets/valley/valley_3.jpg',
      thumbnailImageSrc: './../../../assets/valley/valley_3.jpg',
      alt: 'Valley 3',
    },
    {
      itemImageSrc: './../../../assets/valley/valley_4.jpg',
      thumbnailImageSrc: './../../../assets/valley/valley_4.jpg',
      alt: 'Valley 4',
    },
  ];

  selectedTab = 'General';

  getPhotos(directory: string): void {
    switch (directory) {
      case 'General':
        this.selectedTab = 'General';
        break;
      case 'Nature':
        this.selectedTab = 'Nature';
        break;
      case 'Valley':
        this.selectedTab = 'Valley';
        break;
      default:
        this.selectedTab = 'General';
    }
  }

  getActive(check: boolean) {
    return check
      ? 'bg-salad-800 border border-salad-900'
      : 'bg-white-400 text-black-400';
  }
}
