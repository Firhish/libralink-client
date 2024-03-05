import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  serverHost = "http://localhost:8080/teacher";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get<any>(this.serverHost + "/get-all")
  }

  addTeacher(teacher: any): Observable<any>{
    return this.http.post(this.serverHost + "/add", teacher);
  }

}
