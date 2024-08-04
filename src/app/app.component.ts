import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Dizi olmalı
})
export class AppComponent implements OnInit {
  title = 'ETicaretClient';

  showSidebar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
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

//$.get("https://localhost:7234/api/products")
