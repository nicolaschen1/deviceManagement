import { User } from '../models/User.model';
import { Subject } from 'rxjs';

export class UserService {
    private users: User[] = [
        new User('Tim', 'Smith', 'tim@smith.com', 'ornage juice', ['run', 'drink coffee'])
    ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }

  
}