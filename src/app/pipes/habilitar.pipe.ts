import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habilitar'
})
export class HabilitarPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}