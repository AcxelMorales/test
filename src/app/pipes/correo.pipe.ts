import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class CorreoPipe implements PipeTransform {

  transform(email:string): string {    
     return email.replace(/[a-z0-9\-_.]+@/ig, (c) => c.substring(0, 1) + c.split('').slice(1, -1).map(v => '*').join('') + '@');
  }

}
