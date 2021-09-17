import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ckeditor4-angular';
import { FormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { WebCamModule } from 'ack-angular-webcam';

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
import { Webcam2Component } from './webcam2/webcam2.component';
=======
>>>>>>> main


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
    Webcam2Component
=======
>>>>>>> main
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CKEditorModule,
    FormsModule,
    WebCamModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
