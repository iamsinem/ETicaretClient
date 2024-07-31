import { Injectable } from "@angular/core";
import { HttpClientService } from "../http-client.service";
import { Create_Customer } from "../../../contracts/create_customer";



@Injectable({
    providedIn:'root'
})

export class CustomerService{

    constructor(private httpClientservice: HttpClientService){}

    createCustomer(customer:Create_Customer,successCallBack?:any){
     this.httpClientservice.post({
        controller:"customer"
     },customer).subscribe(result=>{
        successCallBack();
     });
    }
}