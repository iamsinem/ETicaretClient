import { Component, ViewChild } from '@angular/core';
import { OrderService } from '../../../../services/common/models/order.service';
import { DialogService } from '../../../../services/common/dialog.service';
import { AlertifyService } from '../../../../services/admin/alertify.service';
import { MatTableDataSource } from '@angular/material/table';
import { List_Order } from '../../../../contracts/list_order';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.scss'
})
export class ListOrderComponent {

  constructor(private orderService:OrderService,
    private alertifyService:AlertifyService,
    private dialogService :DialogService
  ){}

  displayedColumns: string[] =['OrderId','CustomerId','SaleDate','TotalAmount'];
  dataSource:MatTableDataSource<List_Order>=null;
 
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  async getOrder(){
    const allOrder:{totalCount:number; orders:List_Order[]}= await this.orderService.read(this.paginator ? this.paginator.pageIndex:0,this.paginator ? this.paginator.pageSize:5)
    this.dataSource=new MatTableDataSource<List_Order>(allOrder.orders);
    this.paginator.length=allOrder.totalCount;
  //this.dataSource.paginator = this.paginator;
  }

  async pageChanged(){
    await this.getOrder();
  }

  async ngOnInit(){
    await this.getOrder();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
  }
  

}
