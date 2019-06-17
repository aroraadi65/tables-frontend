import { Component } from '@angular/core';

import { employees } from './../assets/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  open = true;
  employees = employees;

  toggleSidenav() {
    this.open = !this.open;
  }
}
