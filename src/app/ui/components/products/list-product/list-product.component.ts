import { Component, OnInit,ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UiProductService } from '../../../services/ui-productservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { UiList_Product } from '../../../uicontracts/listProduct';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-list-product',
  templateUrl:'./list-product.component.html',
  styleUrl: './list-product.component.scss',


})
export class ListProductComponent implements OnInit{

  constructor(private uiproductservice:UiProductService,
              private route:ActivatedRoute
  ){}
  

  dataSource: MatTableDataSource<UiList_Product>= new MatTableDataSource<UiList_Product>();
  displayedColumns: string[] = ['productCode', 'productName', 'price', 'manufactureDate', 'quantity', 'feature1', 'feature2'];


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  async getProducts(){
    const allProducts:{totalCount:number; products:UiList_Product[]}= await this.uiproductservice.read(this.paginator ? this.paginator.pageIndex:0,this.paginator ? this.paginator.pageSize:5)
     this.dataSource=new MatTableDataSource<UiList_Product>(allProducts.products);
     this.paginator.length=allProducts.totalCount;
     //this.dataSource.paginator = this.paginator;
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

