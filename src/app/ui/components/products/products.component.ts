import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
import { ListProductComponent } from './list-product/list-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  constructor(private httpClientService:HttpClientService){
   
  }

  ngOnInit(): void {
        
    }
}
