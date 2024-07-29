import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { FileUploadModule } from '../services/common/file-upload/file-upload.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule,
    FileUploadModule
  ],
  exports:[
    LayoutModule
  ]
})
export class AdminModule { }
