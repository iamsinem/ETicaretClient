import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsModule } from './components/products/products.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    FileUploadModule,
    ComponentsModule
  ],
  exports:[
    LayoutModule
  ]
})
export class AdminModule { }
