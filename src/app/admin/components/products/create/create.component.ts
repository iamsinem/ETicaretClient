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

  constructor( private ProductService: ProductService, private alertify: AlertifyService){
    
  }
 
  ngOnInit(): void {
    
  }

  @Output()createdProduct: EventEmitter<Create_Product>=new EventEmitter();
  @Output() fileUploadOptions:Partial<FileUploadOptions>={
    action:"upload",
    controller:"products",
    explanation:"Resimleri seçiniz...",
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
      this.alertify.message("Lütfen Ürün Adını Girin !!",
        {
          dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
        });
        return;
    }
    
    if(parseInt(Quantity.value)<0){
      this.alertify.message("Lütfen Geçerli Stok Bilgisi Girin !!",
        {
          dismissOthers: true,
        messageType: MessageType.Error,
        position: Position.TopRight
        });

        return;
    }
    this.ProductService.create(create_product, () => {
     // this.hideSpinner(SpinnerType.SquareJellyBox);
      this.alertify.message("Ürün başari ile eklenmistir", {
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