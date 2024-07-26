import { Injectable } from '@angular/core';
declare var alertify: any;
@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  message(message: string, options: Partial<alertifyOptions>){
    alertify.set('notifier', 'delay', options.delay);
    alertify.set('notifier', 'position', options.position);
    const msj = alertify[options.messageType](message);
    if(options.dismissOthers)
      msj.dismissOthers();
  }

  dismiss(){
    alertify.dismiss();
  }
}

export enum MessageType{
  Error = "error",
  Message = "message",
  Notify = "notify",
  Success = "success",
  Warning = "warning"
}

export enum Position{
TopCenter = "top-center",
TopRight = "top-right",
TopLeft = "top-left",
BottomRight = "bottom-right",
BottomCenter = "bottom-center",
BottomLeft = "bottom-left"
}

export class alertifyOptions{
  messageType: MessageType = MessageType.Message;
  position: Position = Position.BottomLeft;
  delay: number = 3;
  dismissOthers: boolean = false;
}