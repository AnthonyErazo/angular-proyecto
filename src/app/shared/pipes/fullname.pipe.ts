import { Pipe, PipeTransform } from '@angular/core';
import { Alums } from 'src/app/models';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {

  transform(value: Alums, ...args: unknown[]): unknown {
    const firstArg=args[0];
    const result=`${value.name} ${value.lastName}`
    switch(firstArg){
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();
      default:
        return 'Invalid args';
    }
  }

}
