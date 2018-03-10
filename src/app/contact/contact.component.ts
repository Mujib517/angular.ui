import { Component } from '@angular/core';
import { ConsoleLogger } from '../shared/console.logger';

@Component({
  selector: 'app-contact',
  template: `
    <h1>Contact Page</h1>
  `
})
export class ContactComponent {
  constructor(private logger: ConsoleLogger) { }

  ngOnInit() {
    this.logger.warn("Test Logging");
  }
}
