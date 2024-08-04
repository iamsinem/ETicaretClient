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
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComponentsModule } from "./admin/layout/components/components.module";


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
    MatPaginatorModule,
    MatDialogModule, MatFormFieldModule, MatInputModule,
    ComponentsModule
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
