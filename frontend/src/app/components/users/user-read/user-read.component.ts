import { UserService } from './../user.service';
import { User } from './../user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {

  users!: User[]
  displayedColumns = ['id', 'name', 'profession', 'email', 'action']

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.UserService.read().subscribe(users => {
      this.users = users
      console.log(users)
    })
  }


}
