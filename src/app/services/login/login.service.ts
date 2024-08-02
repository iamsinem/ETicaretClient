import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseurl: string = "https://localhost:7126/api/ShopAssistant/login";

  constructor(private http: HttpClient) { }

  login(loginObj: any): Observable<any> {
    return this.http.post<any>(`${this.baseurl}`, loginObj);
  }
}
