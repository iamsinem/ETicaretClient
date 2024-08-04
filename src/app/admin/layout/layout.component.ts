import { Component, OnInit } from '@angular/core';
import { AlertifyService, MessageType, Position } from '../../services/admin/alertify.service';
import { Router, NavigationEnd } from '@angular/router';
declare var alertify: any

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit {
  showSidebar: boolean = false;
  constructor(private alertify: AlertifyService, private router: Router){}
  ngOnInit(): void {
    this.alertify.message("merhaba",{
      messageType: MessageType.Success,
      delay: 5,
      position: Position.TopRight

    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.url);
      }
    });
    
  }
  checkRoute(url: string) {
    // Örneğin, sidebar'ın görünmesini istemediğiniz sayfa '/login' ise
    this.showSidebar = url !== '/login';
  }

}