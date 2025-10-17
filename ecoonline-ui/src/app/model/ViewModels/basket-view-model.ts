import { computed, signal } from '@angular/core';
import { BasketItemViewModel } from './basket-item-view-model';
import { ShopItem } from '../Dtos/shop-item.model';

export class BasketViewModel {
  readonly items = signal<BasketItemViewModel[]>([]);

  readonly subtotal = computed(() =>
    +this.items().reduce((s, x) => s + x.priceAfterDiscount() * x.quantity(), 0).toFixed(2)
  );

  readonly subtotalAfterDiscountsInItem = computed(() =>
    +this.items().reduce((s, x) => s + x.lineTotal(), 0).toFixed(2)
  );

  constructor(dtos: ShopItem[] = []) {
    this.items.set(dtos.map(d => new BasketItemViewModel(d)));
  }

  addToBasket(item: ShopItem) {
    const list = this.items();
    const existingIndex = list.findIndex(x => x.data.id === item.id);
    if (existingIndex >= 0) {
      list[existingIndex] = new BasketItemViewModel({ 
        ...list[existingIndex].data, ...item}, 
        list[existingIndex].quantity() + 1);
      this.items.set([...list]);
    } else {
      this.items.set([...list, new BasketItemViewModel({...item }, 1)]);
    }
  }

  removeFromBasket(id: number) {
    const list = this.items();
    const index = list.findIndex(x => x.data.id === id);

    if (index === -1) return;

    const item = list[index];
    const currentQty = item.quantity();

    if (currentQty > 1) {
        item.quantity.set(currentQty - 1);
        this.items.set([...list]);
    } else {
        const updated = list.filter(x => x.data.id !== id);
        this.items.set(updated);
    }
  }

  toDto(): { items: ShopItem[] } {
    return { items: this.items().map(x => x.toDto()) };
  }
}