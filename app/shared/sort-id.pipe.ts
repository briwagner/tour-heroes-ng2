import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortId'
})
export class SortIdPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return value.slice(0,6);
    }
  }