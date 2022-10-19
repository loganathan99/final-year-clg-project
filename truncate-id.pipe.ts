import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateId',
})
export class TruncateIdPipe implements PipeTransform {
  transform(value: string): string {
    return value.slice(15, 8);
  }
}
