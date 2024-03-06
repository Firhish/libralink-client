import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Department } from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService{

  serverHost = "http://localhost:8080/department";

  constructor(private http: HttpClient) {}

  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.serverHost + "/get-all");
  }

  // salwa
   getDepartmentNameById(id:string): Observable<Department>{
    return this.http.get<Department>(this.serverHost + "/get-by-id/" + id)
   }

//   addTeacher(teacher: any): Observable<any>{
//     return this.http.post(this.serverHost + "/add", teacher);
//   }
}
