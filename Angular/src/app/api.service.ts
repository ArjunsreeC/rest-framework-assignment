import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseurl = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http: HttpClient) { }

  getAllStudents(): Observable<any>{
  return this.http.get(this.baseurl + '/students-api/',
  {headers:this.httpHeaders});
  }

  getOneStudent(id): Observable<any>{
  return this.http.get(this.baseurl + '/students-api/?regno=' + id ,
  {headers:this.httpHeaders});
  }

  putStudent(student): Observable<any>{
  const body = {regno:student.regno , name:student.name , email:student.email};
  return this.http.put(this.baseurl + '/students-api/?regno=' + student.regno, body,
  {headers:this.httpHeaders});
  }

  postStudent(student): Observable<any>{
  const body = {regno:student.regno , name:student.name , email:student.email};
  return this.http.post(this.baseurl + '/students-api/', body,
  {headers:this.httpHeaders});
  }

  deleteStudent(id): Observable<any>{
  return this.http.delete(this.baseurl + '/students-api/?regno=' + id,
  {headers:this.httpHeaders});
  }

}
