import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserListComponent, CardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Component Mastery');
  userName = "Dinesh";
  selectedMessage = "";

  updateName(name: string) {
    this.userName = name;
  }

  onCardSelected(message: string) {
    this.selectedMessage = message;
    console.log('Selection received in Parent:', message);
  }
}
