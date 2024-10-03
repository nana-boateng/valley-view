import { Component } from '@angular/core';
import { lots } from 'lots';

@Component({
  selector: 'app-lots',
  template: `
    <h2 id="lots" class="text-2xl text-center mt-10 mb-5 heading">Lots</h2>
    <div class="md:flex md:flex-row xl:w-screen xl:justify-between">
      <img
        src="./../../../assets/lots.gif"
        alt="a map of available lots"
        class="ml-10 xl:ml-48"
      />
      <div class="flex flex-row justify-end">
        <button type="button" class="md:hidden button" (click)="showLots()">
          View Lots
        </button>
      </div>
      <div class="flex flex-row justify-end lg:w-1/3">
        <ul *ngIf="!hidden" class="list">
          <li
            *ngFor="let lot of dataArray"
            class="cursor-pointer rounded-md border border-current w-16 h-7 m-2 text-sm text-center lg:text-lg xl:texl-lg xl:w-20 xl:h-14 xl:text-xl"
            [ngClass]="getColour(lot)"
          >
            {{ lot[0] }}
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  `,
  styleUrls: ['./lots.component.css'],
})
export class LotsComponent {
  hidden: boolean = false;
  dataArray = Object.entries(lots);
  showLots() {
    this.hidden = !this.hidden;
  }
  getColour(lot: any) {
    return lot[1] === 'Sold'
      ? 'bg-watermelon-800 line-through text-white-400'
      : 'bg-blue-400';
  }
}
