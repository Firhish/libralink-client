import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Teacher } from '../model/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  serverHost = "http://localhost:8080/";

  constructor(private http: HttpClient) {}

  getTeacherByUserId(): ObservedValueOf<Teacher[]>{
    return this.http.get<Teacher[]>(this.serverHost + "/get-by-userid")
  }
}
