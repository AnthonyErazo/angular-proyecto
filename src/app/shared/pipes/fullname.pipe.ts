import { Pipe, PipeTransform } from '@angular/core';
import { Alums } from 'src/app/dashboard/pages/users/models/usersModels';

@Pipe({
  name: 'fullname'
})
export class FullnamePipe implements PipeTransform {
  private capitalizeFirstLetter(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  private toSentenceCase(text: string): string {
    const words = text.split(' ');
    const sentenceCaseWords = words.map(word => this.capitalizeFirstLetter(word));
    return sentenceCaseWords.join(' ');
  }

  transform(value: Alums, ...args: unknown[]): unknown {
    const firstArg=args[0];
    const result=`${value.name} ${value.lastName}`
    switch(firstArg){
      case 'lowercase':
        return result.toLowerCase();
      case 'uppercase':
        return result.toUpperCase();
      case 'capitalizeFirstLetter':
        const sentenceCaseText = this.toSentenceCase(result);
        return sentenceCaseText;
      default:
        return 'Invalid args';
    }
  }

}
