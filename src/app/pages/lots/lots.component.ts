import { Component } from '@angular/core';
import { lots } from 'lots';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css']
})
export class LotsComponent {
  hidden: boolean = false;
  dataArray = Object.entries(lots)
  showLots() {
    this.hidden = !this.hidden
  }
  getColour(lot: any) {
    return lot[1] === 'Sold' ? "bg-watermelon-800 line-through text-white-400" : "bg-blue-400";
  }
}
