
import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'decimal'
})
export class DecimalPipe implements PipeTransform{

    transform(n: number,min_digit:number,max_digit:number) {
        let value=n.toString();
        let total=value.length;
        let decimal_length=0;
        for(let i=0;i<total;i++)
        {
            if(value[i]=='.')
            {
               decimal_length=total-i-1;
               break;
            }
        }
        if(decimal_length<min_digit)
        {
             return n.toFixed(min_digit);
        }
        if(decimal_length<=max_digit)
        {
             return n;
        }
        return n.toFixed(max_digit);
    }
}