import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-home',
  imports: [UserListComponent, CardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  selectedMessage = "";

  onCardSelected(message: string) {
    this.selectedMessage = message;
    console.log('Selection received in Parent:', message);
  }
}
