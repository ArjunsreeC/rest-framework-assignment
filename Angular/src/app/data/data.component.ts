import { Component , OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  providers: [ApiService],
})

export class DataComponent{

 searchText = '';
 names=[];
 i=0;

  students = [{regno:'1'}, {name:'test'}, {email:'test@gmail.com'}];
  s = [{regno:'1'}, {name:'test'}, {email:'test@gmail.com'}];
  selectedStudent = {id: -1, regno:'', name:'', email:''};
  EditFlag:boolean=false;

  toggleEdit(){
    this.EditFlag = true;
  }

  toggleRemoveEdit(){
    this.EditFlag = false;
  }

  constructor(private api: ApiService) {
    this.getStudents();
  }

  getStudents = () => {
    this.api.getAllStudents().subscribe(
      data => {
        this.students = data;
        for (let s of this.students){
          this.names[this.i++]=s.name;
        }
      },
      errors => {
        console.log(errors);
      })
    }

    studentClicked = (student) => {
      this.api.getOneStudent(student.regno).subscribe(
        data => {
          this.selectedStudent = data;
        },
        errors => {
          console.log(errors);
        })
      }

      updateStudent = (student) => {
        this.api.putStudent(this.selectedStudent).subscribe(
          data => {
            console.log("Student Updated Successfully");
            this.EditFlag = false;
            this.getStudents();
          },
          errors => {
            console.log(errors);
          })
      }

      createStudent = () => {
        this.api.postStudent(this.selectedStudent).subscribe(
          data => {
            this.students.push(data);
            console.log("Student Created Successfully");
            this.EditFlag = false;
          },
          errors => {
            console.log(errors);
          })
      }


      removeStudent = (student) => {
        this.api.deleteStudent(student.regno).subscribe(
          data => {
            console.log("Student Deleted Successfully");
            this.getStudents();
          },
          errors => {
            console.log(errors);
          })
        }


        ngOnInit(): void {

        }
  }
