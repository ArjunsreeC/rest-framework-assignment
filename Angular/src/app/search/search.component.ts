import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  students = [{regno:'1'},{name:'test'},{email:'test@gmail.com'}];
  searchStudentData = {id: -1 , regno:'' , name:'' , email:''};
  searchResult = [{regno:'1'},{name:'test'},{email:'test@gmail.com'}];
  searchFlag=false;
  regnoFlag=false;
  nameFlag=false;

  searchChange(){
    this.searchFlag = !this.searchFlag;
  }

  getStudents = () => {
    this.api.getAllStudents().subscribe(
      data => {
        this.students = data;
      },
      errors => {
        console.log(errors);
      })
    }

  studentmatched = () => {
    this.api.getOneStudent(this.searchStudentData.regno).subscribe(
      data => {
        this.searchResult = data;
      },
      errors => {
        console.log(errors);
      })
    }

  searchStudent = () => {
    this.nameFlag=false;
    this.studentmatched();
    this.regnoFlag=true;

  }

  searchStudentName = () => {
      this.regnoFlag=false;
      this.nameFlag=true;
  }

  constructor(private api: ApiService) {
    this.getStudents();
  }

  ngOnInit(): void {
  }

}
