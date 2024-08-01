import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Create_Customer } from '../../../contracts/create_customer';
import { error } from 'node:console';
import { HttpErrorResponse } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { List_Customer } from '../../../contracts/list_customer';


@Injectable({
    providedIn:'root'
})

export class CustomerService{

    constructor(private httpClientservice: HttpClientService){
        
    }

    createCustomer(customers: Create_Customer, successCallBack?: ()=>void, errorCallBack?: (errorMessage:string)=>void){
        this.httpClientservice.post({
          controller:"customers"
        },customers).subscribe(result => {
          successCallBack();
        }, (errorResponse:HttpErrorResponse)=>{
          const _error:Array<{key:string,value:Array<string>}>=errorResponse.error;
          let message="";
          _error.forEach((v,index)=>{
         v.value.forEach((_v,_index)=>{
          message+=`${_v}<br>`;
          });
          });
          errorCallBack(message);
        });
    }

    async read(page:number=0, size:number=5,successCallBack?:()=>void, errorCallBack?:(errorMessage:
        string)=> void):Promise<{totalCount:number; customers:List_Customer[]}>{
         const promiseData: Promise<{totalCount:number; customers:List_Customer[]}>=  this.httpClientservice.get<{totalCount:number; customers:List_Customer[]}>({
            controller:"customers",
            queryString:`page=${page}&size=${size}`
      
          }).toPromise();
      
          promiseData.then(d=> successCallBack())
          .catch((errorResponse:HttpErrorResponse)=> errorCallBack(errorResponse.message))
      
          return await promiseData;
        }
}