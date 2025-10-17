import { Component, computed, inject } from '@angular/core';
import { BasketService } from '../../services/basket-service';
import { ShopItem } from '../../model/Dtos/shop-item.model';
import { ToCurrencyPipe } from '../../pipes/to-currency.pipe';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [ToCurrencyPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent {
  private basketService = inject(BasketService);

  basketVM = computed(() => this.basketService.basketViewModel());

  removeFromBasket(item: ShopItem) {
    this.basketVM()?.removeFromBasket(item.id);
  }
}
