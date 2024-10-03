import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-header></app-header>
    <img
      id="home"
      src="./../../../assets/home.jpg"
      alt="Beautiful valley full of grass, trees and other greenery"
      class="w-full max-w-screen-xl mx-auto"
    />
    <h2 class="xl:text-4xl font-medium m-10 xl:mx-32 italic text-center">
      "Valley View Estates: Tranquil Living in the beautiful Qu'Apelle valley,
      22 miles from Regina."
    </h2>
    <div class="flex flex-row my-5 justify-around">
      <a href="#lots" class="button">View Lots</a>
      <a href="#about" class="link">Learn More ...</a>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
