import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFave'
})
export class GetFavePipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return value.sort( (a, b) => b.faves - a.faves )
                  .slice(0, args);
    }
  }