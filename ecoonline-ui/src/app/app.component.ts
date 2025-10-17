import { Component } from '@angular/core';
import { ShopComponent } from './components/shop/shop.component';

@Component({
  selector: 'app-root',
  imports: [ShopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecoonline-shop';
}
