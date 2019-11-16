import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  private collapseNavBar: boolean;

  constructor() { }

  ngOnInit() {
    this.collapseNavBar = true;
  }

  toggleNavbar(): boolean {
    return this.collapseNavBar = !this.collapseNavBar;
  }

  canCollapseNavBar(): boolean {
    return this.collapseNavBar;
  }
}
