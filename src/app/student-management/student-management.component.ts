import { Component,ElementRef,ViewChild,inject } from '@angular/core';
import { faTrash,faPenToSquare,faPlus,faFloppyDisk,faXmark } from '@fortawesome/free-solid-svg-icons';
import { Student } from '../Models/student.model';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.css']
})
export class StudentManagementComponent {

   plus_status:boolean=false;
   edit=faPenToSquare;
   delete=faTrash;
   plus=faPlus;
   save=faFloppyDisk;
   cancel=faXmark;
   studentService:StudentService=inject(StudentService);
   studentRecord:Student[]=this.studentService.students;
   filterBy:string='All';
   selectedStudent:number=this.studentService.students.length;
   @ViewChild('name') name:ElementRef;
   @ViewChild('gender') gender:ElementRef;
   @ViewChild('dob') dob:ElementRef;
   @ViewChild('course') course:ElementRef;
   @ViewChild('marks') marks:ElementRef;
   @ViewChild('fees') fees:ElementRef;
   totalStudents=new Promise((resolve,reject)=>
   {
          setTimeout(()=>{
             resolve(this.studentRecord.length);
          },5000);
   }
   )
   onEditIconClicked(i:number)
   {
      this.selectedStudent=i;
   }
   getViewChildData(element:ElementRef)
   {
        return element.nativeElement.value;
   }
   onSaveIconClicked(index:number)
   {
      this.studentService.students[index].name=this.getViewChildData(this.name);
      this.studentService.students[index].gender=this.getViewChildData(this.gender);
      this.studentService.students[index].dob=this.getViewChildData(this.dob);
      this.studentService.students[index].course=this.getViewChildData(this.course);
      this.studentService.students[index].marks=Number(this.getViewChildData(this.marks));
      this.studentService.students[index].fees=this.getViewChildData(this.fees);
      this.selectedStudent=this.studentService.students.length;
   }
   onCancelIconClicked()
   {
      this.selectedStudent=this.studentService.students.length;
   }
   onPlusIconClicked()
   {
      this.plus_status=!this.plus_status;
   }
   onNewEntryIconClicked()
   {
      let name=this.getViewChildData(this.name);
      let gender=this.getViewChildData(this.gender);
      let dob=this.getViewChildData(this.dob);
      let course=this.getViewChildData(this.course);
      let marks=this.getViewChildData(this.marks);
      let fees=this.getViewChildData(this.fees);
      this.studentService.onInsertNewStudent(name,gender,dob,course,marks,fees);
      this.plus_status=!this.plus_status;
      this.selectedStudent=this.studentService.students.length;
   }
   onCancelnewRecord()
   {
      this.plus_status=!this.plus_status;
   }
}

