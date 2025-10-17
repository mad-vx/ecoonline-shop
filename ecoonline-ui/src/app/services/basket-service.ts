import { Injectable, inject, signal } from '@angular/core';
import { ApiService } from './api-service';
import { Basket } from '../model/Dtos/basket.model';
import { BasketViewModel } from '../model/ViewModels/basket-view-model';

@Injectable({ providedIn: 'root' })
export class BasketService {
  private http = inject(ApiService);

  public basketViewModel = signal<BasketViewModel | undefined>(undefined);

  constructor() {
    this.http.get<Basket>('basket/basket').subscribe((basket: Basket) => {
      this.basketViewModel.set(new BasketViewModel(basket.items));
    });
  }

}