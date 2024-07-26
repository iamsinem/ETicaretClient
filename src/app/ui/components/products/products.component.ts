import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit{
  constructor(private httpClientService:HttpClientService){
    console.log(2)
  }

  ngOnInit(): void {
    console.log(1)
    this.httpClientService.get({
      controller: "products"
      }).subscribe(data=>console.log(data))

    
    }
}
