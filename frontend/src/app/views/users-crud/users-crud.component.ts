import { HeaderService } from './../../components/template/header/header.service';
import { HeaderData } from './../../components/template/header/header-data.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-users-crud',
  templateUrl: './users-crud.component.html',
  styleUrls: ['./users-crud.component.css']
})
export class UsersCrudComponent implements OnInit {

  constructor(private router: Router, headerService: HeaderService){  
    headerService.headerData = {
      title: 'Cadastro de Usuários',
      icon: 'person',
      routerUrl: '/users'
    }
  }
  ngOnInit(): void {
  }

  navigateToUserCreate(): void {
    this.router.navigate(['/users/create'])
  }

}
