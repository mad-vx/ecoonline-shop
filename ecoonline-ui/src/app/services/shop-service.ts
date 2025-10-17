import { Injectable, inject } from '@angular/core';
import { ApiService } from './api-service';
import { Observable } from 'rxjs';
import { ShopItem } from '../model/Dtos/shop-item.model';

@Injectable({ providedIn: 'root' })
export class ShopService {
  private http = inject(ApiService);

  getItems(): Observable<ShopItem[]> {
    return this.http.get<ShopItem[]>('shop/items');
  }
}