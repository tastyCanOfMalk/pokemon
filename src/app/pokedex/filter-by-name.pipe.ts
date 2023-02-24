import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe implements PipeTransform {

  transform(listOfPokemon: any[], searchString: string): any[] {
    return listOfPokemon.filter(p => p.name.includes(searchString));
  }

}
