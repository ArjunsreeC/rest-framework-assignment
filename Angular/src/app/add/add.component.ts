import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  reset = {id: -1, regno:'', name:'', email:''};
  addStudent = {id: -1, regno:'', name:'', email:''};
  submitFlag=false;

  createStudent = () => {
    this.api.postStudent(this.addStudent).subscribe(
      data => {
        console.log("Student Created Successfully");
        this.submitFlag=true;
      },
      errors => {
        console.log(errors);
      })
  }

  constructor(private api: ApiService) { }

  ngOnInit(): void {

  }

}
