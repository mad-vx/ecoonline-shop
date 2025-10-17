import { Component, inject, input } from '@angular/core';
import { ShopItem } from '../../model/Dtos/shop-item.model';
import { BasketService } from '../../services/basket-service';
import { ShopItemViewModel } from '../../model/ViewModels/shop-item-view-model';
import { ToCurrencyPipe } from "../../pipes/to-currency.pipe";

@Component({
  selector: 'app-shop-item',
  imports: [ToCurrencyPipe],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {
  readonly shopItemVM = input.required<ShopItemViewModel>();
  readonly basketService = inject(BasketService);
  
  addToBasket(item: ShopItem): void {
    this.basketService.basketViewModel()?.addToBasket(item);
  }
}
