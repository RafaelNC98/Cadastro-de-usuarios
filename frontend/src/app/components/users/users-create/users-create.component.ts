import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {


  constructor(private userService: UserService,
      private router: Router) { }

  ngOnInit(): void {
    
  }

  createUser(): void {
    this.userService.showMessage('Sucess!')
  }
  cancel(): void {
    this.router.navigate(['/users'])
  }
}
