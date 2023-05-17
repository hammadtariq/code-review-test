import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getMissingNumber(numbers: number[]) {
    var numbersSorted = numbers.sort();

    for (var i = 1; i < numbers.length; i++) {
      var currentnumber = numbersSorted[i - 1];

      if (currentnumber !== i) {
        return i;
      }
    }
    
    return -1;
  }
}
