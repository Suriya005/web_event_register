import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebcamComponent } from './webcam/webcam.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { EventDetailComponent } from './Pages/event-detail/event-detail.component';
import { EventListComponent } from './Pages/event-list/event-list.component';
import { EventRegComponent } from './Pages/event-reg/event-reg.component';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { TestComponent } from './test/test.component';

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
  {
    path: 'cam',
    component: WebcamComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
