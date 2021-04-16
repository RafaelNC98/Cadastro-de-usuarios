import { UserDeleteComponent } from './components/users/user-delete/user-delete.component';
import { UserUpdateComponent } from './components/users/user-update/user-update.component';
import { UsersCreateComponent } from './components/users/users-create/users-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { UsersCrudComponent } from "./views/users-crud/users-crud.component"

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "users",
    component: UsersCrudComponent
  },
  {
    path: "users/create",
    component: UsersCreateComponent
  },
  {
    path: "users/update/:id",
    component: UserUpdateComponent
  },
  {
    path: "users/delete/:id",
    component: UserDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
