import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dateAsISO'
})
export class DateAsISOPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    let ISO = ""
    ISO = value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    return ISO;
  }

}
