import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shared3'
})
export class Shared3Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
