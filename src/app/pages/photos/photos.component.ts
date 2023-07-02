import { Component } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent {

  generalPhotos: string[] = [
    './../../../assets/general/general_1.jpg',
    './../../../assets/general/general_2.jpg',
    './../../../assets/general/general_3.jpg',
    './../../../assets/general/general_4.jpg',
    './../../../assets/general/general_5.jpg',
    './../../../assets/general/general_6.jpg',
  ];

  naturePhotos: string[] = [
    './../../../assets/nature/nature_1.jpg',
    './../../../assets/nature/nature_2.jpg',
    './../../../assets/nature/nature_3.jpg',
    './../../../assets/nature/nature_4.jpg',
    './../../../assets/nature/nature_5.jpg',
    './../../../assets/nature/nature_6.jpg',
    './../../../assets/nature/nature_7.jpg',
  ];

  valleyPhotos: string[] = [
    './../../../assets/valley/valley_1.jpg',
    './../../../assets/valley/valley_2.jpg',
    './../../../assets/valley/valley_3.jpg',
    './../../../assets/valley/valley_4.jpg',
  ];

  selectedTab = this.generalPhotos;

  getPhotos(directory: string): void {
    switch (directory) {
      case 'General':
        this.selectedTab = this.generalPhotos;
        break;
      case 'Nature':
        this.selectedTab = this.naturePhotos;
        break;
      case 'Valley':
        this.selectedTab = this.valleyPhotos;
        break;
      default:
        this.selectedTab = this.generalPhotos;
    }
  }

  getActive(check: boolean) {
    return check ? "bg-salad-800 border border-salad-900" : "bg-white-400 text-black-400"
  }

}
