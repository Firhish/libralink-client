import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  serverHost = "http://localhost:8080/teacher";

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(this.serverHost + "/get-all");
  }

  getDepartmentNameByDepartmentId(departmentId: number): Observable<any> {
    return this.http.get<any>(this.serverHost + "/get-by-id" + departmentId);
  }
  
  getUsers(): Observable<any>{
    return this.http.get<any>(this.serverHost + "/get-all")
  }

  deleteTeacher(id: number): Observable<any> {
    return this.http.delete<any>(this.serverHost + '/delete-by-id/' + id);
  }

constructor(private http: HttpClient) {}

  getTeacherByUserId(): ObservedValueOf<Teacher[]>{
    return this.http.get<Teacher[]>(this.serverHost + "/get-by-userid")
  }
}

  // getUsers(): Observable<any>{
  //   return this.http.get<any>(this.serverHost + "/get-all")
  // }



