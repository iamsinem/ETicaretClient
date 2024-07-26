import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']  // Dizi olmalı
})
export class AppComponent {
  title = 'ETicaretClient';
constructor(){
}
}

//$.get("https://localhost:7234/api/products")
