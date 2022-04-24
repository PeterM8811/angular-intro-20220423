import {Pipe, PipeTransform} from '@angular/core';
import {User} from './users/model/user';

@Pipe({name: 'sort'})
export class SortPipe implements PipeTransform {
  transform(
    array: User[],
    property: keyof User,
  ): User[] {
    return array.sort(
      (first: User, second: User) => {
        const firstProperty = first[property].toString();
        const secondProperty = second[property].toString();
        
        return firstProperty.localeCompare(
          secondProperty
        
        );
      },
    );
  }
}
