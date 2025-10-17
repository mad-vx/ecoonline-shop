import { Component, DestroyRef, inject, OnInit, signal } from '@angular/core';
import { BasketService } from '../../services/basket-service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Basket } from '../../model/basket-item';

@Component({
  selector: 'app-basket',
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  private basketService = inject(BasketService);
  private destroyRef = inject(DestroyRef);

  basket = signal<Basket | undefined>(undefined);

  ngOnInit(): void {
    this.basketService.getBasket()
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe((basket: Basket) => {
      this.basket.set(basket);
    })
  }
}
