import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCurrency',
  standalone: true
})
export class ToCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return `£${value.toFixed(2)}`;
  }

}
