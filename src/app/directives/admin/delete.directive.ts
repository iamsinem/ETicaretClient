import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { HttpClientService } from '../../services/common/http-client.service';
import { ProductService } from '../../services/common/models/product.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent, DeleteState } from '../../dialogs/delete-dialog/delete-dialog.component';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../services/common/dialog.service';

declare var $: any;

@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(
    private element: ElementRef,
    private _renderer: Renderer2,
    private httpClientService:HttpClientService,
    public dialog: MatDialog,
    private alertifyService : AlertifyService,
    private dialogService:DialogService
  ) {
    const img = _renderer.createElement("img")
    img.setAttribute("src","../../../../../assets/delete.png");
    img.setAttribute("style","cursor: pointer;");
    img.width = 25;
    img.height = 25;
    _renderer.appendChild(element.nativeElement, img)
   }

   @Input() id: number;
   @Input() controller: string;
   @Output() callback : EventEmitter<any> = new EventEmitter();

   @HostListener("click")
   async onClick(){
    this.dialogService.openDialog({
      componentType:DeleteDialogComponent,
      data:DeleteState.Yes,
      afterClosed:async() =>{
        console.log(this.id)
        const td: HTMLTableCellElement = this.element.nativeElement;
        this.httpClientService.delete({
          controller:this.controller
        },this.id).subscribe(data=>{
          $(td.parentElement).fadeOut(700, ()=>{
            this.callback.emit();
            this.alertifyService.message("Product Successfully Deleted!",{
              dismissOthers:true,
              messageType:MessageType.Success,
              position:Position.TopRight
           })
        });
        },(errorResponse:HttpErrorResponse)=>{
          this.alertifyService.message("An error was encountered while deleting the product!",{
            dismissOthers:true,
            messageType:MessageType.Error,
            position:Position.TopRight
         })
        });
      }
      });
   }

   /*openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '250px',
      data: DeleteState.Yes,
    });

    dialogRef.afterClosed().subscribe(result => {
     if(result == DeleteState.Yes){
      afterClosed();
     }
    });
  }*/

}
