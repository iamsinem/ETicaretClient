import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
//import { Product } from '../../../contracts/create_product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent implements OnInit {
 
  constructor(private httpClientService:HttpClientService){
  }

  ngOnInit(): void {
   /*this.httpClientService.get<Product>({
      controller: "products"
      }).subscribe(data=>console.log(data));*/

   /*this.httpClientService.post({
      controller:"products"
    },{
      ProductName : "SamsungA21S",
      Price : 1500,
      ProductCode : "SMSNGA21S",
      Quantity : 5 ,
      ManufactureDate : new Date('2023-01-01') ,
      Feature1 : "64MB",
      Feature2 : "SİYAH",
      CategoryId : "1"
    }).subscribe();*/

  /*this.httpClientService.put({
    controller: "products",
  },{
    id:3,
    ProductName : "Iphone13",
    Price : 38500,
    ProductCode : "IP13",
    Quantity : 47 ,
    Feature1 : "128MB",
    Feature2 : "SİYAH",
    CategoryId : "2"

  }).subscribe();*/

    
  /*this.httpClientService.delete({
    controller: "products",
  },4).subscribe();*/
  }
}
