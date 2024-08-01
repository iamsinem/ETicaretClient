import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CustomerComponent,
    CreateCustomerComponent,
    ListCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "",component:CustomerComponent},
    ]),
    MatSidenavModule,MatFormFieldModule,MatInputModule,
    ReactiveFormsModule, MatDatepickerModule,
    MatNativeDateModule,MatSelectModule,MatButtonModule,
    MatPaginatorModule,MatTableModule
  ],
})
export class CustomerModule { }
