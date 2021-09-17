import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { EventListComponent } from './Pages/event-list/event-list.component';
import { UserHomeComponent } from './Pages/user-home/user-home.component';
import { EventRegComponent } from './Pages/event-reg/event-reg.component';
import { EventDetailComponent } from './Pages/event-detail/event-detail.component';
import { TestComponent } from './test/test.component';
<<<<<<< HEAD
import { WebcamComponent } from './webcam/webcam.component';
<<<<<<< HEAD
import { Webcam2Component } from './webcam2/webcam2.component';
=======
>>>>>>> main
=======
>>>>>>> parent of 6c2dbf6 (u)


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserHomeComponent,
    EventListComponent,
    EventRegComponent,
    EventDetailComponent,
    TestComponent,
<<<<<<< HEAD
    WebcamComponent,
<<<<<<< HEAD
    Webcam2Component
=======
>>>>>>> main
=======
>>>>>>> parent of 6c2dbf6 (u)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    WebcamModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
