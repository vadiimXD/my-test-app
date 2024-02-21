import { Component } from '@angular/core';

interface User {
  name: string
  age: number
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  isToggle = false

  users: User[] = [
    { name: "Pesho", age: 18 },
    { name: "Misho", age: 19 },
    { name: "Gosho", age: 20 },
    { name: "Sasho", age: 21 }
  ]

  handleClick(ev: Event) {
    this.isToggle = !this.isToggle
  }
}
