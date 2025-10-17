import { Component, DestroyRef, inject, signal } from '@angular/core';
import { ShopService } from '../../services/shop-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ShopItem } from '../../model/Dtos/shop-item.model';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { BasketComponent } from '../basket/basket.component';
import { ShopItemViewModel } from '../../model/ViewModels/shop-item-view-model';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [BasketComponent, ShopItemComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  private shopService = inject(ShopService);
  private destroyRef = inject(DestroyRef);

  shopItemsVM = signal<ShopItemViewModel[] | undefined>(undefined);

  constructor() {
    this.shopService.getItems()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((items: ShopItem[]) => {
      this.shopItemsVM.set(items.map((item: ShopItem) => new ShopItemViewModel(item)));
    })
  }
}
