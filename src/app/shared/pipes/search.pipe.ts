import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByField'
})
export class SearchPipe implements PipeTransform {

  normalize(value: string) {
    return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  
  transform(components: any[], args: any): any {
    var val = args;

    if(val) {
      return components.filter((component)=> {
          return (this.normalize(component.name).toLowerCase().indexOf(this.normalize(val).toLowerCase())!== -1);
      });
    }
    
    return components;
  }
}