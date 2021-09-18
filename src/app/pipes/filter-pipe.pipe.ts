import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';
import { Color } from '../models/color';
import { CarDetailDto } from '../models/dto/carDetailDto';

@Pipe({
  name: 'filterPipe'
})

export class FilterPipePipe implements PipeTransform {
  transform<T>(value: T[] ,filterText:string,_?:any): T[] {
    if (_) {
      filterText = filterText?filterText.toLocaleLowerCase():""
      return filterText?value.filter((b:any)=>b.carName.toLocaleLowerCase().indexOf(filterText)!==-1) :value
    }
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((b:any)=>b.name.toLocaleLowerCase().indexOf(filterText)!==-1) :value
  }
}
