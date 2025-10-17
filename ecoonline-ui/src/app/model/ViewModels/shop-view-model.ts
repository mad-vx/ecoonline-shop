import { computed, signal } from '@angular/core';
import { ShopItemViewModel } from './shop-item-view-model';
import { ShopItem } from '../Dtos/shop-item.model';

export class ShopViewModel {
  readonly items = signal<ShopItemViewModel[]>([]);

  constructor(dtos: ShopItem[] = []) {
    this.items.set(dtos.map(d => new ShopItemViewModel(d)));
  }

  findById(id: number) {
    return this.items().find(x => x.data.id === id);
  }

  setItems(dtos: ShopItem[]) {
    this.items.set(dtos.map(d => new ShopItemViewModel(d)));
  }

  toDto(): { items: ShopItem[] } {
    return { items: this.items().map(x => x.toDto()) };
  }
}