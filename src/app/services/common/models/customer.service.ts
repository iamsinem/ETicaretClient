import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Customer } from '../../../contracts/create_customer';
import { error } from 'node:console';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';


@Injectable({
    providedIn:'root'
})

export class CustomerService{



    constructor(private httpClientservice: HttpClientService){
        
    }

    createCustomer(customer: Create_Customer, successCallBack?: ()=>void, errorCallBack?: (errorMessage:string)=>void){
        this.httpClientservice.post({
          controller:"customer"
        },customer).subscribe(result => {
          successCallBack();
        }, (errorResponse:HttpErrorResponse)=>{
          const _error:Array<{key:string,value:Array<string>}>=errorResponse.error;
          let message="";
          /*_error.forEach((v,index)=>{
         v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`;
          });
          });
          errorCallBack(message);*/
        });
    }
}