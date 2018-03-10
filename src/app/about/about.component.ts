import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  counter: number = 10;

  inc() {
    this.counter++;
  }
}