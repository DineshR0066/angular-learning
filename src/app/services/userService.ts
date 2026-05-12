import { Injectable, signal } from '@angular/core';

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users = signal<UserProfile[]>([
    { id: 1, name: 'Dinesh Kumar', email: 'dinesh@example.com', role: 'Admin'},
    { id: 2, name: 'Alice Smith', email: 'alice@example.com', role: 'Developer'},
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Designer'},
    { id: 4, name: 'Charlie Brown', email: 'charlie@example.com', role: 'Manager'},
    { id: 5, name: 'Eva Green', email: 'eva@example.com', role: 'Developer'},
  ]);

  getUsers() {
    return this.users.asReadonly();
  }
}
