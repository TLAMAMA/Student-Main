import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    API_URLaddStudent = ' localhost:8000/Addstudents';
    API_URLviewStudent = 'localhost:8000/viewStudents';
    constructor(private Http: HttpClient) { }

  add():Observable<any>{
      return this.Http.get(this.API_URLaddStudent);
  }

  view():Observable<any>{
      return this.Http.get(this.API_URLviewStudent);
  }

}