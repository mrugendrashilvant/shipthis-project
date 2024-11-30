import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snake2Sentence',
  standalone: true
})
export class Snake2SentencePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value === 'string') {
      return value.replace(/^_*(.)|_+(.)/g, (s, c, d) => c ? c.toUpperCase() : ' ' + d.toUpperCase())
    }
    return value;
  }

}
