import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisterUserComponent } from './forms/register-user/register-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEventComponent } from './forms/add-event/add-event.component';
import { CKEditorModule } from 'ckeditor4-angular';
import { AddLocationComponent } from './forms/add-location/add-location.component';
import { AddMajorComponent } from './forms/add-major/add-major.component';
import { AddFacultyComponent } from './forms/add-faculty/add-faculty.component';
import { AddQuestionComponent } from './forms/add-question/add-question.component';
// import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    RegisterUserComponent,
    AddEventComponent,
    AddLocationComponent,
    AddMajorComponent,
    AddFacultyComponent,
    AddQuestionComponent,
    

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    CKEditorModule,
    // FormsModule
  ]
})
export class AdminModule { }
