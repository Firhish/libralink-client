import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  serverHost = "http://localhost:8080/student";

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any>{
    return this.http.get<any>(this.serverHost + "/get-all")
  }

  addStudent(student: any): Observable<any>{
    return this.http.post(this.serverHost + "/add", student);
  }
}
