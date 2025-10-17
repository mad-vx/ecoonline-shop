import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Basket } from '../model/basket-item';

@Injectable({ providedIn: 'root' })
export class BasketService {
  private http = inject(HttpClient);
  private base = 'http://localhost:5249/api/basket'; 

  getBasket() {
    return this.http.get<Basket>(`${this.base}/basket`);
  }
}