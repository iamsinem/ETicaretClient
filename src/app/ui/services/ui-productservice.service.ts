
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UiList_Product } from '../uicontracts/listProduct';
import { HttpClientService } from '../../services/common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class UiProductService {
  
  constructor(private httpClientService: HttpClientService) { }

  async read(
    page: number = 0,
    size: number = 5,
    successCallBack?: () => void,
    errorCallBack?: (errorMessage: string) => void
  ): Promise<{ totalCount: number; products: UiList_Product[] }> {
    try {
      const response = await this.httpClientService.get<{ totalCount: number; products: UiList_Product[] }>({
        controller: 'products',
        queryString: `page=${page}&size=${size}`
      }).toPromise();

      if (successCallBack) {
        successCallBack();
      }

      return response;
    } catch (error) {
      if (errorCallBack) {
        const errorMessage = (error as HttpErrorResponse).message || 'Bilinmeyen bir hata oluştu';
        errorCallBack(errorMessage);
      }

      throw error; // İsteğe bağlı olarak hatayı yeniden fırlatabilirsiniz
    }
  }
}

