
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'upper',
    
})
export class UpperPipe implements PipeTransform{

   transform(value: string) {
       console.log("Upper Pipe Called");
       return value.toUpperCase();
   }
}