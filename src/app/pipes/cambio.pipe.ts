import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cambio'
})
export class CambioPipe implements PipeTransform {

  transform(value: boolean): any {
    return value ? 'si' : 'no';
  }

}