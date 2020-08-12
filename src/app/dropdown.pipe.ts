import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dropdown'
})
export class DropdownPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
