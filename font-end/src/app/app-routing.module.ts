import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { EventDetailComponent } from './Pages/event-detail/event-detail.component';
import { EventListComponent } from './Pages/event-list/event-list.component';
import { EventRegComponent } from './Pages/event-reg/event-reg.component';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { TestComponent } from './test/test.component';
import { Webcam2Component } from './webcam2/webcam2.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home',
    component: UserHomeComponent,
  },
  {
    path: 'event-list',
    component: EventListComponent,
  },
  {
    path: 'event-reg',
    component: EventRegComponent,
  },
  {
    path: 'event-detail',
    component: EventDetailComponent,
  },
  {
    path: 'test',
    component: TestComponent,
  },
<<<<<<< HEAD
  {
    path: 'cam',
    component: WebcamComponent,
  },
  {
    path:'cam2',
    component:Webcam2Component
  }
=======
>>>>>>> main
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
