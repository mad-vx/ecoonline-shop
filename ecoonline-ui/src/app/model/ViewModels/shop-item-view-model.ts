import { computed, signal } from '@angular/core';
import { ShopItem } from '../Dtos/shop-item.model';

export class ShopItemViewModel {
  readonly data: Readonly<ShopItem>;

  readonly selected = signal(false);
  readonly inBasketQuantity = signal(0); 
  readonly isDiscounted = signal(false);
  readonly priceAfterDiscount = computed(() => {

    const d = this.data.discountPercentage;
    return +(this.data.price * (1 - d / 100)).toFixed(2);
  });

  constructor(dto: ShopItem) {
    this.data = Object.freeze({ ...dto });
    this.isDiscounted.set(this.data.discountPercentage !== 0);
  }

  toDto(): ShopItem {
    return { ...this.data };
  }
}