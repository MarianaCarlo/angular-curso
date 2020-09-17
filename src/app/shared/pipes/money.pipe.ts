import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: string): any {
    if (value === 'internacional'){
      return '$';
    } else if (value === 'nacional'){
      return 'Bs.';
    } else {
      return 'nin';
    }
  }

}
