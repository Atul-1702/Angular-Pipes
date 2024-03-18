import {Injectable} from '@angular/core';
import { Student } from '../Models/student.model';

@Injectable({
    providedIn:'root'
})
export class StudentService{

    students:Student[]=[
        new Student(1,'Atul Kumar','Male',new Date("2002-02-26"),'B.C.A',429,17250),
        new Student(2,'Ankit Anand','Male',new Date("2003-11-29"),'B.C.A',466,30000),
        new Student(3,'rajit ANKIt sRM','Male',new Date("2001-03-02"),'B.Tech',429.356,60000),
        new Student(4,'KisHor kunal','Male',new Date("2001-02-26"),'M.Tech',446,70000),
        new Student(5,'Swati Mishra','Female',new Date("2002-05-24"),'Maithli',500,7000),
        new Student(6,'Priti Kumari','Female',new Date("1998-11-02"),'M.A. Hindi',422,7200),
    ]
    onInsertNewStudent(name:string,gender:string,dob:string,course:string,marks:string,fees:string)
    {
        let s:Student= new Student(this.students.length+1,name,gender,new Date(dob),course,Number(marks),Number(fees));
        this.students.push(s);
    }
}