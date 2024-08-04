import { Component } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  constructor(private httpClientService:HttpClientService){
   
  }
}
