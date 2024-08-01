import { Component, importProvidersFrom, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ProductService } from '../../../../services/common/models/product.service';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { get } from 'jquery';
import { DialogService } from '../../../../services/common/dialog.service';
import { SelectProductImageDialogComponent } from '../../../../dialogs/select-product-image-dialog/select-product-image-dialog.component';
import { List_Customer } from '../../../../contracts/list_customer';
import { CustomerService } from '../../../../services/common/models/customer.service';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrl: './list-customer.component.scss'
})
export class ListCustomerComponent {
  constructor(private customerService:CustomerService,
    private alertifyService:AlertifyService,
    private dialogService :DialogService
   ){}

displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Phone','Email','Address','Tc','BirthDate','Gender','CreatedDate','UpdatedDate'];
dataSource : MatTableDataSource<List_Customer> = null;


@ViewChild(MatPaginator) paginator: MatPaginator;
async getCustomer(){
  const allCustomer:{totalCount:number; customers:List_Customer[]}= await this.customerService.read(this.paginator ? this.paginator.pageIndex:0,this.paginator ? this.paginator.pageSize:5)
  this.dataSource=new MatTableDataSource<List_Customer>(allCustomer.customers);
  this.paginator.length=allCustomer.totalCount;
//this.dataSource.paginator = this.paginator;
}

async pageChanged(){
await this.getCustomer();
}
async ngOnInit(){
await this.getCustomer();
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

}
}