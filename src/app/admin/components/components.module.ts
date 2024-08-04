import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { CustomerModule } from './customer/customer.module';
import { DashboardModule } from './dashboard/dashboard.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LayoutComponent } from '../layout/layout.component';
import { SidebarComponent } from '../layout/components/sidebar/sidebar.component';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProductsModule,
    OrderModule,
    CustomerModule,
    DashboardModule,
    MatFormFieldModule,
  ]
})
export class ComponentsModule { }
