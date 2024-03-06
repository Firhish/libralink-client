import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  serverHost = "http://localhost:8080/student";

  constructor(private http: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(this.serverHost + "/get-all");
  }

  // //salwa
  // getUserById(id:string): Observable<User>{
  //   return this.http.get<User>(this.serverHost + "/get-by-id/" + id)
  // }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.serverHost + "/get-all")
  }

  addStudent(student: any): Observable<any>{
    return this.http.post(this.serverHost + "/add", student);
  }
}
