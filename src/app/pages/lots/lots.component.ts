import { Component } from '@angular/core';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css']
})
export class LotsComponent {
  hidden: boolean = false;
  lots =
    {
      "A1": "Sold",
      "A2": "Sold",
      "A3": "Sold",
      "B1": "Sold",
      "B2": "Sold",
      "B3": "Sold",
      "B4": "Sold",
      "B5": "Sold",
      "B6": "Sold",
      "B7": "Sold",
      "B8": "Sold",
      "B9": "Available",
      "B10": "Available",
      "B11": "Available",
      "B12": "Available",
      "B13": "Available",
      "B14": "Available",
      "B15": "Available",
      "B16": "Available",
      "B17": "Available",
      "B18": "Available",
      "B19": "Available",
      "B20": "Available",
      "B21": "Sold",
      "B22": "Available",
      "B23": "Available",
      "B24": "Available",
      "B25": "Available",
      "B26": "Available",
      "B27": "Available",
      "B28": "Sold",
      "B29": "Sold",
      "B30": "Sold",
      "B31": "Sold",
      "C1": "Sold",
      "C2": "Sold",
      "C3": "Sold",
      "C4": "Sold",
      "102-16": "Sold",
      "102-17": "Available",
      "102-18": "Available",
      "103-1": "Sold",
      "103-2": "Sold",
      "103-3": "Available",
      "103-4": "Sold",
      "103-5": "Sold",
      "103-6": "Sold",
      "103-7": "Sold"
    }

  showLots() {
    this.hidden = !this.hidden
  }
  getColour(lot: any) {
    return lot.value === 'Sold' ? "bg-watermelon-700 line-through text-white-400" : "bg-blue-400";
  }
}
