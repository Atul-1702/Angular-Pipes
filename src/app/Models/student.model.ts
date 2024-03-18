
export class Student{
    id:number;
    name:string;
    gender:string;
    dob:Date;
    course:string;
    marks:number;
    totalMarks:number=500;
    fees:number;
    constructor(id:number,name:string,gender:string,dob:Date,course:string,marks:number,fees:number)
    {
       this.id=id;
       this.name=name;
       this.gender=gender;
       this.dob=dob;
       this.course=course;
       this.marks=marks;
       this.fees=fees;
    }
}