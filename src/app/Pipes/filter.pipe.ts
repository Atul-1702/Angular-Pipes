import {Pipe,PipeTransform} from '@angular/core';
import { Student } from '../Models/student.model';

@Pipe({
    name:'filter',
    pure:false,
})
export class FilterPipe implements PipeTransform{

    transform(record: Student[],filterBy:string) {
        console.log("Filter Pipe Called");
        
        if(filterBy=="All" || record.length==0)
        {
            return record;
        }
        else
        {
           return record.filter((std)=>
            {
                return std.gender==filterBy;
            }
            )
        }
    }

}