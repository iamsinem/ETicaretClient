import { Component, importProvidersFrom, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { List_Product } from '../../../../contracts/list_product';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { ProductService } from '../../../../services/common/models/product.service';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { get } from 'jquery';
import { DialogService } from '../../../../services/common/dialog.service';
import { SelectProductImageDialogComponent } from '../../../../dialogs/select-product-image-dialog/select-product-image-dialog.component';
import { DatePipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrl: './lists.component.scss',
  providers: [DecimalPipe,DatePipe] 
   
})
export class ListsComponent implements OnInit{

constructor(private productService:ProductService,
           private alertifyService:AlertifyService,
           private dialogService :DialogService,
           private decimalPipe: DecimalPipe,
           private datePipe: DatePipe 
           
          ){}
displayedColumns: string[] = ['categoryId', 'productCode', 'productName','price' ,'createdDate','quantity','feature1','feature2','manufactureDate','photos','delete'];
dataSource : MatTableDataSource<List_Product> = null;

@ViewChild(MatPaginator) paginator: MatPaginator;
async getProducts(){
   const allProducts:{totalCount:number; products:List_Product[]}= await this.productService.read(this.paginator ? this.paginator.pageIndex:0,this.paginator ? this.paginator.pageSize:5)
    this.dataSource=new MatTableDataSource<List_Product>(allProducts.products);
    this.paginator.length=allProducts.totalCount;
    //this.dataSource.paginator = this.paginator;
}

formatPrice(price: number): string {
  return `${this.decimalPipe.transform(price, '1.2-200000')} TL`; // Format price with 'TL' symbol
}

formatDate(date: string): string {
  return this.datePipe.transform(date, 'yyyy-MM-dd'); // Format date to 'yyyy-MM-dd'
}

addProductImages(id: number){
   this.dialogService.openDialog({
    componentType:SelectProductImageDialogComponent,
    data:id,
    options:{
      width:"1200px"
    }
   });
}
async pageChanged(){
  await this.getProducts();
}
async ngOnInit(){
 await this.getProducts();
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

}

}
