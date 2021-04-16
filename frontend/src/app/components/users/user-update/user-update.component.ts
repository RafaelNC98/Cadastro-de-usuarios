import { User } from './../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user!: User

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.userService.readByid(id!).subscribe(user => {
      this.user = user
    });
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe(() => {
      this.userService.showMessage('Update Sucess!')
      this.router.navigate(['/users'])
    })
  }

  cancel(): void {
    this.router.navigate(['/users'])
  }
}