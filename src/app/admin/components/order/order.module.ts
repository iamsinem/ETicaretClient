import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { RouterModule } from '@angular/router';
import { ListOrderComponent } from './list-order/list-order.component';
import {MatTableModule} from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'; 
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    OrderComponent,
    ListOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:OrderComponent}
    ]),
    MatSidenavModule,MatMenuModule,MatListModule,MatTableModule,
    FormsModule,MatPaginatorModule,MatFormFieldModule,MatSortModule,
    MatInputModule
  ],
  exports:[
    OrderComponent
  ]
})
export class OrderModule { }
