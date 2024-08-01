import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { ListProductComponent } from './list-product/list-product.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {UiSidebarComponent } from './ui-sidebar/ui-sidebar.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    ProductsComponent,
    ListProductComponent,
    UiSidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:ProductsComponent}
    ]),
    MatSidenavModule,MatMenuModule,MatListModule,MatTableModule,
    FormsModule,MatPaginatorModule,MatFormFieldModule
  ],
  exports:[
    ListProductComponent
  ]

})
export class ProductsModule { }
