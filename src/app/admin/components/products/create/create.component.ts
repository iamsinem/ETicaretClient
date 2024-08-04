import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../../services/common/models/product.service';
import { Create_Product } from '../../../../contracts/create_product';

//import { NgxSpinner, NgxSpinnerService } from 'ngx-spinner';
import { AlertifyService, MessageType, Position } from '../../../../services/admin/alertify.service';
import { BasketsComponent } from '../../../../ui/components/baskets/baskets.component';
import { FileUploadOptions } from '../../../../services/common/file-upload/file-upload.component';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})

export class CreateComponent implements OnInit{


  selectedCategory: string = 'one'; // Varsayılan değer
  categoryId: number = 1; // Varsayılan değer

  updateCategoryId() {
    switch (this.selectedCategory) {
      case 'one':
        this.categoryId = 1;
        break;
      case 'two':
        this.categoryId = 2;
        break;
      case 'three':
        this.categoryId = 3;
        break;
      case 'four':
        this.categoryId = 4;
        break;
      case 'five':
        this.categoryId = 5;
        break;
      default:
        this.categoryId = 1;
    }
  }


  constructor( private ProductService: ProductService, private alertify: AlertifyService){
    
  }
 
  ngOnInit(): void {
    
  }

  @Output()createdProduct: EventEmitter<Create_Product>=new EventEmitter();
  @Output() fileUploadOptions:Partial<FileUploadOptions>={
    action:"upload",
    controller:"products",
    explanation:"Select images...",
    isAdminPage: true,
    accept:".png, .jpg, .jpeg"
  };
  create(Name:HTMLInputElement, Code:HTMLInputElement, Price:HTMLInputElement, Quantity:HTMLInputElement, Feature1:HTMLInputElement, Feature2:HTMLInputElement, CategoryId: HTMLInputElement){
    //this.showSpinner(SpinnerType.SquareJellyBox)
    const create_product: Create_Product = new Create_Product();
    create_product.productName = Name.value;
    create_product.productCode = Code.value;
    create_product.price = parseFloat(Price.value);
    create_product.quantity = parseInt(Quantity.value);
    create_product.feature1 = Feature1.value;
    create_product.feature2 = Feature2.value;
    create_product.categoryId = parseInt(CategoryId.value)

    if(!Name.value){
      this.alertify.message("Please Enter Product Name!!",
        {
          dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
        });
        return;
    }
    
    if(parseInt(Quantity.value)<0){
      this.alertify.message("Please Enter Valid Stock Information!!",
        {
          dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
        });

        return;
    }
    this.ProductService.create(create_product, () => {
     // this.hideSpinner(SpinnerType.SquareJellyBox);
      this.alertify.message("The product has been added successfully.", {
        dismissOthers: true,
        messageType: MessageType.Success,
        position: Position.TopRight
      });
      this.createdProduct.emit(create_product);
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