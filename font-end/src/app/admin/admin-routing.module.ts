import { AddLocationComponent } from './forms/add-location/add-location.component';
import { RegisterUserComponent } from './forms/register-user/register-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddEventComponent } from './forms/add-event/add-event.component';
import { AddFacultyComponent } from './forms/add-faculty/add-faculty.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'register_user', component: RegisterUserComponent },
      { path: 'add_event', component: AddEventComponent },
      { path: 'add_location', component: AddLocationComponent },
      { path: 'add_faculty', component: AddFacultyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
