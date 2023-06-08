import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  fragment = "";
  showMenu = false;

  constructor(private location: Location, private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateFragment();
      }
    });
  }

  private updateFragment() {
    const url = this.location.path(true);
    const fragment = url.split('#')[1] || '';
    this.fragment = fragment;
    console.log(this.fragment); // Output: fragment value
  }

  openMenu() {
    this.showMenu = !this.showMenu
    console.log(this.showMenu)
  }
}
