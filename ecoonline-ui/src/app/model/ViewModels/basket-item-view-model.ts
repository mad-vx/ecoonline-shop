import { computed, signal } from '@angular/core';
import { ShopItem } from '../Dtos/shop-item.model';

export class BasketItemViewModel {
  readonly data: Readonly<ShopItem>;

  quantity = signal(0);

  readonly priceAfterDiscount = computed(() => {
    const d = this.data.discountPercentage;
    return +(this.data.price * (1 - d / 100)).toFixed(2);
  });

  readonly lineTotal = computed(() => {
    return +(this.priceAfterDiscount() * this.quantity()).toFixed(2);
  });

  constructor(dto: ShopItem, quantity: number = 0) {
    this.data = Object.freeze({ ...dto });
    this.quantity.set(quantity);
  }

  toDto(): ShopItem {
    return { ...this.data };
  }
}