import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, signal, ViewChild ,Output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { merge } from 'rxjs';
import { Create_Customer } from '../../../../contracts/create_customer';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { CustomerService } from '../../../../services/common/models/customer.service';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCustomerComponent implements OnInit {
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');
  


  constructor(private alertify: AlertifyService, 
    private CustomerService:CustomerService)
     {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());

      console.log(this.CustomerService);
  }

 
updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  protected readonly value = signal('');

  protected onInput(event: Event) {
    this.value.set((event.target as HTMLInputElement).value);
  }

  ngOnInit(): void {
    // Initialize any data or perform setup tasks here
  }
@Output()createdProduct: EventEmitter<Create_Customer>=new EventEmitter();
  createCustomer(name: HTMLInputElement, surname: HTMLInputElement, phoneNumber: HTMLInputElement, email: HTMLInputElement, address: HTMLInputElement, tcNo: HTMLInputElement, birthDate: HTMLInputElement) {
    const create_customer: Create_Customer=new Create_Customer();

    create_customer.name=name.value;
    create_customer.surname=surname.value;
    create_customer.phoneNumber=parseInt(phoneNumber.value);
    create_customer.email=email.value;
    create_customer.address=address.value;
    create_customer.tcNo=parseInt(tcNo.value);
    create_customer.birthDate=new Date(birthDate.value);

    this.CustomerService.createCustomer(create_customer, () => {
      // this.hideSpinner(SpinnerType.SquareJellyBox);
       this.alertify.message("Ürün başari ile eklenmistir", {
         dismissOthers: true,
         messageType: MessageType.Success,
         position: Position.TopRight
       });
       this.createdProduct.emit(create_customer);
     },errorMessage=>{
       this.alertify.message(errorMessage,{
         dismissOthers:true,
         messageType:MessageType.Error,
         position:Position.TopRight
       })
     }
   );
  }
}
