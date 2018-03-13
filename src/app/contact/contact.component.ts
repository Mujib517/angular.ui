import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>


    <mat-toolbar color="primary">My App
      <button mat-button>Home</button>
      <button mat-button>About</button>
      <button mat-button>Contact</button>
    </mat-toolbar>

    <button mat-raised-button color="accent">Click Me</button>
    <button mat-fab>+</button>
    <button mat-mini-fab color="primary">+</button>

    <mat-checkbox>Check me!</mat-checkbox>

    <mat-form-field class="example-full-width">
      <input matInput placeholder="Favorite food" value="Sushi">
    </mat-form-field>

    <mat-form-field>
      <mat-select placeholder="Favorite food">
        <mat-option>Pizza</mat-option>
        <mat-option>Subway</mat-option>
        <mat-option>Biryani</mat-option>
      </mat-select>
  </mat-form-field>

  <mat-spinner></mat-spinner>

  `
})
export class ContactComponent {
  constructor(private logger: ConsoleLogger) { }

  ngOnInit() {
    this.logger.warn("Test Logging");
  }
}
