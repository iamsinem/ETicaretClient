import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClientService } from '../../../services/common/http-client.service';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { Create_Customer } from '../../../contracts/create_customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {

  /**
   *
   */
  constructor(private httpClientService:HttpClientService) {
  }

  ngOnInit(): void {
    
  }

  @ViewChild(ListCustomerComponent) ListCustomerComponent: ListCustomerComponent
  createdProduct(createdCustomer:Create_Customer)
  {
     this.ListCustomerComponent.getCustomer();
  }

/*createdCustomer($event: Event) {
throw new Error('Method not implemented.');
}*/

}
