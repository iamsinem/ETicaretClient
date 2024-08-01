import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:DashboardComponent}
    ]),MatFormFieldModule,LoginComponent
  ]
})
export class DashboardModule { }
