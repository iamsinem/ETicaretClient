import { Component, importProvidersFrom, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ProductService } from '../../../../services/common/models/product.service';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { get } from 'jquery';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
   
})
export class ListsComponent implements OnInit{

constructor(private productService:ProductService,private alertifyService:AlertifyService){}
displayedColumns: string[] = ['id', 'categoryId', 'productCode', 'productName','price','manufactureDate','quantity','feature1','feature2','createdDate','updatedDate','edit','delete'];
dataSource : MatTableDataSource<List_Product> = null;

@ViewChild(MatPaginator) paginator: MatPaginator;
async getProducts(){
   const allProducts:{totalCount:number; products:List_Product[]}= await this.productService.read(this.paginator ? this.paginator.pageIndex:0,this.paginator ? this.paginator.pageSize:5)
    this.dataSource=new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length=allProducts.totalCount;
    //this.dataSource.paginator = this.paginator;
}
async pageChanged(){
  await this.getProducts();
}
async ngOnInit(){
 await this.getProducts();
}

}
