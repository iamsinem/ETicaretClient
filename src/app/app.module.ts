import { NgModule } from '@angular/core';
import { BrowserModule,provideClientHydration} from '@angular/platform-browser';
import { AdminModule } from './admin/admin.module';
import {AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClient, HttpClientModule ,provideHttpClient,withFetch} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { FileUploadComponent } from './services/common/file-upload/file-upload.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule,
    UiModule,
    MatMenuModule,
    HttpClientModule,
    MatPaginatorModule
],
  providers: [
    {provide:"baseUrl",useValue:"http://localhost:5070/api",multi:true},
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
