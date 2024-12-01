import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyText',
  standalone: true
})
export class EmptyTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'string') {
      if(!value.length) {
        return "-"
      }
    }
    return value;
  }

}
