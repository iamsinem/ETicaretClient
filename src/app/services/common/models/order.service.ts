import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse } from '@angular/common/http';
import { List_Order } from '../../../contracts/list_order';


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClientservice: HttpClientService) { }

  async read(page:number=0, size:number=5,successCallBack?:()=>void, errorCallBack?:(errorMessage:
    string)=> void):Promise<{totalCount:number; orders:List_Order[]}>{
     const promiseData: Promise<{totalCount:number; orders:List_Order[]}>=  this.httpClientservice.get<{totalCount:number; orders:List_Order[]}>({
        controller:"orders",
        queryString:`page=${page}&size=${size}`
  
      }).toPromise();
  
      promiseData.then(d=> successCallBack())
      .catch((errorResponse:HttpErrorResponse)=> errorCallBack(errorResponse.message))
  
      return await promiseData;
    }
}
