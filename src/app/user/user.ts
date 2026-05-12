import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `
    <h1>User Component</h1>
    <p>Name: {{name()}}</p>
    <button (click)="updateName()">Update Name</button>
  `,
  styleUrl: './user.css',
})
export class User {
  name = input.required<string>({alias: 'userName'});
  event = output<string>();

  updateName() {
    this.event.emit('Dinesh Kumar');
  }
}
