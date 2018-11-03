import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  options;

  constructor() {
    this.options = {
      bottom: 0,
      fixed: true,
      top: 63
    };
  }
}
