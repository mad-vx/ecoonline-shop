import { Component } from '@angular/core';
import { BasketComponent } from "./components/basket/basket.component";

@Component({
  selector: 'app-root',
  imports: [BasketComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ecoonline-shop';
}
